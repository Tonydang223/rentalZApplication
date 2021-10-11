import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const BottomContentDetail = (props) => {
    const {objData} = props
    return (
        <View style={{flex:1,backgroundColor:'#fff',width:'100%'}}>
        <View style={styles.textProper}>
        <Text style={styles.textHeadingProper}>{objData&&objData.property}</Text>
         <Text style={styles.textSmallProper}>Property</Text>
        </View>
        <View style={styles.nameWrapper}>
        <View style={styles.nameAbove}>
        <Text style={styles.textName}>{objData&&objData.name}</Text>
        <Text style={styles.textSmallName}>Reporter</Text>
        <View style={{flexDirection:'row',marginBottom:16}}>
            <Icon name="time" color="rgb(0, 71, 171)" size={22} />
            <Text style={styles.time}>{objData&&objData.createdAt}</Text>
        </View>
        </View>
        <View style={styles.avatar}>
            <Text style={styles.firstLetter}>{objData&&objData.name.charAt(0).toUpperCase()}</Text>
        </View>
        </View>

        <View style={styles.infoInside}>
           <View style={{flexDirection:'row',marginBottom:7}}>
               <Icon name="bed-outline" size={30} color="rgb(0, 71, 171)" style={{marginTop:4.5}}/>
               <View style={{padding:5,marginLeft:13,}}>
               <Text style={styles.textHeadIcons}>Bed Rooms</Text>
               <Text style={styles.textIcon}>{objData&&objData.bedRoom}</Text>
               </View>
           </View>
           <View style={{flexDirection:'row',marginBottom:7}}>
               <Icon name="home-outline" size={30} color="rgb(0, 71, 171)" style={{marginTop:4.5}}/>
               <View style={{padding:5,marginLeft:13,}}>
               <Text style={styles.textHeadIcons}>Furniture Type</Text>
               <Text style={[styles.textIcon,{textTransform:'capitalize'}]}>{objData&&objData.furType}</Text>
               </View>
           </View>
           <View style={{flexDirection:'row',marginBottom:7}}>
               <Icon name="cash-outline" size={30} color="rgb(0, 71, 171)" style={{marginTop:4.5}}/>
               <View style={{padding:5,marginLeft:13,}}>
               <Text style={styles.textHeadIcons}>Monthly Price</Text>
               <Text style={[styles.textIcon,{textTransform:'capitalize'}]}>{objData&&objData.price}</Text>
               </View>
           </View>

        </View>
        <View style={styles.noteWrapper}>
        <Text style={styles.textHeadNote}>Note</Text>
        {objData&&!objData.note?(<Text style={styles.messageNote}>You do not note down any information here</Text>):(<Text style={styles.textContentNote}>{objData.note}</Text>)}
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
   textProper:{
       borderBottomWidth:1,
       borderColor:'#6B6B6B',
       marginLeft:22,
       marginRight:22,
       marginTop:17
   },
   textHeadingProper:{
    fontSize:40,
    marginBottom:8
   },
   textSmallProper:{
    fontSize:15
    ,color:"#6b6b6b",
    marginBottom:17
    },
    nameWrapper:{
       justifyContent:'space-between',
       display:'flex',
       flexDirection:'row' ,
       marginLeft:22,
       marginRight:22,
       marginTop:15,
       borderBottomWidth:1,
       borderColor:'#6b6b6b'
    },
    nameAbove:{display:'flex',
        flexDirection:'column',
    justifyContent:'flex-start',
  
},
    avatar:{
        width:60,
        height:60,
        borderRadius:120,
        backgroundColor:'rgb(0, 71, 171)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#fff',
        shadowOffset:{width:8,height:8},
        shadowOpacity:0.5,
        shadowRadius:110,
        borderWidth:1,
        borderColor:'#FFF',
        marginTop:7
    },
    firstLetter:{
        fontWeight:'bold',
        fontSize:25,
        color:'#fff'
    },
    textName:{
        fontSize:35,
        marginBottom:3,
        textTransform:'capitalize'
    },
    textSmallName:{
        fontSize:15,
        marginBottom:16,
        color:'#6b6b6b'
    },
    time:{
        marginLeft:7,
        color:"#6b6b6b",
        fontSize:15,
        marginTop:1
    },
    infoInside:{
        justifyContent:'flex-start',
        flexDirection:'column',
        borderBottomWidth:1,
        borderColor:'#6B6B6B',
        marginLeft:22,
        marginRight:22,
        marginTop:14
 
    },
    textIcon:{
        fontSize:16,
        letterSpacing:1.2
    },
    textHeadIcons:{
        fontSize:19,
        fontWeight:'bold'
    },
    noteWrapper:{
        marginLeft:22,
        marginRight:22,
        marginTop:17,
        marginBottom:14
    },
    textHeadNote:{
        fontSize:35,

    },
    textContentNote:{
        marginBottom:15,
        marginTop:10,
        fontSize:17
    },
    messageNote:{
        color:'#6b6b6b',
        marginBottom:15,
        marginTop:12,
    }
    
})

export default BottomContentDetail
