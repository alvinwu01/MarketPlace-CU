import { StyleSheet,SafeAreaView,FlatList,Image,ScrollView } from 'react-native';
import React from "react";
import PropTypes from "prop-types";

import {DATA} from "../components/constants";
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <LoadItem thing = {DATA}/>
      <LoadItem thing = {DATA}/>
      <LoadItem thing = {DATA}/>
      <LoadItem thing = {DATA}/>
      <LoadItem thing = {DATA}/>
      <LoadItem thing = {DATA}/>
      <LoadItem thing = {DATA}/>
      </ScrollView>
    </SafeAreaView>
  );
}



const LoadItem = ({thing}) => (
    <View style={styles.rowcontainer}>
      <Text style = {styles.headingstyle}> Hello </Text>
        <FlatList 
          directionalLockEnabled = {true}
          horizontal={true}
          data = {thing} 
          renderItem = {renderItem}
          contentContainerStyle={{
            flexGrow: 1,
            height: 100,
          }}
          ItemSeparatorComponent={() => {
          return (
            <View
                style={{
                height: 100,
                width: 10,
                }}
            />
        );
    }}
    keyExtractor = {item => item.id}/>
    </View>
)

const renderItem = ({ item }) => (
  <ITEM image= {item.image} />
)

const ITEM  = ({image}) => (
  <View style= {styles.rowcontainer}>
    <Image style={{width: 100, height: 100}} source = {{uri: image}}/>
  </View>
)

ITEM.propTypes = {
  image: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    
  },
  rowcontainer: {
    paddingTop: 5,
    height: 150,
    paddingLeft: 10,
  },
  headingstyle:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
