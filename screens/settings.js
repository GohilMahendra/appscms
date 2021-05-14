import React from "react";
import { useState } from "react";
import { Alert, Dimensions, Text,BackHandler,TouchableOpacity,View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from "react-native-reanimated";
import { useEffect } from "react";
import {changeLang} from "../translation";

import * as loca   from "react-native-localization";
import localization from "../localization";
import I18n from "i18n-js";
import { NavigationContainer } from "@react-navigation/native";
const settings=({navigation})=>



{



    
    const setLanguageAsync=async(lang)=>
    {

    
        await AsyncStorage.setItem('language',lang)




      I18n.locale=lang

 
      
      console.log(I18n.t('welcome'))
       setLanguage(lang)

       alert('language changed to '+ lang)
  //     languages.setLanguage(lang)
    }


    
    const getSelectedLanguage=async()=>
    {
        const lang=await AsyncStorage.getItem('language')
        setLanguage(lang)
        
    }

    // useEffect(() => {
    //     const backAction = () => {
    //       Alert.alert("Hold on!", "Are you sure you want to go back?", [
    //         {
    //           text: "Cancel",
    //           onPress: () => null,
    //           style: "cancel"
    //         },
    //         { text: "YES", onPress: () => navigation.push('home') }
    //       ]);
    //       return true;
    //     };
    
    //     const backHandler = BackHandler.addEventListener(
    //       "hardwareBackPress",
    //       backAction
    //     );
    
    //     return () => backHandler.remove();
    //   }, []);
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
            <Text style={{fontStyle:'italic',fontSize:25,
            marginTop:height/5,alignSelf:"center"}}>SELECT LANAGUAGE</Text>
            <TouchableOpacity
            onPress={()=>setLanguageAsync('en')}
            style={{width:width-40,margin:20,backgroundColor:(language=='en')?"#00BFFF":"#fff",
            alignItems:'center',justifyContent:"center"
            ,height:50,borderRadius:20}}


            ><Text>ENGLISH</Text></TouchableOpacity>
             <TouchableOpacity
              onPress={()=>setLanguageAsync('fr')}
            style={{width:width-40,margin:20,backgroundColor:(language=='fr')?"#00BFFF":"#fff",
            alignItems:'center',justifyContent:"center"
            ,height:50,borderRadius:20}}


            ><Text>FRENCH</Text></TouchableOpacity>
             <TouchableOpacity
              onPress={()=>setLanguageAsync('gj')}
            style={{width:width-40,margin:20,backgroundColor:(language=='gj')?"#00BFFF":"#fff",
            alignItems:'center',justifyContent:"center"
            ,height:50,borderRadius:20}}


            ><Text>GUJRATI</Text></TouchableOpacity>
           
        </View>

    )    


}

export default settings