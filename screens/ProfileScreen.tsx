import { StyleSheet,SafeAreaView,FlatList,Image,ScrollView, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import PropTypes from "prop-types";

import { Text, View } from '../components/Themed';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
    
      <View style= {[styles.rowcontainer,{flex:1.5}]}>
        <Text> <Ionicons name="person" size={100} color="black" /></Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style= {[styles.rowcontainer,{flex:1}]}>
      <View style= {styles.columncontainer}>
        <Text style = {styles.title}> <Text> <Ionicons name="person" size={24} color="black" /> </Text> Alvin Wu </Text>
      </View>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <View style= {[styles.columncontainer,{flex:6}]}>
      
      <View style= {[styles.rowcontainer,{flex:2}]}>
        <View style= {styles.columncontainer}>
        <Text style = {styles.title}><Text><AntDesign name="eye" size={24} color="black" /> </Text> Password </Text>
        </View>
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     
      <View style= {[styles.rowcontainer,{flex:2}]}>
      <View style= {styles.columncontainer}>
        <Text style = {styles.title}> <Text> <AntDesign name="mobile1" size={24} color="black" /> </Text> 718-2727-2727 </Text>
      </View>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <View style= {[styles.rowcontainer,{flex:2}]}>
      <View style= {styles.columncontainer}>
        <Text style = {styles.title}><Text><Ionicons name="ios-mail" size={24} color="black" /></Text> aw3254@columbia.edu </Text>
        </View>
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        </View>

        <View style= {[styles.rowcontainer,{flex:1.5}]}>
        <View style = {[styles.button,styles.columncontainer]}>
        <Text style={styles.title1}>       Edit me      </Text> 
          </View>
        </View>




      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}



const profileData = [
  {
    name: "Alvin Wu",
    data: {
      name: "Alvin Wu",
      email: "aw3254@columbia.edu",
      mobile: "718-323-3232",
      password: "something",
    }
    }
]

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: 'flex-start',
      padding: "5%"
  },
  columncontainer: {
      flexDirection: "column",
      paddingTop: 5,
      justifyContent: 'center',
    },
  rowcontainer: {
      flexDirection: "row",
      paddingTop: 5,
      justifyContent: 'center',
    },
  title: {
      fontSize: 30,
      fontWeight: 'bold',
  },
  title1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "white",
    marginBottom: 5,
},
  button: {
    backgroundColor: "black",
    borderWidth: 0,
    width: 150,
    height: undefined,
    aspectRatio: 2,
    borderRadius: 20,
  },
  separator: {
      height: 1,
      width: '100%',
  },
});