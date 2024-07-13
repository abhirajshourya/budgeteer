import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(transactions)"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'file-tray-full' : 'file-tray-full-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="summary"
        options={{
          title: 'Summary',
          headerShown: true,
          headerTitle: 'Summary',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
