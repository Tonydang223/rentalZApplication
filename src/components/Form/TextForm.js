import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons'
import TimePicker from '../TimePicker/TimePicker';
import { ROOM_OPTIONS } from '../../constants/roomOptions';
import { FUR_OPTIONS } from '../../constants/furnishedOptions';
import ErrorMessage from '../ErrorMes/ErrorMessage';
import { pickerStyles, styles } from './styles';
import ModalError from '../Pop Up/ModalError';
import { isValidate } from './isValidate';
import { db, dbSqlite } from '../../../configs/dbOpen';
const TextForm = (props) => {
    const {setStatus,setShow,status,navigation,show,contents} = props
    const initialValues = {
        property:'',
        bedRoom:null,
        dateTime:'',
        price:'',
        furType:null,
        note:'',
        name:'',
        img:'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        updatedAt:''
    }
    const [values,setValues] = useState(initialValues)
    const regexLetter = /^[a-zA-Z\s]*$/
    const regexNumber = /^-?[0-9][0-9,\.]+$/
    const [error,setError]  = useState({})
    const [dateAdd,setDateAdd] = useState(new Date())
    const boderColorSelectbedRoom = error.bedRoom?'#CF000F':'#000000'
     // insert Data
     const InsertData = async (value) =>{
         const {property,bedRoom,dateTime,price,furType,note,name,img,updatedAt} = value
         const parsePrice = parseFloat(price)
         await db.transaction((txn)=>{
            txn.executeSql(
                `INSERT OR IGNORE INTO rentalData
                (propertyType,bedRoom,createdAt,monthlyPrice,furTypes,note,name,updatedAt,images)
                VALUES (?,?,?,?,?,?,?,?,?)
                `,
                [property,bedRoom,dateTime,parsePrice,furType,note,name,updatedAt,img],
                (tx,result)=>{
                    console.log(result.rowsAffected)
                    if(result.rowsAffected<1){
                        setTimeout(()=>{
                            setStatus('duplicateError')
                        },3000)
                        console.log('duplicate error')
                    }else{
                        setTimeout(()=>{
                            setStatus('success')
                        },3000)
                        console.log('insert ok')
                    }
                },
                (error)=>{
                    console.log('Error')
                    setTimeout(()=>{
                        setStatus('insertError')
                    },2000)
                }
             )
         })
     }
    //onChange
    const onChange = (name)=>(value)=>{
         setValues({...values,[name]:value})
         if(value !== "" || value !== null){
             setError((pre)=>{
                 return{...pre,[name]:null}
             })
         }
    }
    
 
    const submit = (value)=>{
        const parsePrice = parseFloat(value.price)>0
        if(isValidate(values,setError,regexLetter,regexNumber)){
            console.log('have error')
            setStatus('error')
            setShow(true) 
        }
            
        
        if(value.name !== ''
        && value.price!==''
        &&value.bedRoom!==null
        &&value.property!==''
        &&value.property.match(regexLetter)
        &&value.dateTime !== ''
        &&value.property.length<25
        &&value.name.length<20
        &&value.name.match(regexLetter)
        &&value.price.match(regexNumber)
        &&parsePrice
        ){
            setShow(true)
            setStatus('confirm')
            console.log('ok')
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
        <ModalError
        contents={contents} 
        status={status} 
        show={show} 
        setShow={setShow}
        navigation={navigation}
        InsertData={InsertData}
        values={values}
        initialValues={initialValues}
        setStatus={setStatus}
        setDateAdd={setDateAdd}
        setValues={setValues}
        />
        <Text style={styles.label}>Property Type</Text>
        <TextInput
            style={[styles.input,{borderColor:error.property?'#CF000F':'#000000'}]}
            value={values.property}
            placeholder="Enter Property Types here ...."
            onChangeText={onChange('property')}
        />
        {!error.property?null:(
            <ErrorMessage error={error.property}/>
        )}
        <Text style={styles.label}>Bedrooms</Text>
        <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={pickerStyles(boderColorSelectbedRoom)}
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
        <TimePicker 
        values={values} 
        setValues={setValues} 
        setError={setError} 
        error={error}
        date={dateAdd}
        setDate={setDateAdd}
        />
        {!error.dateTime?null:(
            <ErrorMessage error={error.dateTime}/>
        )}
        <Text style={styles.label}>Monthly Price</Text>
        <TextInput
            style={[styles.input,,{borderColor:error.price?'#CF000F':'#000000'}]}
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
            style={pickerStyles()}
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
            style={[styles.input,,{borderColor:error.name?'#CF000F':'#000000'}]}
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
export default TextForm
