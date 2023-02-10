import React from 'react';
import {SafeAreaView, StyleSheet, Button, Text, View, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainContainer from './navigation/MainContainer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainContainer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;