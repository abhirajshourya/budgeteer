import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from '@/assets/mockdata.json';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  const transaction = data.transactions.find((t) => t.id === Number(id));

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 5,
          }}
        >
          ${transaction?.amount}
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          {transaction?.store_name}
        </Text>
        <Text>{transaction?.location}</Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          padding: 10,
          textAlign: 'right',
        }}
      >
        Dated: {formatDate(transaction?.date!)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#93e0ff',
  },
});
