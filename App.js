import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet ,Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>이야 된다 돼!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

