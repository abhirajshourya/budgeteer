import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Details Screen</Text>
      <Text>ID: {id}</Text>
    </View>
  );
}
