import React, { useState } from 'react'
import {View,Text,Modal, StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Progress from 'react-native-progress'
import * as Animatable from 'react-native-animatable'
const ModalDelete = ({show,status,setShow,deletePicture,id,setStatus}) => {
    
    console.log(id)
    const onClick = ()=>{
        setShow(false)
    }
    const onClickConfirm = ()=>{
        setShow(false)
        setStatus('')
    }
    const onClickNav = ()=>{
        deletePicture(id)
    }
    

    return (
        <Modal transparent visible={show}>
           {status === 'pending'?(
            <View
            style={styles.modalWrapper}
            >
            <Progress.CircleSnail 
            color={['#fff','#4B77BE','#22A7F0',]} 
            size={80}
            spinDuration={2000}
            animating={true}
            thickness={3}
            />  
            </View>

           ):(
            <View style={styles.modalWrapper}>
            {status === 'success'?(
                <Animatable.View 
                style={styles.box}
                animation="bounceIn"
                duration={2000}
                easing='ease-in'
                >
               <View style={{alignItems:'center'}}>
                <View style={styles.header}>
                <Icon onPress={onClickConfirm} style={styles.iconClose} name="close-outline" size={42} color="#000000"/>
                </View>
                
               </View>

               <View style={{alignItems:'center'}}>                
                <Icon style={styles.iconError} name="checkmark-circle" size={90} color='rgb(0, 230, 64)'/>
               </View>
               <View style={{alignItems:'center'}}>                
                <Text style={[styles.headingText,{color:"rgb(0, 230, 64)"}]}>Success</Text>
               </View>

               <View style={{alignItems:'center'}}>                
                <Text style={styles.content}>You removed the post successfully!!!</Text>
               </View>

               <View style={{alignItems:'center'}}>                
                <TouchableOpacity
                style={[styles.btn,{backgroundColor:'rgb(0, 230, 64)'}]}
                >
                <Text style={[styles.textBtn]} onPress={onClickConfirm}>CONFIRM</Text>
                </TouchableOpacity>
               </View>
               </Animatable.View>
            ):(
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
                <Text style={[styles.textBtn]} onPress={onClickNav}>DELETE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={[styles.btn,{backgroundColor:'#000000'}]}
                >
                <Text style={[styles.textBtn]} onPress={onClick}>CANCEL</Text>
                </TouchableOpacity>
               </View>
               </Animatable.View>
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
        marginTop:30
    },
    textBtn:{
       fontSize:22,
       letterSpacing:1.4,
       color:'#fff',
       marginTop:3,
       marginBottom:3
    }
})

export default ModalDelete
