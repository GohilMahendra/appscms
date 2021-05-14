import React from "react";
import { Button, Dimensions, Image, Text,TextInput,View } from "react-native";
import LocalizedStrings from "react-native-localization";

import * as RNLocalize from "react-native-localize";
import en from '../localization/en.json';

import fr from "../localization/fr.json";
import { useEffect } from "react";
 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import I18n, { translate } from "i18n-js";


import languages from "../localization";


import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
const home=({navigation})=>
{





   console.log(I18n.translations.en)


    console.log(languages)
    const {height,width}=Dimensions.get('screen')
    return(
    
        <View style={{flex:1,backgroundColor:"#f5ffff"}}>

<View style={{flexDirection:'row'}}>
    
           <Text style={{fontSize:20,margin:20}}>{I18n.t('tag')}</Text>
           <TouchableOpacity 
           
           onPress={()=>navigation.navigate('settings')}
           style={{alignItems:'center',
           
           justifyContent:'center',margin:20,width:70,borderRadius:20,backgroundColor:'#006994'}}>
               <Text style={{fontSize:20,fontWeight:'bold',color:"#fff"}}>{I18n.currentLocale()}</Text>
           </TouchableOpacity>
</View>
        <View style={{flexDirection:'row'}}>
            <TextInput

            placeholder="search"
            style={{width:width/1.3,height:70,borderRadius:30,borderWidth:1}}
            >

            </TextInput>

            <TouchableOpacity style={{backgroundColor:"black",borderRadius:10}}>
                <FontAwesome5Icon name="search" size={50} color={"white"}
                style={{margin:10
                }}
                ></FontAwesome5Icon>
            </TouchableOpacity>
        </View>


        <TouchableOpacity


        style={{alignItems:"center",justifyContent:"center",
        margin:30,borderRadius:30,width:100,height:50,marginTop:100,
        backgroundColor:'#6a5acd',alignSelf:"center"}}
        onPress={()=>navigation.navigate('edit')}
        >
            <Text style={{color:"white"}}>EDIT HERE</Text>
        </TouchableOpacity>

           </View>
    )    


}

export default home