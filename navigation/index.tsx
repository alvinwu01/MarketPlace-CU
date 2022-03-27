/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { Ionicons } from '@expo/vector-icons'; 
 import { AntDesign } from '@expo/vector-icons'; 
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import * as React from 'react';
 import { ColorSchemeName, Pressable } from 'react-native';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import CategoriesScreen from '../screens/CategoriesScreen';
 import NotFoundScreen from '../screens/NotFoundScreen';
 import TabOneScreen from '../screens/TabOneScreen';
 import TabTwoScreen from '../screens/TabTwoScreen';
 import TabThreeScreen from '../screens/TabThreeScreen';
 import ProfileScreen from '../screens/ProfileScreen';
 import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
 import LinkingConfiguration from './LinkingConfiguration';
 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator>
       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
       <Stack.Group screenOptions={{ presentation: 'modal' }}>
         <Stack.Screen name="Categories" component={CategoriesScreen} />
       </Stack.Group>
     </Stack.Navigator>
   );
 }
 
 /**
  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
  * https://reactnavigation.org/docs/bottom-tab-navigator
  */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();
 
 function BottomTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <BottomTab.Navigator
       initialRouteName="TabOne"
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].tint,
       }}>
       <BottomTab.Screen
         name="TabOne"
         component={TabOneScreen}
         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
           title: 'Home',
           tabBarIcon: ({color}) => <TabBarIcon1 name="home"  color = {color} />,
           headerRight: () => (
             <Pressable
               onPress={() => navigation.navigate('Categories')}
               style={({ pressed }) => ({
                 opacity: pressed ? 0.5 : 1,
               })}>
 <AntDesign name="frown" size={24} color="black" style={{ marginRight: 20 }} />
             </Pressable>
           ),
         })}
       />
       <BottomTab.Screen
         name="TabTwo"
         component={TabTwoScreen}
         options={{
           title: 'Sell',
           tabBarIcon: ({ color }) => <TabBarIcon1 name="camera" color={color} />,
         }}
       />
       <BottomTab.Screen
         name="TabThree"
         component={TabThreeScreen}
         options={{
           title: 'Search',
           tabBarIcon: ({ color }) => <TabBarIcon1 name="search1" color={color} />,
         }}
       />
       <BottomTab.Screen
         name="Profile"
         component={ProfileScreen}
         options={{
           title: 'Search',
           tabBarIcon: ({ color }) => <Ionicons name="person" style={{ marginBottom: -3 }} size={30} color={color} />,
         }}
       />
     </BottomTab.Navigator>
   );
 }
 
 /**
  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  */
 
 function TabBarIcon1(props: {
   name: React.ComponentProps<typeof AntDesign>['name'];
   color: string;
 }) {
   return <AntDesign size={30} style={{ marginBottom: -3 }} {...props} />;
 }