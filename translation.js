import { translate } from "i18n-js";
import React from "react";
import { Dimensions, Image, ImageComponent, Text,View } from "react-native";
import LocalizedStrings from "react-native-localization";

import * as RNLocalize from "react-native-localize";

import fs from 'react-native-fs'
import { getLanguages } from "react-native-i18n";
import fr from './localization/fr.json'
import en from './localization/en.json'
import gj from './localization/gj.json'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import {data} from './helper'


en.welcome="ds"
let itemx=""

const getdata=()=>
{




    var item=[]
    AsyncStorage.getItem('local').then(
        (res)=>{
            item.push(res)
        }
    ).catch(err=>console.log(err))

if(item !== null)
{

    return (item)
}

return {}
}






var p=getdata()
console.log(JSON.stringify(p)+'uu')
languages={en,fr,gj}




export default new LocalizedStrings(languages)