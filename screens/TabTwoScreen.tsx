import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 



import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.columncontainer}>
      <View style={styles.separator} lightColor="black" darkColor="white" />
      <View style={styles.columncontainer}>
      <MaterialCommunityIcons name="wardrobe" size={150} color="black" />
        <Text style={styles.title}>My Listings</Text>
      </View>
      <View style={styles.separator} lightColor="black" darkColor="white" />

      <View style={styles.columncontainer}>
      <MaterialIcons name="attach-money" size={150} color="black" />
      <Text style={styles.title}>Sell Item</Text>
      </View>

      <View style={styles.separator} lightColor="black" darkColor="white" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  columncontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
