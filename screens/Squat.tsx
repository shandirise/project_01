import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CounterButton = () => {
  const [count, setCount] = useState(0);
  const [restartCount, setRestartCount] = useState(2); 
  const navigation = useNavigation();

  const incrementCount = () => {
    if (count < 12) {
      setCount(count + 1);
    } else {
      if (restartCount > 0) { 
        Alert.alert(
          'Set Berakhir}',
          `Tersisa ${restartCount} set Ambil Istirahat terlebih dahulu`,
          [{ text: 'Lanjutkan', onPress: () => handleReset() }]
        );
        setRestartCount(restartCount - 1); 
      } else {
        Alert.alert('Semua Set Telah Selesei', 'Push Up Selesei', [{ text: 'OK' ,
          onPress: () => navigation.navigate('FitZone'),
        }]);
        setCount(0); 
      }
    }
  };

  const handleReset = () => {
    setCount(0); 
  };

  return (
    <View style={styles.container}>
      <Text  style={styles.countdownText}>{count}</Text>
      <Button title="Repetisi" onPress={incrementCount} />
    </View>
  );
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

export default CounterButton;
