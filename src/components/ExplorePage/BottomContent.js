import React from 'react'
import { View,Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

const BottomContent = () => {
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
        <View style={styles.discoverWrap}>
          <Text style={styles.textHeadingDiscover}>Discover things to do</Text>
          <View style={styles.contentDiscover}>
            <View>
              <Image
              style={styles.image1}
               source={require('../../../assets/images/imageContent1.jpg')}/>
              <Text style={styles.textTitle}>Experiences</Text>
              <Text style={styles.smallText}>Find unforgettable activities</Text>
            </View>
            <View>
              <Image
              style={styles.image1}
               source={require('../../../assets/images/imageContent2.jpg')}/>
              <Text style={styles.textTitle}>Features</Text>
              <Text style={styles.smallText}>Travel from your home</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.headingTextCard}>RentalZ Application</Text>
          <Text style={styles.textCard}>All things you want to make differences, we always bring for you an amazing experience with your space.</Text>
          <TouchableOpacity
          style={styles.btn}
          >
            <Text style={{fontSize:15,fontWeight:'bold'}}>Learn More</Text>
          </TouchableOpacity>
          <Image 
          style={styles.image2}
          source={require('../../../assets/images/imageContent3.jpg')}/>
        </View>
        </View>
    )

}
const styles = StyleSheet.create({
   discoverWrap:{
     flexDirection:'column',
     margin:20
   },
   image1:{
     width:150,
     height:150,
     borderRadius:10,
     shadowColor:'#fff',
     shadowOffset:{width:0,height:12},
     shadowOpacity:.5,
     shadowRadius:10,
   },
   textHeadingDiscover:{
     fontSize:25,
     fontWeight:'bold',
     marginBottom:20
   },
   contentDiscover:{
     flexDirection:'row',
     justifyContent:'space-between'
   },
   textTitle:{
     fontSize:18,
     fontWeight:'bold',
     marginTop:7
   },smallText:{
     fontSize:12
     ,marginTop:2
    },
    btn:{
      width:120,
      height:40,
      borderRadius:7,
      backgroundColor:'#fff',
      marginBottom:40,
      marginTop:20,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      padding:5
    },
    image2:{
      height:200,
      width:'100%',
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15
    },
    card:{
      flexDirection:'column',
      alignItems:'center',
      margin:20,
      borderRadius:15,
      backgroundColor:'#191919',
    },
    textCard:{
      paddingLeft:50,
      paddingRight:50,
      color:'#fff',
      textAlign:'center',
      letterSpacing:0.5,
      lineHeight:19
    },
    headingTextCard:{
      fontSize:25,
      fontWeight:'bold',
      color:'#fff',
      marginTop:25,
      marginBottom:10
    }
})

export default BottomContent
