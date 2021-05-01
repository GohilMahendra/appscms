import React from "react";
import { useState } from "react";
import { Dimensions, Text,TouchableOpacity,View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from "react-native-reanimated";
import { useEffect } from "react";
import languages from "../translation";
import * as loca   from "react-native-localization";
const settings=()=>



{

    const setLanguageAsync=async(lang)=>
    {

        await AsyncStorage.setItem('language',lang)



       setLanguage(lang)
       languages.setLanguage(lang)
    }


    
    const getSelectedLanguage=async()=>
    {
        const lang=await AsyncStorage.getItem('language')
        setLanguage(lang)
        
    }

useEffect
(
    ()=>
    {getSelectedLanguage()},[language,setLanguage]
)

const [language,setLanguage]=useState()
    const [selected,setselected]=useState()
    const {height,width}=Dimensions.get('screen')
    return(
    
        
        <View style={{flex:1}}>
            <Text style={{fontStyle:'italic',fontSize:25,marginTop:height/5,alignSelf:"center"}}>SELECT LANAGUAGE</Text>
            <TouchableOpacity
            onPress={()=>setLanguageAsync('en')}
            style={{width:width-40,margin:20,backgroundColor:(language=='en')?"#808000":"#00FFFF",
            alignItems:'center',justifyContent:"center"
            ,height:50,borderRadius:20}}


            ><Text>ENGLISH</Text></TouchableOpacity>
             <TouchableOpacity
              onPress={()=>setLanguageAsync('fr')}
            style={{width:width-40,margin:20,backgroundColor:(language=='fr')?"#808000":"#00FFFF",
            alignItems:'center',justifyContent:"center"
            ,height:50,borderRadius:20}}


            ><Text>FRENCH</Text></TouchableOpacity>
             <TouchableOpacity
              onPress={()=>setLanguageAsync('gj')}
            style={{width:width-40,margin:20,backgroundColor:(language=='gj')?"#808000":"#00FFFF",
            alignItems:'center',justifyContent:"center"
            ,height:50,borderRadius:20}}


            ><Text>GUJRATI</Text></TouchableOpacity>
           
        </View>

    )    


}

export default settings