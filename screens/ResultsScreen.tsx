import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet,Image,FlatList,Pressable,modal } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import {DATA,DATAprops} from '../components/data';
import { RootStackScreenProps } from '../types';
import { Text, View } from '../components/Themed';

export default function ResultsScreen({navigation,route}:RootStackScreenProps<"Results">) {
  return (
    <View style={styles.container}>
            <Text style={styles.headingstyle}> Results </Text>
          <LoadItem1/>
    </View>
  );
}

const LoadItem1 = () => (
    <View style={styles.rowcontainer}>
        <FlatList 
          directionalLockEnabled = {true}
          horizontal={true}
          data = {FindElement()}
          renderItem = {renderItem}
          contentContainerStyle={{
            flex: 1,
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
    }}/>
    </View>
)

const renderItem = ({ item }:{item: DATAprops}) => (
  <ITEM image= {item.image} itemid={item.id} />
)

function ITEM({image,itemid}:{image: string, itemid: number}){
    const navigation = useNavigation()
  return(
  <View>  
  <Pressable
  onPress={() => navigation.navigate('Item', {name:itemid}) }
  style={({ pressed }) => ({
    opacity: pressed ? 0.5 : 1,
  })}>
  <Image style={{width: 125, height: 125, aspectRatio: 1}} source = {{uri: image}}/>
</Pressable>   
</View>
  )
}

function FindElement() {
    const navigation = useNavigation();
    const route = useRoute();
    var resultsDict = [];
    const thing1 = route.params?.results;
    for(let i = 0; i< DATA.length ; i++){
        for(let j=0; j< thing1.length; j++){
            for(let k=0;k<DATA[i].categories.length;k++){
                if (DATA[i].categories[k] == thing1[j]) {
                    resultsDict.push(DATA[i]);
                }
            } 
        }
    }
    return resultsDict
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 5,
  },
  rowcontainer: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: "10%",
    paddingBottom: "10%",
    backgroundColor:"white",
  },
  rowitem1:{
    flex:1,
    paddingLeft: "5%",
    backgroundColor: "white",
  },
  rowitem2:{
    flex:1,
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "white",
  },
  headingstyle:{
    fontSize: 20,
    fontWeight: 'bold',
  },
});