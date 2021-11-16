import React, { useEffect, useState,useRef } from 'react'
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation,useIsFocused} from '@react-navigation/native'
import FlatListSearch from '../../components/FlatList/FlatListSearch'
import { db } from '../../../configs/dbOpen'
const SearchPage = () => {
    const refFocus = useRef()
    const [search,setSearch] = useState('')
    const [dataSearch,setDataSearch]= useState({
        data:[],
        emptyData:false
    })
    const [data,setData] = useState([])
    const isFocused = useIsFocused();
    const navigation = useNavigation()
    const [show,setShow] = useState(false)
    // searchFilter
    const searchFilter = (text)=>{
       if(!text){
          setShow(false)
          setDataSearch({...dataSearch,data:data})
          setSearch(text)
       }else{
           setShow(true)
           const newData = data.filter((item)=>{
               const itemData = item.propertyType ? item.propertyType.toUpperCase():''.toUpperCase() 
               const furItemData= item.furTypes?item.furTypes.toUpperCase():''.toUpperCase()
               const reporterData= item.name?item.name.toUpperCase():''.toUpperCase()
               const bedRoomData =  item.bedRoom?item.bedRoom.toUpperCase():''.toUpperCase()
               const textData = text.toUpperCase()
               return (
                itemData.indexOf(textData) >-1
                || furItemData.indexOf(textData)>-1
                || reporterData.indexOf(textData)>-1
                || bedRoomData.indexOf(textData)>-1
               ) 
           })
           setDataSearch({...dataSearch,data:newData})
           setSearch(text)
       } 
    }
    // detail function
    const openDetails =(id)=>{
        const findData = data.find((item)=>item.id === id) 
        navigation.navigate('Details',{
          idCard:id,
          objData:findData,
          message:'taken id successfully!!!'
        })
      }
    // get all data
    const getData = async()=>{
        await db.transaction((tx)=>{
                tx.executeSql('SELECT * FROM rentalData',
                [],
                (tx,result)=>{
                    let ArrayItem = []
                    const len = result.rows.length
                    if(len>0){
                        for(let i = 0;i<len;++i){
                            ArrayItem.push(result.rows.item(i))
                            setDataSearch({...dataSearch,data:ArrayItem,emptyData:false})
                            setData(ArrayItem)
                        }
                    }else{
                        setDataSearch({...dataSearch,emptyData:true})
                        setData([])
                    }
                },
                (error)=>{
                    console.log(error)
                }
                )
            })
    }
    console.log(search)

    // back mainSearchPage from detail Screen
    const onClick = ()=>{
        Keyboard.dismiss()
        setTimeout(()=>{
            navigation.goBack()
        },100)
    }
    
    // turn off icon cross on search input field
    const onClickClose = ()=>{
        setSearch('')
        setShow(false)
        setDataSearch({...dataSearch,data:data})
    }
    useEffect(()=>{
          getData()
          if(isFocused){
            setTimeout(()=>{
                refFocus.current.focus()
            },100)
            
          }
          return()=>!isFocused
    },[isFocused])

    return (
        <View style={{flex:1, backgroundColor:'#0000cd'}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
            <View style={styles.containerInside}>
            <Icon 
            name='chevron-back' 
            color="#000" 
            style={styles.backIcon}
            size={30} 
            onPress={onClick}/>
            <TextInput
                placeholder="What are your property looking ?"
                value={search}
                style={styles.input}
                onChangeText={(text)=>searchFilter(text)}
                ref={refFocus}
            />
                        {
                show?(
                    <Icon 
            name='close-circle' 
            color="#c0c0c0" 
            size={26}
            style={styles.iconDelete}
            onPress={onClickClose}
            /> 

                ):null
            }
            </View>
            <View style={styles.line}></View>
            <FlatListSearch 
                dataSearch={dataSearch}
                navigation={navigation}
                openDetails={openDetails}
            />


        </View>
        </TouchableWithoutFeedback>
        </View>
    )
}
const styles = StyleSheet.create({
      wrapper:{
          flex:1,
          backgroundColor:'#fff',
          width:'100%',
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          marginTop:50,
          paddingTop:20,
      },
      line:{
          width:'80%',
          height:2,
          backgroundColor:'#CCCDC6',
          marginTop:30,
          alignSelf:'center'
      },
      containerInside:{
          width:'100%',
          flexDirection:'row',
          position:'relative'
      },
      input:{
        height:50,
        width:300,
        padding:12,
        borderStyle:'solid',
        borderRadius: 6,
        fontSize:16,
        marginLeft:37
      },
      iconDelete:{
        //   top:11,
          right:15,
          position:'absolute',
          marginTop:12,
          marginRight:6
      },
      backIcon:{
        //   left:15,
        //   top:8,
        position:'absolute',
        top:8,
        marginLeft:9
      }
})

export default SearchPage
