import TransactionCard from '@/components/TransactionCard';
import { ScrollView, StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <ScrollView style={styles.container}>
      <TransactionCard title="Chicken Wings" price={20.56} />
      <TransactionCard title="French Vanilla" price={3.49} />
      <TransactionCard title="Bagel" price={4.99} />
      <TransactionCard title="Rasmalai" price={3.99} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
  },
});
