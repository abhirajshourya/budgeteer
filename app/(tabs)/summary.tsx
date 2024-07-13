import { StyleSheet, Text, View } from 'react-native';
import data from '@/assets/mockdata.json';
import { Link } from 'expo-router';

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
      <Link
        href={{
          pathname: '/details/[id]',
          params: { id: highSpending.id },
        }}
      >
        <View style={styles.spendItem}>
          <Text style={styles.spendStore}>{highSpending.store_name}</Text>
          <Text style={styles.spendAmount}>${highSpending.amount}</Text>
        </View>
      </Link>
      <View style={styles.divider} />
      <Text style={styles.spendTitle}>Low Spending</Text>
      <Link href={{ pathname: '/details/[id]', params: { id: lowSpending.id } }}>
        <View style={styles.spendItem}>
          <Text style={styles.spendStore}>{lowSpending.store_name}</Text>
          <Text style={styles.spendAmount}>${lowSpending.amount}</Text>
        </View>
      </Link>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#444',
  },
  spendItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    marginBottom: 10,
  },
  spendStore: {
    fontSize: 18,
    color: '#333',
  },
  spendAmount: {
    fontSize: 18,
    color: '#e53935',
    fontWeight: 'bold',
  },
});
