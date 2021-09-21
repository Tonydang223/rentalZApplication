import React, { useEffect, useState } from 'react'
import { StyleSheet, View,Text } from 'react-native';
import KeyBoardAvoidViewWrapper from '../components/KeyBoardAvoidView/KeyBoardAvoidViewWrapper';
import ModalError from '../components/Pop Up/ModalError';
import contentPopUp from '../constants/contentPopUp';
import TextForm from './../components/Form/TextForm';

const AddData = () => {
    const [status,setStatus] = useState('')
    const [show,setShow] = useState(false)
    const [contents,setContents] = useState({})
    useEffect(()=>{
        handleContentPopUp();
    },[status])
    const handleContentPopUp = ()=>{
        if(status === 'error'){
            setContents(contentPopUp.error)
        }else if(status === 'success'){
            setContents(contentPopUp.success)
        }else if(status === 'loading'){
            setContents({})
        }
      return
    }
    return (
        <KeyBoardAvoidViewWrapper>
        <View style={styles.wrapper}>
            <ModalError contents={contents} status={status} show={show} setShow={setShow}/>
            <Text style={styles.textHeading}>RentalZ</Text>
            <TextForm setStatus={setStatus} setShow={setShow}/>
        </View>
        </KeyBoardAvoidViewWrapper>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
    },
    textHeading:{
        fontSize:25,
        marginTop:20
    }
})
export default AddData
