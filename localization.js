import React from 'react'
import LocalizedStrings from 'react-native-localization'
import {helper} from './helper'

import ReadFromLocalDB ,{gettranslation}from "./translation";
import i18n from "i18n-js";
import en from './localization/en.json'
import fr from './localization/fr.json'
import gj from './localization/gj.json'

import AsyncStorage from "@react-native-async-storage/async-storage";





//user defined funtion to get persisted language from database
//it is i18n practice done by user
//nothing to releted sdk
async function getLanguage() {
    const choice = await AsyncStorage.getItem('lang')
    i18n.locale = 'fr'
    i18n.fallbacks = true
  
    
  }
  gettranslation()

  getLanguage()


  export function t(name) {
    return i18n.t(name)
  }


// const localization=()=>

// {


//   const lang={en,fr,gj}




//     const languages=new LocalizedStrings(lang)

    
  
//     console.log(languages.getLanguage())
//     return languages
// }

// export default localization
