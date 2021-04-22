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
export default function App()
 {
 

  
 
const changeLoc=()=>
{
  I18n.locale="en"
  console.log(I18n.t('greeting'))
}

  return (
    <SafeAreaView style={{flex:1}}>
   

   
 
    <Text>{RNLocalize.getTemperatureUnit()}</Text>
   
    <Button title={"change lang"}
  
    ></Button>
    </SafeAreaView>

)
}



