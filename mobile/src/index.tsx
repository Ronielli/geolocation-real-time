import React, {useEffect, useCallback, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {io, Socket} from 'socket.io-client';

export interface ISendCurrentPosition {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

let socket: Socket;
const src: React.FC = () => {
  const [location, setLocation] = useState<ISendCurrentPosition>();
  useEffect(() => {
    socket = io('http://192.168.1.106:3333');
    socket.on('disconnect', () => {
      console.log('offiline');
    });
    socket.on('requestCurrentPosition', () => {
      handleKeyPress();
    });
    return () => {
      socket.off('sendMessage');
      socket.off('requestCurrentPosition');
    };
  }, []);

  const handleKeyPress = useCallback(async () => {
    await Geolocation.getCurrentPosition((info) => {
      const date: ISendCurrentPosition = {
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        id: '1',
        name: 'Ronielli',
      };
      socket.emit('sendCurrentPosition', date);
      setLocation(date);
    });
  }, []);

  return (
    <View>
      <Text>Socket oi</Text>
      <Text>nome: {location?.name}</Text>
      <Text>latitude: {location?.latitude}</Text>
      <Text>longitude: {location?.longitude}</Text>
      <Text>Socket oi</Text>
      <TouchableOpacity onPress={handleKeyPress}>
        <Text>Manda </Text>
      </TouchableOpacity>
    </View>
  );
};

export default src;
