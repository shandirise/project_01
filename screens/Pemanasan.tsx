import React, { useState, useEffect } from 'react';
import { Alert, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Countdown = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(60);
  const navigation = useNavigation();
  const [exerciseData, setExerciseData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining(prevCount => {
        if (prevCount > 0) {
          return prevCount - 1;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (secondsRemaining === 0 && !showAlert) {
      setShowAlert(true);
      const currentDate = new Date();
      const dateString = currentDate.toLocaleDateString();
      const existingData = exerciseData.find(item => item.tanggal === dateString);

      if (existingData) {
        const updatedData = [...exerciseData];
        const index = updatedData.indexOf(existingData);
        updatedData[index] = { ...existingData, jumlah: existingData.jumlah + 1 };
        setExerciseData(updatedData);
      } else {
        const newData = { exercise: 'pemanasan', jumlah: 1, tanggal: dateString };
        setExerciseData([...exerciseData, newData]);
      }

      storeDataToAsyncStorage(exerciseData);

      Alert.alert(
        'Waktu Selesei!',
        'Waktu selesei!',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('FitZone');
              setShowAlert(false);
            },
          },
        ]
      );
    }
  }, [secondsRemaining, exerciseData, showAlert]);

  const displayTime = formatTime(secondsRemaining);

  const storeDataToAsyncStorage = async (data) => {
    try {
      await AsyncStorage.setItem('exerciseData', JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

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

  useEffect(() => {
    retrieveDataFromAsyncStorage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.countdownText}>{displayTime}</Text>
    </View>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  countdownText: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Countdown;