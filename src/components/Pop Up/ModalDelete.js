import React, { useState } from 'react'
import {View,Text,Modal, StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Progress from 'react-native-progress'
import * as Animatable from 'react-native-animatable'
const ModalDelete = ({show,status,setShow,deletePicture,id,setStatus}) => {
    const {height,width} = Dimensions.get('screen')
    const onClick = ()=>{
        setShow(false)
    }
    const onClickConfirm = ()=>{
        setShow(false)
        setStatus('')
    }
    return (
        <Modal transparent visible={show}>
           {status === 'pending' ?(
            <View
            style={styles.modalProcess}
            >
            <Progress.CircleSnail 
            color={['#4B77BE','#22A7F0']} 
            size={80}
            spinDuration={1000}
            animating={true}
            thickness={3}
            />  
            </View>

           ):(
            <View style={{height:height,width:width}}>
            {status === 'success' ?(
                <View style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}>
                <Animatable.View 
                style={styles.boxSuccess}
                animation="fadeInUpBig"
                duration={2000}
                easing='ease-in'
                >
                <Icon onPress={onClickConfirm} style={{marginRight:3}} name="checkmark-circle" size={25} color="rgb(0, 230, 64)"/>
                <Text style={styles.contentSuccess}>Deleted the post successfully!!!</Text>               
                <Icon onPress={onClickConfirm} style={styles.iconCloseAbove} name="close-outline" size={30} color="#000000"/>
               </Animatable.View>
               </View>
            ):(
                <View style={styles.modalWrapper}>
                <Animatable.View 
                style={styles.box}
                animation="bounceIn"
                duration={2000}
                easing='ease-in'
                >
               <View style={{alignItems:'center'}}>
                <View style={styles.header}>
                    <Icon onPress={onClick} style={styles.iconClose} name="close-outline" size={42} color="#000000"/>
                </View>
                
               </View>

               <View style={{alignItems:'center'}}>                
                <Icon style={styles.iconError} name="trash-bin" size={90} color='#CF000F'/>
               </View>
               <View style={{alignItems:'center'}}>                
                <Text style={[styles.headingText,{color:"red"}]}>Delete</Text>
               </View>

               <View style={{alignItems:'center'}}>                
                <Text style={styles.content}>Are you sure to remove this post? If you remove the post, it will be gone away from the list</Text>
               </View>

               <View style={{alignItems:'center'}}>                
                <TouchableOpacity
                style={[styles.btn,{backgroundColor:'#CF000F'}]}
                >
                <Text style={[styles.textBtn]} onPress={()=>deletePicture(id)}>DELETE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={[styles.btn,{backgroundColor:'#000000'}]}
                >
                <Text style={[styles.textBtn]} onPress={onClick}>CANCEL</Text>
                </TouchableOpacity>
               </View>
               </Animatable.View>
               </View>
            )}
            </View>
           )}
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalWrapper:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.2)',
        justifyContent:'center',
        alignItems:'center'
    },
    iconClose:{
        marginRight: -10,
        marginTop:-20
    },
    iconError:{
        marginBottom:6,
        paddingVertical:7,
    },
    content:{
        width:'100%',
        fontSize:14,
        color:'#746D69',
        letterSpacing:1,
        textAlign:'center',
        padding:10,
        lineHeight:21
    },
    headingText:{
        fontSize:25,
        letterSpacing:1.3,
        textAlign:'center',
        padding:10,
        fontWeight:'bold'
    },
    box:{
        width:'80%',
        paddingHorizontal:23,
        backgroundColor:'#fff',
        borderRadius:10,
        elevation:20,
        shadowColor:'#fff',
        shadowOffset:{width:2,height:1},
        paddingVertical:35,
        shadowOpacity:0.4,
        shadowRadius:4
    },
    header:{
        width:'100%',
        alignItems:'flex-end',
        justifyContent:'center'
    },
    btn:{
        width:'100%',
        height:43,
        borderRadius:5,
        elevation:7,
        shadowColor:'#fff',
        shadowOffset:{width:2,height:1},
        shadowOpacity:0.4,
        shadowRadius:4,
        alignItems:'center',
        marginTop:15
    },
    textBtn:{
       fontSize:22,
       letterSpacing:1.4,
       color:'#fff',
       marginTop:3,
       marginBottom:3
    },
    modalProcess:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    contentSuccess:{
        fontSize:12,
        color:'#746D69',
        letterSpacing:1,
        padding:10,
        marginLeft:6
    },
    boxSuccess:{
        width:'80%',
        padding:15,
        backgroundColor:'#fff',
        borderRadius:30,
        elevation:22,
        shadowColor:'#000',
        shadowOffset:{width:2,height:10},
        shadowOpacity:0.5,
        shadowRadius:4,
        height:50,
        marginBottom: 220,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    iconCloseAbove:{
        marginLeft:6
    }
})

export default ModalDelete
