import React from 'react'

export const isValidate = (values,setError) => {
    const regexLetter = /^[a-zA-Z\s]*$/
    if(!values.property){
        setError((pre)=>{
            return {...pre,property:'This field must be required'}
        })
    }else if(values.property.length > 25){
        setError((pre)=>{
            return {...pre,property:'The property not too 25 characters'}
        })
    }else if(!values.property.match(regexLetter)){
        setError((pre)=>{
            return {...pre,property:'The property contains only letters'}
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
    }else if(parseInt(values.price)<=0){
        setError((pre)=>{
            return {...pre,price:'Price must be bigger than 0'}
        })
    }else if(!values.price.match(/^-?[0-9][0-9,\.]+$/)){
        setError((pre)=>{
            return {...pre,price:'You need enter right format'}
        })
    }
    if(!values.name){
        setError((pre)=>{
            return {...pre,name:'This field must be required'}
        })
    }else if(values.name.length>20){
        setError((pre)=>{
            return {...pre,name:'The name is not too 20 characters'}
        })
    }else if(!values.name.match(regexLetter)){
        setError((pre)=>{
            return {...pre,name:'The name contains only letters'}
        })
    }
    if(!values.dateTime){
        setError((pre)=>{
            return {...pre,dateTime:'This field must be required'}
        })
    }
    return true
   
}
