import React from 'react'
import {Modal,StyleSheet,View,Text, TouchableOpacity,ScrollView,Image} from 'react-native'

const BoxConfirm = (props) => {
    const {values,setShow,setStatus,InsertData,setDateAdd,initialValues,setValues} = props
    const handleConfirm =(value)=>{
            setShow(true) 
            setStatus('loading')
            InsertData(value)
            setValues(initialValues)
            setDateAdd(new Date())
    }
    return (
         <View style={styles.boxDetailsConfirm}>
         <View style={styles.above}>
         <Text style={styles.headingText}>Confirm Details</Text>
         </View>
         <View style={{height:180,width:'100%',padding:4}}>
         <ScrollView>
         <View style={styles.middle}>
         <View style={{display:'flex',flexDirection:'row'}}>
         <Text style={{fontWeight:'bold'}}>Property Type:</Text>
         <Text style={{marginLeft:9}}>{values.property}</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
         <Text style={{fontWeight:'bold'}}>Bed Room:</Text>
         <Text style={{marginLeft:9}}>{values.bedRoom}</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
         <Text style={{fontWeight:'bold'}}>Date And Time:</Text>
         <Text style={{marginLeft:9}}>{values.dateTime}</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
         <Text style={{fontWeight:'bold'}}>Monthly Price:</Text>
         <Text style={{marginLeft:9}}>{values.price}</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
         <Text style={{fontWeight:'bold'}}>Furniture Type:</Text>
         <Text style={{marginLeft:9}}>{values.furType?values.furType:'You do not select any field of the furniture type'}</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
         <Text style={{fontWeight:'bold'}}>Note:</Text>
         <Text style={{marginLeft:9}}>{values.note?values.note:'You do not enter any information about the note'}</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
         <Text style={{fontWeight:'bold'}}>Name:</Text>
         <Text style={{marginLeft:9}}>{values.name}</Text>
         </View>
         </View>
         </ScrollView>
         </View>
         <View style={styles.bottom}>
             <TouchableOpacity
             style={[styles.btn,{backgroundColor:'#22A7F0'}]}
             onPress={()=>handleConfirm(values)}
             >
                 <Text style={styles.textBtn}>Confirm</Text>
             </TouchableOpacity>
             <TouchableOpacity
             style={[styles.btn,{backgroundColor:'#000'}]}
             onPress={()=>setShow(false)}
             >
                 <Text style={styles.textBtn}>Go Back</Text>
             </TouchableOpacity>
         </View>
         </View>
    )
}
const styles = StyleSheet.create({
    boxDetailsConfirm:{
        width:'85%',
        borderRadius:15,
        backgroundColor:'#fff'
    },
    above:{
        width:'100%',
        height:45,
        backgroundColor:'#22A7F0',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        paddingTop:7,
        paddingBottom:7,
        alignItems:'center'
    },
    headingText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:22,
    },
    middle:{
        justifyContent:'flex-start',
        display:'flex',
        width:'100%',
        padding:10,
    },
    image:{
        width:100,
        height:100,
        borderRadius:15
    },
    bottom:{
        alignItems:'center',
        width:'90%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        margin:12,
        padding:15
    },
    btn:{
        width:115,
        height:45,
        borderRadius:15,
        shadowColor:'#000',
        shadowOffset:{width:2,height:8},
        shadowOpacity:.4,
        shadowRadius:15
    },
    textBtn:{color:'#fff',
    fontSize:18,
    textAlign:'center',
    padding:8,
    textTransform:'uppercase'

}
})
export default BoxConfirm
