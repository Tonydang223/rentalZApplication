import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import {formatISO, formatISO9075,formatRFC7231} from 'date-fns'
const TimePicker = ({values,setValues,setError,error,updatedAt,isFocused}) => {
    const {dateTime} = values
    const [date,setDate] = useState((updatedAt||!isFocused)?new Date(updatedAt):new Date())
    const [mode,setMode] = useState('date')
    const [visible, setVisible] = useState(false)
    console.log({dateT:dateTime,updatedAt:values.updatedAt})
    const onChange = (e,selectedDate)=>{
        const currentDate = selectedDate || date
        const timeAndDate = new Date(currentDate)
        const dateChoose = timeAndDate.toDateString()
        const timeChoose = formatISO9075(timeAndDate,{representation:'time'})
        if(Platform.OS === "android"){
            setVisible(false)
        } 
        
        if(e.type == "set"){
            setDate(currentDate)
            console.log(currentDate)
            setValues({...values,dateTime:`${dateChoose} - ${timeChoose}`,updatedAt:timeAndDate.toISOString()})
        }else if(e.type == "dismissed"){
            setDate(currentDate)
            setValues({...values,dateTime:'',updatedAt:''})
        }

        if(dateTime !== '' || dateTime !== null){
            setError((pre)=>{
                return{...pre,dateTime:null}
            })
        }
    }
    const showMode = (currrentMode)=>{
        setVisible(true)
        setMode(currrentMode)
    }
    const showDatePicker = ()=>{
        showMode('date')
    }
    const showTimePicker = ()=>{
        showMode('time')
    }
    return (
        <View style={[styles.wrapper,{borderColor:error.dateTime?'#CF000F':'#000000'}]}>
          <Text style={styles.dateTime}>
          {dateTime?
          dateTime
          :(<Text style={styles.placeholder}>YYYY-MM-DD --- HH:MM:SS</Text>)}
          </Text>
          <View style={styles.iconContainer}>
             <Icon name="calendar-outline" size={23} color='black' onPress={showDatePicker}/>
             <Icon style={{marginLeft:10, marginRight:-6}} name="time-outline" size={23} 
             color='black'
             onPress={showTimePicker}
             />
          </View>
          {visible&&(
              <DateTimePicker
              testID='dateTimePicker'
                  disabled="default"
                  onChange={onChange}
                  value={date}
                  mode={mode}
                  is24Hour={true}
              />
          )}
       </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
      display:'flex',
      flexDirection:'row',
      height:48,
      width:280,
      borderRadius:2,
      padding:10,
      borderColor:'#000000',
      borderStyle:'solid',
      borderWidth:1,
      marginTop:8,
      borderRadius: 4,
      marginBottom:-4,
      paddingTop:12
    },
    label:{
      marginTop:5,
    },
    iconContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        width: '22%',
    },
    dateTime:{
        width:'78%',
        paddingTop:2
    },
    placeholder:{
        fontSize:13,
        color:'#CCCDC6',

    }
  });
export default TimePicker
