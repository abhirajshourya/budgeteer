import TransactionCard from '@/components/TransactionCard';
import { ScrollView, StyleSheet } from 'react-native';
import data from '@/assets/mockdata.json';

export default function Tab() {
  return (
    <ScrollView style={styles.container}>
      {data.transactions.map((transaction) => (
        <TransactionCard key={transaction.id} id={transaction.id} transaction={transaction} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#f0f4f8',
    padding: 10,
  },
});
