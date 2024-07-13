import { StyleSheet, Text, View } from 'react-native';
import data from '@/assets/mockdata.json';
import { Link } from 'expo-router';
import TransactionCard from '@/components/TransactionCard';

export default function TabTwoScreen() {
  const totalTransactions = data.transactions.length;
  const totalBalance = 1876.54;

  const highSpending = data.transactions.reduce((acc, curr) => {
    if (curr.amount > acc.amount) {
      return curr;
    }
    return acc;
  });

  const lowSpending = data.transactions.reduce((acc, curr) => {
    if (curr.amount < acc.amount) {
      return curr;
    }
    return acc;
  });

  return (
    <View style={styles.container}>
      <View style={styles.lineItem}>
        <Text style={styles.lineItemText}>Transactions:</Text>
        <Text style={styles.lineItemValue}>{totalTransactions}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.lineItem}>
        <Text style={styles.lineItemText}>Balance:</Text>
        <Text style={styles.lineItemValue}>${totalBalance}</Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.spendTitle}>High Spending</Text>
      <TransactionCard id={highSpending.id} transaction={highSpending} />
      <View style={styles.divider} />
      <Text style={styles.spendTitle}>Low Spending</Text>
      <TransactionCard id={lowSpending.id} transaction={lowSpending} />
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  lineItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  lineItemText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  lineItemValue: {
    fontSize: 18,
    color: '#333',
  },
  spendTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
