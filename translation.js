
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import i18n from 'i18n-js'


export async function gettranslation()
{
    const lang=await ReadFromLocalDB()
   
    i18n.translations=lang
}

export async function addTranslation({obj})
{

  try{

    await AsyncStorage.setItem("langdata",JSON.stringify(obj))
  }
  catch(err)
  {
    console.log(err)
  }


}

const ReadFromLocalDB = async () => {
  const lang=await AsyncStorage.getItem('langdata')
  
  return   (JSON.parse(lang))
 }

 export default ReadFromLocalDB
