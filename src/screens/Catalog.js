import React, { useEffect, useState,useCallback } from 'react'
import { StyleSheet, View,Text, Image,FlatList,Button, Alert, TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import dbSqlite from '../../configs/dbOpen';
import {useIsFocused} from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import {useNavigation} from '@react-navigation/native'
import FLatListRentals from '../components/FlatList/FLatListRentals';
import FlashMessage,{showMessage,hideMessage} from "react-native-flash-message";
const Catalog = () => {
  const navigation = useNavigation()
  const [rentalData,setRentalData] = useState({
    data:[],
    empty:false
 })
 const [action,setAction] = useState('')
 const [show,setShow] = useState(false)
 const [status,setStatus] = useState('')
 const isFocused = useIsFocused();
 const onOpenDetails =(id)=>{
   navigation.navigate('Details',{
     idCard:id,
     message:'taken id ok!!!'
   })
 }
   const fetchAllData = ()=>{
    return new Promise((resolve,reject)=>{
        dbSqlite.dbOpen().transaction((tx)=>{
          tx.executeSql(
            "SELECT * FROM rentalZ",
            [],
            (tx,result)=>{
              let itemArray = []
              const len = result.rows.length
              if(len>0){
                for(let i = 0;i<len;++i){
                  itemArray.push(result.rows.item(i))
                  setRentalData({...rentalData,data:itemArray,empty:false})
                }
              }else{
                setRentalData({...rentalData,empty:true})
              }
              resolve(result)
              return result
            },
            error=>{reject(error)}
          )
        })
      })
  }
  const requestLibrary = async()=>{
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
  useEffect(()=>{
    fetchAllData()
    if(status === 'pending'){
      setTimeout(()=>{
         setStatus('success')
      },2000)
    }else if(status === 'success'){
      setTimeout(()=>{
        setStatus('')
        setShow(false)
      },6000)
    }
    requestLibrary();
    
  },[isFocused,status])
    const deletePicture = async(id)=>{
        await dbSqlite.dbOpen().transaction((tx)=>{
          tx.executeSql("DELETE FROM rentalZ WHERE rental_id=?",
          [id],
          (tx,result)=>{
            // const arryF= rentalData.data.filter(item=>item.rental_id !== 2)
            // setRentalData({...rentalData,data:arryF})
            setStatus('pending')
            setAction('delete')
            console.log('OK')
          },
          (error)=>{
            console.log('loi r')
            showMessage({
              message: "Error Delete",
              description: "The post can't remove",
              type: "error",
            })
          }
          )
      })
     }

   const uploadPicture = async(id)=>{
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing:true,
        aspect:[4,3],
        quality:1
    })
    console.log(result)
    const img = !result.cancelled?result.uri:null
    await dbSqlite.dbOpen().transaction((tx)=>{
      tx.executeSql("UPDATE rentalZ SET image=? WHERE rental_id=?",
      [img,id],
      (tx,result)=>{
        console.log('ok do')
        setStatus('pending')
        setAction('upload')
        setShow(true)
      },
      (error)=>{
        console.log("don't upload any image ")
      }
      )
    })
  }
    return (
        <View style={styles.wrapper}>
           <View style={styles.header}>
           <Image  resizeMode='cover' style={styles.bg} source={require('../../assets/images/bb.jpg')}/>
           <Text style={styles.textHeading}>Catalog</Text>
           </View>

            <FLatListRentals 
            rentalData={rentalData} 
            onOpenDetails={onOpenDetails}
            uploadPicture={uploadPicture}
            setShow ={setShow}
            show={show}
            deletePicture={deletePicture}
            status={status}
            setStatus={setStatus}
            action={action}
            setAction={setAction}
            navigation={navigation}
           />
           <FlashMessage position="top" autoHide={true} duration={3000}/>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'#fff'
    },
    textHeading:{
        fontSize:30,
        color:'#fff',
        elevation:10,
        position:'absolute',
        zIndex:20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
         textShadowOffset: {width: -1, height: 1},
         textShadowRadius: 10,
         fontWeight:'900',
         letterSpacing:1.2
    },
    bg:{
        width:'100%',
        height:'100%',
        zIndex:0,
        position:'relative',
        marginBottom:5
    },
    header:{
        width:'100%',
        height:120,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        shadowColor:'#fff',
        shadowOffset:{width:5,height:5},
        shadowOpacity:.6,
        elevation:20
    }
})
export default Catalog
