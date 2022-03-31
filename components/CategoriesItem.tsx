import {  StyleSheet,Image,Pressable} from 'react-native';
import { RootStackScreenProps } from '../types';

export default function Categories( {navigation,image,category}: {navigation:RootStackScreenProps<'Categories'>['navigation'], image:string, category:string } ) {
  return (
      <Pressable onPress={() => {navigation.pop(),navigation.navigate( 'Results', {results:[category]})}} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1,})}>
        <Image style={{width:"100%", height:"100%"}} resizeMode="contain" source ={{uri: image}} />
        </Pressable>
  );
}

