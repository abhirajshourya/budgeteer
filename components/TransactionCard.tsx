import { Entypo } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TransactionCard({ title, price }: { title: string; price: number }) {
  return (
    <Link
      href={{
        pathname: '/details/[id]',
        params: { id: title },
      }}
    >
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.card_right}>
          <Text>${price}</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  card_right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'light',
  },
});
