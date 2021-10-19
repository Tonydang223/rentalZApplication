import React, { useState } from 'react'
import {View,Text,Modal, StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Progress from 'react-native-progress'
import * as Animatable from 'react-native-animatable'
import BoxConfirm from './BoxConfirm'
const ModalError = (props) => {
    const {contents,show,status,setShow,initialValues,values,InsertData,setStatus,setDateAdd,setValues} = props

    const onClick = ()=>{
      setShow(false) 
    }
    const {name,color,headingText,content} = contents

    return (
        <Modal transparent visible={show}>
            {status === 'loading'?
            (
            <View style={styles.wrapperProgress}>
            <Progress.CircleSnail 
            color={['#4B77BE','#22A7F0',]} 
            size={80}
            spinDuration={4000}
            animating={true}
            thickness={3}
            />
            </View>)
            :(
                <View style={styles.modalWrapper}>
                {status === 'confirm'?(
                    <BoxConfirm 
                    values={values}
                    setShow={setShow}
                    setStatus={setStatus}
                    InsertData={InsertData}
                    values={values}
                    initialValues={initialValues}
                    setDateAdd={setDateAdd}
                    setValues={setValues}
                    />
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
                <Icon style={styles.iconError} name={name} size={90} color={color}/>
               </View>
               <View style={{alignItems:'center'}}>                
                <Text style={[styles.headingText,{color:color}]}>{headingText}</Text>
               </View>

               <View style={{alignItems:'center'}}>                
                <Text style={styles.content}>{content}</Text>
               </View>

               <View style={{alignItems:'center'}}>                
                <TouchableOpacity
                style={[styles.btn,{backgroundColor:color}]}
                >
                <Text style={[styles.textBtn]} onPress={onClick}>CONFIRM</Text>
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
    wrapperProgress:{
        flex:1,
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
       marginTop:5,
       marginBottom:5
    }
})

export default ModalError
