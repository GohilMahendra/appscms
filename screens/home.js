import React from "react";
import { Dimensions, Image, Text,View } from "react-native";
import LocalizedStrings from "react-native-localization";

import * as RNLocalize from "react-native-localize";
import en from '../localization/en.json';
import languages from "../translation";
import fr from "../localization/fr.json";
import { useEffect } from "react";
import { getLanguages } from "react-native-i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
console.log(en)


const home=()=>
{



    
   
    
   // const languages={en,fr}
  //  const translate=new LocalizedStrings(languages)
   


  //  translate.setLanguage('fr')
  const [language,setlanguage]=useState('')
    const {height,width}=Dimensions.get('screen')
   

   const [data,setdata]=useState(languages)
    
    const getLanguageAsync=async()=>
    {
        console.log('called funv')
        const LANAGUAGE=await AsyncStorage.getItem('language')

        languages.setLanguage(LANAGUAGE)
    }


    const getlangdata=async()=>
    {
        const LANAGUAGE=await AsyncStorage.getItem('local')

     

        setdata( JSON.parse( LANAGUAGE))


        

    }

    useEffect
    (
        ()=>
        {
            getlangdata()
        },[data,setdata]
    )


    useEffect
    (
        ()=>
        {
            getLanguageAsync()
        },[language,setlanguage]
    )
  

    

    return(
    
        <View style={{flex:1,backgroundColor:"#f5ffff"}}>
            <Text style={{marginTop:70,marginBottom:30,
                left:50,fontSize:30,fontWeight:"bold",
                alignContent:"center"}}>{data.welcome}</Text>
 

            <Image
            source={require('../IMG_2569.jpg')}
         style={{height:height/3,width:width,opacity:0.7,
            backgroundColor:"black",top:height/2,position:'absolute'}}        
        
            ></Image>
        <View style={{height:300,elevation:25,width:'100%',justifyContent:'center',alignItems:"center",borderRadius:30,backgroundColor:"skyblue"}}>

        <Text style={{fontSize:35,fontWeight:'bold',fontStyle:"italic"}}>GADA ELETRONICS</Text>
        <Text style={{fontSize:20}}>{data.tag}</Text>
        </View>
           
           
           </View>
    )    


}

export default home