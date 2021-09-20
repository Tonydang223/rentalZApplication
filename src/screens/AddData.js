import React from 'react'
import { StyleSheet, View,Text } from 'react-native';
import KeyBoardAvoidViewWrapper from '../components/KeyBoardAvoidView/KeyBoardAvoidViewWrapper';
import ModalError from '../components/Pop Up/ModalError';
import TextForm from './../components/Form/TextForm';

const AddData = () => {
    return (
        <KeyBoardAvoidViewWrapper>
        <View style={styles.wrapper}>
            <ModalError name="alert-circle"/>
            <Text style={styles.textHeading}>RentalZ</Text>
            <TextForm/>
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
