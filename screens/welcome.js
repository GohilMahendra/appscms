

import I18n from "i18n-js";
import React, { useState } from "react";


import { Dimensions, Text,View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
const welcome=({navigation})=>
{



    const {height,width}=Dimensions.get('screen')


   
    return(
    
        <View style={{flex:1,backgroundColor:"#f5ffff",justifyContent:'center'}}>



        <View style={{alignSelf:'center',justifyContent:"center"}}>
        <Text style={{fontSize:45}}>heatbit</Text>

        <Text style={{fontSize:15}}>Stop humming search for it!!!</Text>
        
        <FontAwesome5Icon name="music" size={45} color="#76b6fc"
        style={{alignSelf:"center",margin:20}}
        ></FontAwesome5Icon>
        </View>




        <TouchableOpacity

        onPress={()=>navigation.navigate('home')}
        style={{alignSelf:"center",marginTop:30,borderRadius:30,backgroundColor:"#76b6fc",alignItems:"center"}}
        >
        <Text style={{fontWeight:"bold",margin:20,fontSize:30}}>Proceed</Text>

        </TouchableOpacity>

           </View>
    )    


}

export default welcome