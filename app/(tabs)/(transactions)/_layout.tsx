import { Stack } from 'expo-router';
import React from 'react';

export default function TransactionsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Transactions',
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{
          title: 'Transaction Detail',
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  );
}
