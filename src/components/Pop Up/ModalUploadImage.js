import React, { useState } from 'react'
import {View,Text,Modal, StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Progress from 'react-native-progress'
import * as Animatable from 'react-native-animatable'
const ModalUpload = ({show,status,setShow,deletePicture,id,setStatus,content}) => {
    

    const onClickConfirm = ()=>{
        setTimeout(()=>{
            setShow(false)
            setStatus('')
        },500)
    }
    return (
        <Modal transparent visible={show} animationType="fade">
           {status === 'pending' ?(
            <View
            style={styles.modalProcess}
            >
            <Progress.CircleSnail 
            color={['#4B77BE','#22A7F0',]} 
            size={80}
            spinDuration={1000}
            animating={true}
            thickness={3}
            />  
            </View>

           ):(
            <View style={styles.modalWrapper}>
            {status === 'success' ?(
                <Animatable.View 
                style={styles.box}
                animation="fadeInUpBig"
                duration={2000}
                easing='ease-in'
                >
                <View style={{alignItems:'flex-end',justifyContent:'center',width:'100%'}}>
                <Icon onPress={onClickConfirm} style={styles.iconClose} name="close-outline" size={40} color="#000000"/>
                </View>
                <Icon onPress={onClickConfirm} style={styles.iconSuccess} name="checkmark-circle" size={70} color="rgb(0, 230, 64)"/>
                <Text style={styles.content}>Uploaded the image successfully!!!</Text>  
                <TouchableOpacity
                style={styles.btnUpload}
                onPress={onClickConfirm}
                >
                    <Text style={{fontSize:14,color:'#fff'}}>CONTINUE</Text>
                </TouchableOpacity>              
               </Animatable.View>
            ):null}
            </View>)}
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.2)'
    },
    modalProcess:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        fontSize:14,
        color:'#746D69',
        letterSpacing:1,
        padding:10,
        marginLeft:6
    },
    box:{
        width:'80%',
        padding:15,
        backgroundColor:'#fff',
        borderRadius:30,
        elevation:22,
        shadowColor:'#000',
        shadowOffset:{width:2,height:10},
        shadowOpacity:0.5,
        shadowRadius:4,
        marginBottom: 50,
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    header:{
        width:'100%',
        alignItems:'flex-end',
        justifyContent:'center'
    },
    iconClose:{
        marginLeft:6
    },
    iconSuccess:{
        alignItems:'center'
    },
    btnUpload:{
        width:120,
        height:48,
        backgroundColor:'rgb(0,230,64)',
        borderRadius:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        marginBottom:15,
        shadowColor:'rgba(0,0,0,0.4)',
        elevation:15,
        shadowOffset:{width:5,height:5},
        shadowOpacity:.5,
        shadowRadius:14
    }
})

export default ModalUpload
