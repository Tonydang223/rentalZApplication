import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet, View,Text, Image,FlatList,Button, Alert, TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight } from 'react-native';
import ModalDelete from '../Pop Up/ModalDelete';
const FLatListRentals = (props) => {
    const {rentalData,empty,onOpenDetails,uploadPicture,setShow,show,deletePicture,status,setStatus} = props
    const SPACING = 20
    const [id,setId] = useState()
    console.log(id)
    const onClickTakenId = (id)=>{
        setShow(true)
        setId(id)
    }
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
        {rentalData.empty?empty():(
         <FlatList
             data={rentalData&&rentalData.data}
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
                <ModalDelete 
                show={show} 
                setShow={setShow}
                deletePicture={deletePicture}
                id={id}
                status={status}
                setStatus={setStatus}
                />
                 <View style={styles.onAbove}>
                 <Text style={styles.price}>${item.price}</Text>
                 <Image 
                     source={{uri:item.image}}
                     style={{
                       width:'100%',
                       height:150,
                       borderTopLeftRadius:15,
                       borderTopRightRadius:15,
                       }}
                 />
                  <Icon name="image-outline" size={30} 
                 onPress = {()=>uploadPicture(item.rental_id)}
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
                       name="trash" 
                       size={25} 
                       color="#ff3333" 
                       style={{marginTop:-3}}
                       onPress={()=>onClickTakenId(item.rental_id)}
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
                       <View style={styles.cover}>
                       <Text style={styles.texthead}>Property Type</Text>
                        <Text style={styles.textContent}>{item.property}</Text>
                        </View>
                        <View style={styles.cover}>
                        <Text style={styles.texthead}>Furniture Type</Text>
                        <Text style={styles.textContent}>{item.furType?item.furType:'None'}</Text>
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
        fontWeight:'bold'
    },
    nameWrapper:{
      paddingLeft:7,
      paddingRight:7
    },
    textName:{
        fontSize:25
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
        marginLeft:2,
        marginRight:2,
        width:'33%'
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
