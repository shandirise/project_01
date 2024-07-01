import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExerciseHistory = () => {
  const [exerciseData, setExerciseData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    retrieveDataFromAsyncStorage();
  }, []);

  const retrieveDataFromAsyncStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem('exerciseData');
      if (storedData) {
        setExerciseData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterDataByDate = (date) => {
    const filteredData = exerciseData.filter((item) => item.tanggal === date.toLocaleDateString());
    return filteredData;
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.exercise}</Text>
        <Text style={styles.itemText}>{item.jumlah} times</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <DatePicker
        style={styles.datePicker}
        date={selectedDate}
        onDateChange={(date) => setSelectedDate(date)}
        mode="date"
      />
      <FlatList
        data={filterDataByDate(selectedDate)}
        renderItem={renderItem}
        keyExtractor={(item) => item.tanggal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  datePicker: {
    width: 200,
    marginBottom: 20,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default ExerciseHistory;