import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet,SafeAreaView,Image,Pressable,Modal } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';


import { Text, View } from '../components/Themed';

export default function ModalScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.rowcontainer}>
        
      <View style={styles.rowitem1}>
      <Pressable
                    onPress={() => navigation.navigate( 'Results', {results:["shirts"]}) }
                    style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
        <Image style={{width:"90%", height:"90%"}} resizeMode="contain" source ={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD////u7u7CwsKPj4/19fWhoaG7u7vT09M7Ozurq6t7e3uysrLy8vLa2tri4uKUlJRFRUVfX1+oqKgJCQnBwcHe3t7JyclOTk6ampoZGRl1dXVXV1cuLi4pKSkfHx9tbW0zMzNISEiIiIhubm4RERFAQEB+fn74QFawAAAFQElEQVR4nO2d7XqiMBBGicqHiGhFi1bbat1t7/8OV+yiIQmQQHCE5z1/G5IcB4YEhqcOGzoO9QQ6B4b9B4b9B4b9B4b9B4b9B4b9x5qhG2xSW32xdBO4tvqyYvgazaZORmijN5Zc+5ruw1cbvbU1dNPzl3NnaWFKZ66/l0naNpitDIPliyOwaDmfywkhdvl9HrexbGz46m3FqWRMuCbhLtaZmhvv+LN7oup2uoubTrSRoevv31TzyH5wrlkWjenMS0elHY1S73oF8xfcd0nP66PfKJTmhqNQGbwcfha3K/S02k+SyE+DX1I/Sib71Sn/8xd3zLyq821Y/mtZMhwl0pUn4HOt05q2OfxtJqpp+5UYShoZppXR+2XFH3DQEjQ9ZGt04zUw9E/1gzvF03SkdQQflMqT9MbJFydnwTApyy0iHn9UqHFAYZmw0xzlM7FrOF9qDnxhXThyX9t+VpyPPku91KpjOJoZjCsu3eou3UOhtU7M78x0kk69YbwyGvVC8fjq1LEqNjYdalW/EKgz1EmfIpNiF1Un6k+xqXI9U01tYq029N/Nh3SkxWn5LU5IiYtGo71XJ9YqQ083fYp8Cx2N1Cf6cS60mzYc781j5ZQazhucMTcmYm/xUWrzR7qEWo0o/lp1hguz9Ckxln8xj085q0RO9eN2Q85KNm5Kw8A4fUoot+eLTegtvXCsnIu0LzRmFWgapnWLay1MNwHNsozAiyKxSoaR3uqzlrWZohXBC6eoxtCzNFCGya48tjiukFh5w1bpU4H+BsC3O3Ahsd4N26ZPBTPZRYn9kff3TJcbWkifCt51ztTgo4uhD3li/TUcW0mfKmZ1W5x5/f6qId/jm2HUyY+YsyxdbTD7l36Rj+hquGi6+tTmp+zpfNxZ/HI+F8xxux7kOtBEXm7Eu05PnRzXMXg+0Y7tJAxer8uAUbxZHtYPGnbpNNsB9oeh+2UM3XH6uOuQiJ2j95C5v8ydwivX4XG+3PEfckMkw81WbZ0unIg5X9elQw6i+7vyHm4QJ//3FsMNopvvD4d6T1zedsBDDaJ73+MPM4hL7imG8Xu7XsA/p9F+fd4ndgXDIQaRFQ2HF8SdYDi8IDLR0OYbi2fAkwyHFkQmGybUc7JKojBkj3q+9wi4wizO0Kwe6bkJlYYDuhL52jrecDhBDEsM2V/qmVniLyszrKtA7gtRqSHr/EXbQ3hj5YbDCGJUYcg+qWdngU9WZWi57IMEv9KQPeS9bKd8sGrD/gdRrFOS6tr6HkQxhLLhhnqKLdnUGjYuRX4OppKPbFgexKNvq0ayHQv/WPo3uThZUUGrfLN/ulbE6H3H1DVZkVVwVk7zXdZR1QhLxx3yL+KewzCfTCJ/rKJTI8yErzjXM+4r3KcyvOCOZ4UnE+JnEGWG96tN/Pz22Qwz4t09N6pK5JW1+qNrMeYqkkq1n9Ewm1Z0rY79UpaWl3xvMQqUta9PapgRByWl82bfAT+xYSkwhCEFMIQhDOmBIQxhSA8MYQhDemAIQxjSA0MYwpAeGMIQhvTAEIYwpAeGMIQhPTCEIQzpgSEMYUgPDGEIQ3pgCEMY0gNDGMKQHhjCEIb0wBCGMKQHhjCEIT0whCEM6YEhDGFIDwxhCEN6YAhDGNIDQxjCkB4YwhCG9MAQhjCkB4YwhCE9MIQhDOmBIQxhSA8MYQhDemAIQxjSA8M2hs/xT5ENp2zWfE9td+GnU0OXWq/4H6k7MGTzLbHgwa2fZCtDxhbjzZiKzVj1n9VsG/YNGPYfGPYfGPYfGPYfGPYfGPaf4Rv+A6racgV7HaEsAAAAAElFTkSuQmCC"}}/> 
        </Pressable>
  </View>

      <View style={styles.rowitem2}>
      <Pressable
                    onPress={() => {navigation.navigate( 'Results', {results:["hoodies"]})
                  }}
                    style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
        <Image style={{width:"100%", height:"100%"}} resizeMode="contain" source ={{uri: "https://static.vecteezy.com/system/resources/previews/002/825/339/original/home-outfit-with-hoodie-black-glyph-icon-hooded-jacket-sporty-outfit-unisex-sportswear-comfortable-homewear-and-sleepwear-silhouette-symbol-on-white-space-isolated-illustration-vector.jpg"}} />
        </Pressable>
        </View>
      </View>

      <View style = {styles.rowcontainer}>      
      <View style={styles.rowitem1}>
      <Pressable
                    onPress={() => {navigation.navigate( 'Results', {results:["jeans"]})
                  }}
                    style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
        <Image style={{width:"100%", height:"100%"}} resizeMode="contain" source ={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNF2baGvXUxeszguUpWRP3bjV9S3qYxKDzgQ&usqp=CAU"}} />
        </Pressable>
        </View>
      <View style={styles.rowitem2}>
      <Pressable onPress={() => {navigation.navigate( 'Results', {results:["shoes"]})}} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1,})}>
        <Image style={{width:"100%", height:"100%"}} resizeMode="contain" source ={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Cn2RCav5VplzFbSa6moWIYyLe_agqTZtSo25SVuCdHMJxOJUhDNOAsylWj0CI5zt178&usqp=CAU"}} />
        </Pressable>
        </View>
      </View>

      <View style = {styles.rowcontainer}>
      <View style={styles.rowitem1}>
      <Pressable onPress={() => {navigation.navigate( 'Results', {results:["books"]})}} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1,})}>
        <Image style={{width:"100%", height:"100%"}} resizeMode="contain" source ={{uri: "https://media.istockphoto.com/vectors/book-icon-vector-id1254373900?k=20&m=1254373900&s=170667a&w=0&h=OQ6JNrjZiJRrBIO2WUs9EJPdJCN8mDAnyPKOD_3sseU="}} />
        </Pressable>
      </View>

      <View style={styles.rowitem2}>
      <Pressable onPress={() => {navigation.navigate( 'Results', {results:["misc"]})}} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1,})}>
        <Image style={{width:"100%", height:"100%"}} resizeMode="contain" source ={{uri: "https://www.pngitem.com/pimgs/m/354-3545378_kitchen-kitchen-utensils-icon-white-background-hd-png.png"}} />
        </Pressable>
      </View>
      </View>





      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
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
});
