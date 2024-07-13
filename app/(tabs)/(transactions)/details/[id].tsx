import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import data from '@/assets/mockdata.json';
import TransactionCard from '@/components/TransactionCard';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  const transaction = data.transactions.find((t) => t.id === Number(id));

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  const similarTransactions = data.transactions.filter(
    (t) => t.category === transaction?.category && t.id !== transaction?.id
  );

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
      <View style={styles.bannerSecondary}>
        <Text
          style={{
            padding: 10,
          }}
        >
          {formatDate(transaction?.date!)}
        </Text>
        <Text>Category: {transaction?.category}</Text>
      </View>
      <ScrollView
        style={{
          padding: 10,
        }}
      >
        <View style={styles.divider} />
        <Text style={styles.spendTitle}>Similar Transactions</Text>
        {similarTransactions.length === 0 && (
          <Text
            style={{
              padding: 10,
              fontSize: 16,
              color: 'gray',
            }}
          >
            No similar transactions found
          </Text>
        )}
        {similarTransactions.map((t) => (
          <TransactionCard key={t.id} id={t.id} transaction={t} />
        ))}
      </ScrollView>
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
  bannerSecondary: {
    display: 'flex',
    flexDirection: 'column',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bfecfd',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  spendTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 10,
  },
});
