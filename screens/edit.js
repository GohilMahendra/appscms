import React from "react";
import { Dimensions, Text,TextInput,TouchableOpacity,View } from "react-native";

import en from '../localization/en.json'
import fr from '../localization/fr.json'
import gj from '../localization/gj.json'
import languages from '../translation'

import fs from 'react-native-fs'
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from "react/cjs/react.production.min";
const edit=()=>

{




    const languages=JSON.parse(item)
    
    console.log(languages)
   const [item,setitem]=useState()



    useEffect
    (()=>
        {
              
    try
    {
 AsyncStorage.getItem('local').then(res=>{setitem(res)}).catch(err=>console.log(err))
 }
    catch(err)
    {

    }
        }
        ,[item]
    )



    
    const {height,width}=Dimensions.get('screen')

    const [tag,settag]=React.useState()
    const [welcomen,setwelcome]=React.useState()
    
    //   fs.writeFile(path+'/gj.json',JSON.stringify(gj), 'utf8')
    // .then((success) => {
    //   console.log('FILE WRITTEN!');
    // })
    // .catch((err) => {
    //   console.log(err.message);
    // });


    const changeSentence=()=>
    {
        
    }

    const [lang,setlang]=useState("en")
    

    return(
    
        <View style={{flex:1}}>
            <Text style={{margin:50,fontSize:35,alignSelf:"center",fontWeight:"bold"}}>EDIT HERE</Text>
            <View style={{flexDirection:"row",margin:20,justifyContent:'space-around'}}>
            <TouchableOpacity 
            onPress={()=>setlang("en")}
            style={{width:100,alignItems:"center",
            justifyContent:"center",height:50,borderRadius:30,
            borderWidth:(lang=="en")?3:0,
            backgroundColor:"#1bf1ff"}}>
            <Text>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>setlang("fr")}
            style={{width:100,height:50,borderRadius:30,
                alignItems:"center",justifyContent:"center",
                borderWidth:(lang=="fr")?3:0,
                backgroundColor:"#1bf1ff"}}> 
                <Text>FRENCH</Text>
                </TouchableOpacity>
            <TouchableOpacity 
            
            onPress={()=>setlang("gj")}
            style={{width:100,height:50,justifyContent:"center",
            alignItems:'center',borderRadius:30,
            borderWidth:(lang=="gj")?3:0, backgroundColor:"#1bf1ff"}}> 
                <Text>GUJRATI</Text>
                </TouchableOpacity>
            </View>


            <TextInput
        
            placeholder="enter welcome sentence..."
            onChangeText={val=>setwelcome(val)}
            style={{width:width-40,margin:20,borderRadius:30,borderWidth:1}}
            >

            </TextInput>
            <TextInput
            placeholder="enter tag sentence..."
            onChangeText={val=>settag(val)}
            style={{width:width-40,margin:20,borderRadius:30,borderWidth:1}}
            >

            </TextInput>
        
            <TouchableOpacity style={{width:width/5,height:50
                ,backgroundColor:'#ffa45a',borderRadius:20,
                justifyContent:"center",
                alignItems:'center',alignSelf:'center'}}>
                <Text>CHANGE</Text>
            </TouchableOpacity>

        </View>
    )    


}

export default edit