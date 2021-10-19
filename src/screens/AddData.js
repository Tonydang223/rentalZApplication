import React, { useEffect, useState } from 'react'
import { StyleSheet, View,Text } from 'react-native';
import KeyBoardAvoidViewWrapper from '../components/KeyBoardAvoidView/KeyBoardAvoidViewWrapper';
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
        }else if(status === 'loading' || status === 'confirm'){
            setContents({})
        }
    }
    return (
        <KeyBoardAvoidViewWrapper>
        <View style={styles.wrapper}>
            <Text style={styles.textHeading}>RentalZ</Text>
            <TextForm setStatus={setStatus} 
            setShow={setShow} 
            status={status}
            navigation={navigation}
            contents={contents}
            show={show}
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
