import { StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.lineItem}>
        <Text style={styles.lineItemText}>Transactions:</Text>
        <Text>5</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.lineItem}>
        <Text style={styles.lineItemText}>Balance:</Text>
        <Text>$413.29</Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.spendTitle}>High Spending</Text>
      <View style={styles.lineItem}>
        <Text>Chicken Wings</Text>
        <Text>$20.56</Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.spendTitle}>Low Spending</Text>
      <View style={styles.lineItem}>
        <Text>French Vanilla</Text>
        <Text>$3.49</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 5,
  },
  lineItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineItemText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  spendTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
