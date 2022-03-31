import { StyleSheet} from 'react-native';
import { RootStackScreenProps } from '../types';
import RenderPage from '../components/RenderItems'

import {  View} from '../components/Themed';


export default function ItemScreen({navigation,route}:RootStackScreenProps<'Item'>) {
    return (
      <View style={styles.container}>
        <RenderPage/>
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        padding: "5%"
    },
  });