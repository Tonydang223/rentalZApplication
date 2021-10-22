import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet, View,Text, Image,FlatList,Button, Alert, TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight } from 'react-native';
import ModalDelete from '../Pop Up/ModalDelete';
import ModalUpload from '../Pop Up/ModalUploadImage';
const FLatListRentals = (props) => {
    const {rentalData,onOpenDetails,uploadPicture,setShow,show,deletePicture,status,setStatus,action,setAction,navigation} = props
    const SPACING = 20
    const [id,setId] = useState()
    const onClickTakenId = (id)=>{
        setAction('delete')
        setShow(true)
        setId(id)
    }
    const empty = ()=>{
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:350,height:350}} source={{uri:'https://i.pinimg.com/236x/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.jpg'}}/>
            </View>
        )
    }
    const onClickEditPage = (id)=>{
        const findObj = rentalData.data.find((item)=>item.id  === id)
        navigation.navigate('EditForm',{action:'edit',dataObj:findObj})
    }
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
        {action === 'upload'?(
        <ModalUpload
        show={show} 
        setShow={setShow} 
        status={status}
        setStatus={setStatus}
        />
        ):(<ModalDelete 
        show={show} 
        setShow={setShow}
        deletePicture={deletePicture}
        id={id}
        status={status}
        setStatus={setStatus}
        />)}
        {rentalData.empty || rentalData.data.length < 0?(empty()):(
            <FlatList
             data={rentalData.data}
             keyExtractor={item=>item.id.toString()}
             contentContainerStyle={{
               padding:SPACING,
             }}
             renderItem={({item,index})=>(
                 // <View >
                 <TouchableOpacity
                 onPress={()=>onOpenDetails(item.id,'Details')}
                   style={{
                   flexDirection:'column',
                   marginBottom:SPACING,
                   borderRadius:15,
                   backgroundColor:'rgba(255,255,255,0.9)',
                   shadowColor:'#000',
                    shadowOffset:{width:0,height:10},
                    shadowOpacity:.7,
                    shadowRadius:20,
                    elevation:15
                   }}
                   >
                 <View style={styles.onAbove}>
                 <Text style={styles.price}>${item.monthlyPrice}</Text>
                 <Image 
                     source={{uri:item.images}}
                     style={{
                       width:'100%',
                       height:150,
                       borderTopLeftRadius:15,
                       borderTopRightRadius:15,
                       opacity:0.8
                       }}
                 />
                  <Icon name="image-outline" size={30} 
                 onPress = {()=>uploadPicture(item.id)}
                style={styles.iconImage}
                  />

                 </View>
                     <View style={styles.contentList}>
                       <View style={styles.time}>
                       <View style={{flexDirection:'row'}}>
                       <Icon name="time-outline" size={18} style={styles.textTime}/>
                       <Text style={styles.dateTime}>{item.createdAt}</Text>
                       </View>
                       <Icon 
                       name="create" 
                       size={26} 
                       color="rgb(0, 230, 64)" 
                       style={{marginTop:-3,marginLeft:60}}
                       onPress={()=>onClickEditPage(item.id)}
                       />
                       <Icon 
                       name="trash" 
                       size={25} 
                       color="#ff3333" 
                       style={{marginTop:-3}}
                       onPress={()=>onClickTakenId(item.id)}
                       />
                       </View>
                       <View  style={styles.nameWrapper}>
                       <Text style={styles.textName}>{item.name}</Text>
                       <Text style={styles.textNameUnder}>Reporter</Text>
                       </View>
                       <View  style={styles.info}>
                       <View style={styles.cover}>
                        <Text style={styles.texthead}>Bed Room</Text>
                        <Text style={styles.textContent}>{item.bedRoom}</Text>
                       </View>
                       <View style={[styles.cover,{left:4}]}>
                       <Text style={styles.texthead}>Property Type</Text>
                        <Text style={styles.textContent}>{item.propertyType}</Text>
                        </View>
                        <View style={[styles.cover,{left:7}]}>
                        <Text style={styles.texthead}>Furniture Type</Text>
                        <Text style={styles.textContent}>{item.furTypes?item.furTypes:'None'}</Text>
                        </View>
                        <View>
                        </View>
                       </View>

                     </View>
               </TouchableOpacity>
                 // </View>
             )}
         />
        )}
        
        </View>
    )
}
const styles = StyleSheet.create({
    onAbove:{
      flex:1,
      width:'100%'
    },
    time:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    price:{
        position:'absolute',
        bottom:0,
        elevation:20,
        fontSize:25,
        color:'#fff',
        letterSpacing:3,
        padding:5,
        fontWeight:'bold',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 5,
    },
    nameWrapper:{
      paddingLeft:7,
      paddingRight:7
    },
    textName:{
        fontSize:25,
        textTransform:'capitalize'
    },
    textNameUnder:{
        fontSize:14,
        color:"rgba(0,0,0,0.5)"
    },
    dateTime:{
        marginLeft:7,fontSize:13,marginTop:0.5,
        color:'rgba(0,0,0,0.5)'
    },
    textTime:{
        marginLeft:7,color:'rgba(0,0,0,0.5)'
    },
    cover:{
        borderLeftWidth:1,
        borderLeftColor:'#ACADA8',
        alignItems:'flex-start',
        padding:5,
        marginLeft:3,
        marginRight:2,
    },
    texthead:{
        fontSize:12,
        color:'rgba(0,0,0,0.5)'
    },
    textContent:{
        fontSize:13.8,
        textTransform:'capitalize'
    },
    contentList:{
        flex:1,
        flexDirection:'column',
        padding:15,
    },
    iconImage:{
        position:'absolute',
        right:0,
        bottom:0,
        padding:6,
        color:'#fff',
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center',
        padding:5,
        marginTop:8,
    }
})
export default FLatListRentals
