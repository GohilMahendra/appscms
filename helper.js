import fs from 'react-native-fs'
import React from 'react'
import { cos } from 'react-native-reanimated'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'





const helper=()=>
{

    const [data,setdata]=React.useState('')



    useEffect
    (
        ()=>
        {
    const getdata=async()=>
        {

    const dat=await AsyncStorage.getItem('local')

    setdata(dat)
    }
}
   ,[data] )
    
    console.log(data+'data')

}
export default helper(data)




