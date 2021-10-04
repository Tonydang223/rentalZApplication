import React, { useEffect, useState } from 'react'
import { StyleSheet, View,Text } from 'react-native';
import KeyBoardAvoidViewWrapper from '../components/KeyBoardAvoidView/KeyBoardAvoidViewWrapper';
import ModalError from '../components/Pop Up/ModalError';
import contentPopUp from '../constants/contentPopUp';
import TextForm from './../components/Form/TextForm';
import {useNavigation,useIsFocused} from '@react-navigation/native'

const AddData = () => {
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [contents,setContents] = useState({})
    const [show,setShow] = useState(false)
    const [status,setStatus] = useState('')
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
    }
    return (
        <KeyBoardAvoidViewWrapper>
        <View style={styles.wrapper}>
            <ModalError contents={contents} status={status} show={show} 
            setShow={setShow}
            navigation={navigation}
            />
            <Text style={styles.textHeading}>RentalZ</Text>
            <TextForm setStatus={setStatus} setShow={setShow} status={status}
            navigation={navigation}
            />
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
        marginTop:20,
    }
})
export default AddData
