/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,Image,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {ModelView} from "react-native-3d-model-view";
import * as RNLocalize from "react-native-localize";
import {  } from "i18n-js";
import edit from "./screens/edit";
import  FontAwesome5Icon  from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import {  } from "react-native-localization";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import home from './screens/home';
import settings from './screens/settings';
export default function App()
 {
 

  const container=createBottomTabNavigator()
   return(
    <NavigationContainer>
      <container.Navigator
      initialRouteName="home"
      >

      <container.Screen
      
      name="home"

      component={home}

      options=
      {
        {
          tabBarIcon:({size,focused,color})=>
         <FontAwesome5Icon name="home" size={size} color={color}></FontAwesome5Icon>
          
        }
      }
     />


      <container.Screen
      
      name="edit"


      component={edit}
      options=
      {
        {
          tabBarIcon:({size,focused,color})=>
         <FontAwesome5Icon name="edit" size={size} color={color}></FontAwesome5Icon>
          
        }
      }
      />
 <container.Screen
      
      name="settings"

      component={settings}
      options=
      {
        {
          tabBarIcon:({size,focused,color})=>
         <Ionicons name="options" size={size} color={color}></Ionicons>
          
        }
      }
      />


    
      </container.Navigator>
    </NavigationContainer>
   )

}



