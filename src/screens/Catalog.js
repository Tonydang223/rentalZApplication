import React, { useEffect, useState,useCallback } from 'react'
import { StyleSheet, View,Text, Image,FlatList,Button, Alert, TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import dbSqlite from '../../configs/dbOpen';
import {useIsFocused} from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const Catalog = () => {
  const navigation = useNavigation()
  const [rentalData,setRentalData] = useState({
    data:[],
    empty:false
 })
 const [image,setImage] = useState('')
 console.log(image)
 console.log(rentalData.data)
 const [loading,setLoading] = useState(false)
 const isFocused = useIsFocused();
 const onOpenDetails =(id)=>{
   console.log(id)
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
    if(loading === true){
      setTimeout(()=>{
        setLoading(false)
      },3000)
    }
    requestLibrary();
    
  },[isFocused,loading])
 
  const empty = (status)=>{
    return(
      <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
        <Text style={{fontSize:25,fontWeight:700}}>No data here...</Text>
      </View>
    )
  }
    
    
    

    //   const deletec = ()=>{
    //     
    //      ({...rentalData,data:arryF})
    //   }
     
    
       
    const deletePicture = async()=>{
        await dbSqlite.dbOpen().transaction((tx)=>{
          tx.executeSql("DELETE FROM rentalZ WHERE rental_id=?",
          [13],
          (tx,result)=>{
            // const arryF= rentalData.data.filter(item=>item.rental_id !== 2)
            // setRentalData({...rentalData,data:arryF})
            setLoading(true)
            console.log('OK')
          },
          (error)=>{console.log('loi r')}
          )
      })
     }

     const uploadPicture = async()=>{
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing:true,
        aspect:[4,3],
        quality:1
    })
    if(!result.cancelled){
      setImage(result.uri)
    }
    const img = !result.cancelled?result.uri:'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    await dbSqlite.dbOpen().transaction((tx)=>{
      tx.executeSql("UPDATE rentalZ SET image=?, name=? WHERE rental_id=?",
      [img,"Jupiter",1],
      (tx,result)=>{
        console.log('ok do')
        setLoading(true)
      },
      (error)=>{console.log("loi me r")}
      )
    })
  }

  const SPACING = 20
 
    return (
        <View style={styles.wrapper}>
           <View style={styles.header}>
           <Image  resizeMode='cover' style={styles.bg} source={require('../../assets/images/bb.jpg')}/>
           <Text style={styles.textHeading}>Catalog</Text>
           </View>
           {/* <Button title="Delete" onPress={deletePicture}/>
           <Button title="Upload" onPress={uploadPicture}/> */}
           <View style={{flex:1,backgroundColor:'#fff'}}>
           {rentalData.empty?empty():(
            <FlatList
                data={rentalData.data}
                keyExtractor={item=>item.rental_id.toString()}
                contentContainerStyle={{
                  padding:SPACING,
                }}
                renderItem={({item,index})=>(
                    // <View >
                    <TouchableOpacity
                    onPress={()=>onOpenDetails(item.rental_id)}
                      style={{
                      flexDirection:'column',
                      backgroundColor:'#f',
                      marginBottom:SPACING,
                      borderRadius:15,
                      backgroundColor:'#c8cbcf'
                      }}
                      >
                    <View style={styles.onAbove}>
                    <Icon name="close-outline" size={45} color="#fff"/>
                    <Image 
                        source={{uri:item.image}}
                        style={{
                          width:'100%',
                          height:150,
                          borderTopLeftRadius:15,
                          borderTopRightRadius:15
                          }}
                    />
                     <Icon name="image" size={45} color="#fff"/>

                    </View>
                        <View style={styles.contentList}>
                          <Text>{item.name}</Text>
                          <Text>{item.rental_id}</Text>
                        </View>
                  </TouchableOpacity>
                    // </View>
                )}
            />
           )}
           </View>
           
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
    onAbove:{
      flex:1,
      width:'100%'
    },
    bg:{
        width:'100%',
        height:'100%',
        zIndex:0,
        position:'relative',
        marginBottom:5
    },
    contentList:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        padding:20
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
