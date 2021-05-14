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
import { fallbacks } from "i18n-js";
import edit from "./screens/edit";
import  FontAwesome5Icon  from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import {  } from "react-native-localization";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import home from './screens/home';
import settings from './screens/settings';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import welcome from "./screens/welcome";
import {createStackNavigator  } from "@react-navigation/stack";
import translation from './translation';
export default function App()
 {
 

  const container=createStackNavigator()
   return(


   

    <NavigationContainer>
      <container.Navigator
      initialRouteName="welcome"
      >

<container.Screen
      
      name="welcome"

      options=
      {
        {
          headerShown:false
        }
      }

      component={welcome}
     
      />
      <container.Screen
      
      name="settings"

      options=
      {
        {
          headerShown:false
        }
      }

      component={settings}
     
      />

      <container.Screen
      
      name="home"

      component={home}

      
    
     />


      <container.Screen
      
      name="edit"


      component={edit}
     
      />


    
      </container.Navigator>
    </NavigationContainer>

   )

}



