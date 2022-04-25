import { StyleSheet,SafeAreaView,FlatList,Image,ScrollView, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from "react";
import PropTypes from "prop-types";

import {DATA,DATAprops} from "../components/data";
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <LoadItem thing = {DATA} heading="Hot Items"/>
      <LoadItem thing = {DATA} heading="New Items"/>
      <LoadItem thing = {DATA} heading="For the Low"/>
      <LoadItem thing = {DATA} heading="Discounted"/>
      <LoadItem thing = {DATA} heading="Most viewed"/>
      <LoadItem thing = {DATA} heading="Hello"/>
      <LoadItem thing = {DATA} heading="Something Else"/>
      </ScrollView>
    </SafeAreaView>
  );
}

// Generate html code for list of images 
const LoadItem = ({thing,heading}:{thing: typeof DATA,heading:string}) => (
    <View style={styles.rowcontainer}>
      <Text style = {styles.headingstyle}> {heading} </Text>
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
    />
    </View>
)

// Extract image and item id from data element.
const renderItem = ({ item }:{item: DATAprops}) => (
  <ITEM image= {item.image} itemid={item.id} />
)

// Generate clickable image 
function ITEM({image,itemid}:{ image:string,itemid:number}){
  const navigation = useNavigation();
  return(
  <View>  
  <Pressable
  onPress={() => navigation.navigate("Item", {name:itemid}) }
  style={({ pressed }) => ({
    opacity: pressed ? 0.5 : 1,
  })}>
  <Image style={{width: 100, height: 100}} source = {{uri: image}}/>
</Pressable>   
</View>
  )
}

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
