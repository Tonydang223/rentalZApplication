import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons'
import TimePicker from '../TimePicker/TimePicker';
import { ROOM_OPTIONS } from '../../constants/roomOptions';
import { FUR_OPTIONS } from '../../constants/furnishedOptions';
import ErrorMessage from '../ErrorMes/ErrorMessage';
const TextForm = ({setStatus,setShow}) => {
    const initialValues = {
        property:'',
        bedRoom:null,
        dateTime:null,
        price:'',
        furType:null,
        note:'',
        name:'',
        updatedAt:new Date(Date.now()),
        img:'',
    }
    const [values,setValues] = useState(initialValues)
    const [error,setError]  = useState({})

    console.log(values)


    //onChange
    const onChange = (name)=>(value)=>{
         setValues({...values,[name]:value})

         if(value !== ""){
             setError((pre)=>{
                 return{...pre,[name]:null}
             })
         }

         if(value !== null){
            setError((pre)=>{
                return{...pre,[name]:null}
            })
        }

    }
    
    const isValidate=()=>{
        //property
        if(!values.property){
            setError((pre)=>{
                return {...pre,property:'This field must be required'}
            })
        }
        if(!values.bedRoom){
            setError((pre)=>{
                return {...pre,bedRoom:'This field must be required'}
            })}
     
        if(!values.dateTime){
            setError((pre)=>{
                return {...pre,dateTime:'This field must be required'}
            })
        }
       
        if(!values.price){
            setError((pre)=>{
                return {...pre,price:'This field must be required'}
            })
        }
        if(!values.name){
            setError((pre)=>{
                return {...pre,name:'This field must be required'}
            })
        }
        if(!values.dateTime){
            setError((pre)=>{
                return {...pre,dateTime:'This field must be required'}
            })
        }
        return true
    }
    const submit = (value)=>{
        if(isValidate()){
            console.log('have error')
            setStatus('error')
            setShow(true)
        }
            
        
        if(value.name !== ''&& value.price!=='' &&value.bedRoom!==null&&value.property!==''&&value.dateTime !== null){
           console.log(value)
            setShow(true)
            setStatus('loading')
            setTimeout(()=>{
                setStatus('success')
            },2000)
            setValues({
                property:'',
                bedRoom:null,
                dateTime:'',
                price:'',
                furType:null,
                note:'',
                name:'',
                updatedAt:new Date(Date.now()),
                img:'',
            })
        }
    }
    const placeholder=(name)=> {
        const objPlaceHolder = {
            label:name,
            value:null
        }
        return objPlaceHolder
    }
    return (
        <View style={styles.formInside}>
        <Text style={styles.label}>Property Type</Text>
        <TextInput
            style={styles.input}
            value={values.property}
            placeholder="Enter Property Types here ...."
            onChangeText={onChange('property')}
        />
        {!error.property?null:(
            <ErrorMessage error={error.property}/>
        )}
        <Text style={styles.label}>Bed Rooms</Text>
        <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={pickerStyles}
            value={values.bedRoom}
            onValueChange={onChange('bedRoom')}
            placeholder={placeholder('Choose any kind of Bed Room...')}
            items={ROOM_OPTIONS}
            Icon={()=>(
                <Icon style={{marginTop:17,marginBottom:5,marginRight:7}}
                name="chevron-down-outline" size={24} color="black"
                 />
            )}
        />
        {!error.bedRoom?null:(
            <ErrorMessage error={error.bedRoom}/>
        )}
        <Text style={styles.label}>Date and Time</Text>
        <TimePicker values={values} setValues={setValues} setError={setError}/>
        {!error.dateTime?null:(
            <ErrorMessage error={error.dateTime}/>
        )}
        <Text style={styles.label}>Monthly Price</Text>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={values.price}
            onChangeText={onChange('price')}
            placeholder="Enter Monthly Price here ...."
        />
        {!error.price?null:(
            <ErrorMessage error={error.price}/>
        )}
        <Text style={styles.label}>Furniture Type</Text>
        <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={pickerStyles}
            value={values.furType}
            onValueChange={(value)=>setValues({...values,furType:value})}
            placeholder={placeholder('Choose any kind of Furniture Type...')}
            items={FUR_OPTIONS}
            Icon={()=>(
                <Icon style={{marginTop:17,marginBottom:5,marginRight:7}}
                name="chevron-down-outline" size={24} color="black"
                 />
            )}
        />
        <Text style={styles.label}>Note</Text>
        <TextInput
        style={styles.textArea}
        placeholder="Write down your note ...."
        multiline
        value={values.note}
        onChangeText={(value)=>setValues({...values,note:value})}
        numberOfLines={15}
        textAlignVertical = "top"
        />
        <Text style={styles.label}>Reporter</Text>
        <TextInput
            style={styles.input}
            value={values.name}
            onChangeText={onChange('name')}
            placeholder="Enter Your Name here ...."
        />
        {!error.name?null:(
            <ErrorMessage error={error.name}/>
        )}
        <View style={styles.ctBar}>
            <View style={styles.bar}></View>
        </View>
        <TouchableOpacity
        style={styles.pressBtn}
        onPress={()=>submit(values)}
        >
                    <Text style={styles.text}>CREATE</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    formInside:{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-start',
        marginLeft:45,
        marginRight:45,
        padding:20
    },
    label:{
        marginTop:10,
        fontSize:15,
        fontWeight:'800',
        letterSpacing:0.8
    },
    input:{
        height:50,
        width:280,
        padding:12,
        borderStyle:'solid',
        borderWidth:1,
        marginTop:11,
        borderRadius: 6,
    },
    textArea:{
        width:'100%',
        width:280,
        height:80,
        top:0,
        paddingHorizontal:10,
        paddingTop:5,
        marginTop:11,
        borderRadius: 6,
        borderStyle:'solid',
        borderWidth:1,
    },
    btn:{
        flex:1,
        alignItems:'center',
    },
    pressBtn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:280,
        height:45,
        borderRadius:7,
        borderColor:'#000000',
        backgroundColor:'#22A7F0',
        borderStyle:'solid',
        marginTop:35,
        marginBottom:15,
        shadowColor:'#fff',
        shadowOffset:{width:5,height:2},
        shadowRadius:5,
        shadowOpacity:0.5,
        elevation:8
    },
    text:{
        fontSize:20,
        letterSpacing:3.5,
        color:'#fff'
    },
    ctBar:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width:280,
      marginTop:10
    },
    bar:{
        width:180,
        marginTop:28,
        height:2,
        backgroundColor:'#CCCDC6'
    },
    error:{
        color:'#ff3333',
        fontSize:14,
        letterSpacing:0.8,
        marginTop:5
    }
})
const pickerStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 14,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'black',
        marginTop:6,
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        height:48,
        width:280 
      },
  });

export default TextForm
