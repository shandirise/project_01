import React, { useState, useEffect } from 'react';
import { Alert, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Countdown = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(30);
  const [restartCount, setRestartCount] = useState(2); 
  const navigation = useNavigation();

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

  const displayTime = formatTime(secondsRemaining);

  useEffect(() => {
    if (secondsRemaining === 0 && restartCount > 0) {
      Alert.alert(
        'Set selesei',
        'Set Selesei Ambil Istirahat terlebih dahulu!',
        [
          {
            text: 'Lanjutkan',
            onPress: () => {
              setSecondsRemaining(30); 
              setRestartCount(restartCount - 1);
            },
          },
        ]
      );
    } else if (secondsRemaining === 0 && restartCount === 0) {
      
      Alert.alert(
        'Semua Set selesei!',
        'Plank telah selesei',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('FitZone'),
          },
        ]
      );
    }
  }, [secondsRemaining, restartCount]);

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
