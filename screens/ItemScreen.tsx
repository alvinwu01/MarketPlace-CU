import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet,ScrollView,Image,Pressable } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 


import {DATA} from "../components/data";
import { Text, View} from '../components/Themed';


export default function ItemScreen({navigation,route}) {
    return (
      <View style={styles.container}>
        <RenderPage/>
      </View>
    );
  }

function RenderPage(){
    const route = useRoute()
    const itemID = route.params.name
    var thisItem = findElement(itemID)
    var id = thisItem?.id
    var name = thisItem?.name
    var image = thisItem?.image
    var price = thisItem?.price
    var info = thisItem?.info
    var userid = thisItem?.userid
    return(
    <>

    <View style = {[styles.rowcontainer,{flex: 7}]}> 
        <Image style={{paddingTop:"10%",width: '100%', height: undefined, aspectRatio: 1,}}source = {{uri: image}} />
    </View>


    <View style = {[styles.rowcontainer,{flex:1.5}]}> 
            <Text style={[styles.title,styles.rowitem1]}> {name} </Text> 
            <Text style={{flex:1}}></Text>
            <Text style={[styles.price,styles.rowitem2]}> ${price} </Text>
    </View>

    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    
    <View style = {[styles.rowcontainer,{flex:4}]}> 
    <ScrollView> 
        <Text style={[styles.textinfo,styles.rowitem1]}> {info} </Text> 
    </ScrollView>  
    </View>

        <View style = {[styles.rowcontainer1,{flex:1.5}]}> 
            <View style ={styles.columncontainer}>
                <Pressable
                    onPress={() => navigation.navigate( 'Item', {name:itemid}) }
                    style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
                    <Text> <Entypo name="message" size={80} lightColor="black" darkColor="white" /> </Text>
                    </Pressable>  
                </View>
         </View>
    </>
    )
}

function findElement(id) {
    for(let i = 0; i< DATA.length ; i++){
        if (DATA[i].id == id) {
            return DATA[i];
        } 
    }
}

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
        justifyContent: 'flex-start',
      },
    rowcontainer: {
        flexDirection: "row",
        paddingTop: 5,
        justifyContent: 'flex-start',
      },
      rowcontainer1: {
        flexDirection: "row",
        paddingTop: 5,
        justifyContent: 'center',
      },
      rowitem1:{
          marginTop: 10,
        flex:7,
        backgroundColor: "white",
      },
      rowitem2:{
        marginTop: 10,
        flex:3,
        backgroundColor: "white",
      },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "green",
    },
    textinfo: {
        fontSize: 20,
    },
    separator: {
        marginVertical: 15,
        height: 1,
        width: '100%',
    },
    separator1: {
        marginVertical: 15,
        height: 20,
        width: '100%',
    },
  });