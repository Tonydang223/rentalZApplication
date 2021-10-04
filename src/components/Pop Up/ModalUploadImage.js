import React, { useState } from 'react'
import {View,Text,Modal, StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Progress from 'react-native-progress'
import * as Animatable from 'react-native-animatable'
const ModalUpload = ({show,status,setShow,deletePicture,id,setStatus,content}) => {
    

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
                <Icon onPress={onClickConfirm} style={styles.iconSuccess} name="checkmark-circle" size={25} color="rgb(0, 230, 64)"/>
                <Text style={styles.content}>Uploaded the image successfully!!!</Text>               
                <Icon onPress={onClickConfirm} style={styles.iconClose} name="close-outline" size={30} color="#000000"/>
               </Animatable.View>
            ):null}
            </View>)}
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalWrapper:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    modalProcess:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        fontSize:12,
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
        height:50,
        marginBottom: 150,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
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
        marginRight:3
    }
})

export default ModalUpload
