import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet} from 'react-native';


export const Greeting = (props) => {
    return (
      <View style={styles.format}>
        <Text>Hello {props.name}!</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  format:{
    alignItems: 'center',
  },
});
