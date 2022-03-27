/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { Ionicons } from '@expo/vector-icons'; 
 import { AntDesign } from '@expo/vector-icons'; 
 import { FontAwesome5 } from '@expo/vector-icons';

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
 import ItemScreen from '../screens/ItemScreen';
 import ResultsScreen from '../screens/ResultsScreen';



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
       <Stack.Screen name="Item" component={ItemScreen} options={{ title: 'MarketPlace@CU' }} />
       <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'MarketPlace@CU' }} />
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
           headerTitle: "Marketplace@CU",
           headerTitleStyle: {
             fontWeight: 'bold',
             fontSize: 30,
            },
            title: 'MarketPlace',
            tabBarIcon: ({color}) => <TabBarIcon1 name="home"  color = {color} />,
            headerRight: () => (
             <Pressable
               onPress={() => navigation.navigate('Categories')}
               style={({ pressed }) => ({
                 opacity: pressed ? 0.5 : 1,
               })}>
               <FontAwesome5 name="filter" size={24} color="black" style = {{marginRight:10}}/>
             </Pressable>
           ),
         })}
       />
       <BottomTab.Screen
         name="TabTwo"
         component={TabTwoScreen}
         options={{
           title: 'Sell',
           headerTitle: 'Marketplace@CU',
           tabBarIcon: ({ color }) => <TabBarIcon1 name="camera" color={color} />,
           headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
           },
         }}
       />
       <BottomTab.Screen
         name="TabThree"
         component={TabThreeScreen}
         options={{
           title: 'Search',
           headerTitle: 'Marketplace@CU',
           tabBarIcon: ({ color }) => <TabBarIcon1 name="search1" color={color} />,
           headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          }
         }}
         
       />
       <BottomTab.Screen
         name="Profile"
         component={ProfileScreen}
         options={{
           title: 'Profile',
           headerTitle: 'Marketplace@CU',
           tabBarIcon: ({ color }) => <Ionicons name="person" style={{ marginBottom: -3 }} size={30} color={color} />,
           headerTitleStyle: {
             fontWeight: 'bold',
             fontSize: 30,
           }
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