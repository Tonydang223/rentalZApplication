import React, { useEffect, useState } from 'react'
import { StyleSheet, View,Text,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,ScrollView } from 'react-native';
import {useNavigation,useIsFocused,useRoute} from '@react-navigation/native'
import contentPopUp from '../../constants/contentPopUp';
import TextForm from '../../components/Form/TextForm';
import ModalError from '../../components/Pop Up/ModalError';
import Icon  from 'react-native-vector-icons/Ionicons';
import EditForm from './../../components/Form/EditForm';

const EditFormScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const goBack = ()=>{
        navigation.goBack('Catalog')
    }
    const [contents,setContents] = useState({})
    const [editVisible,setEditVisible] = useState(false)
    const [statusEdit,setStatusEdit] = useState('')
    console.log(statusEdit)
    useEffect(()=>{
        handleContentPopUp();
    },[statusEdit])
    const handleContentPopUp = ()=>{
        if(statusEdit === 'error'){
            setContents(contentPopUp.error)
        }else if(statusEdit === 'success'){
            setContents(contentPopUp.success('edit'))
        }else if(statusEdit === 'loading'){
            setContents({})
        }else if(statusEdit === 'errorUpdate'){
            setContents(contentPopUp.error('errorInsertOrUpdate','update'))
        }
    }
    const {action,dataObj} = route.params
    console.log(dataObj)
    return (
        <KeyboardAvoidingView style={{flex:1}}>
           <ModalError
           contents={contents}
           show={editVisible}
           setShow={setEditVisible}
           status={statusEdit}
           setStatus={setStatusEdit}
           navigation={navigation}
           />
           <View style={styles.header}>
           <Icon style={styles.icon} 
           name="chevron-back-circle" 
           color="#fff" 
           size={32}
           onPress={goBack}
           />
            <Text style={styles.textHeading}>Update</Text>
           </View>
           <ScrollView>
           <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
           <View style={styles.wrapper}>
           <EditForm 
           dataObj={dataObj}
           setStatusEdit={setStatusEdit}
           setEditVisible={setEditVisible}
           />
           </View>
           </TouchableWithoutFeedback>
           </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
        width:'100%'
    },
    textHeading:{
        fontSize:25,
        marginTop:23,
        marginLeft:58,
        padding:25,
        color:'#fff'
    },
    header:{
        width:'100%',
        flexDirection:'row',
        borderWidth:1,
        backgroundColor:'rgb(0, 71, 171)'
    },
    icon:{
        elevation:15,
        marginTop:28,
        padding:22,
    }
})
export default EditFormScreen
