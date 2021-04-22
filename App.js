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

import I18n from "react-native-i18n";
import {ModelView} from "react-native-3d-model-view";
import * as RNLocalize from "react-native-localize";

export default function App()
 {
 

  
  I18n.fallbacks = true;

  I18n.locale="fr"
I18n.translations = {
  en: {
    greeting: 'Hi!',
    hi:"hi"
  },
  fr: {
    greeting: 'Bonjour!',
    hi:"fr"
  },

  gj:
  {
    greeting: 'સુપ્રભાત',
    hi:"fin"
  }
}

const changeLoc=()=>
{
  I18n.locale="en"
  console.log(I18n.t('greeting'))
}

  return (
    <SafeAreaView style={{flex:1}}>
   
 
   <Text>{I18n.t('greeting')}</Text>
    <Text>{RNLocalize.getCurrencies()}</Text>
    <Text>{I18n.l("currency", 1990.99)}</Text>
   
    <Button title={"change lang"}
    onPress={()=>changeLoc()}
    ></Button>
    </SafeAreaView>

)
}



