import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import React from "react";
import { Searchbar } from 'react-native-paper';

export default function TabThreeScreen({}) {
  return (
    <View style={styles.container}>
      <Searchbar>
        <Text style = {styles.title}> Search descriptions </Text>
      </Searchbar>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5%",
  },
  title: {
    fontSize: 20,
    fontWeight: '200',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});