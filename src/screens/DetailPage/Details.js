import React, { useRef } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, Animated } from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';
import BottomContentDetail from './BottomContentDetail';
import TopContentDetail from './TopContentDetail';


const Details = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {idCard,objData} = route.params
    const scrollDetail = useRef(new Animated.Value(0)).current
    return (
        <View>
        <TopContentDetail navigation={navigation} scrollDetail={scrollDetail}/>
        <Animated.ScrollView
        onScroll={Animated.event(
            [{nativeEvent:{contentOffset:{y:scrollDetail}}}],
            {useNativeDriver:true}
        )}
        scrollEventThrottle={17}
        >
            <View style={styles.wrapper}>
                <Animated.Image
                    source={{uri:objData.image}}
                    style={styles.img(scrollDetail)}
                />
                <BottomContentDetail objData={objData}/>
            </View>
        </Animated.ScrollView>
           
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
    marginTop:-1000,
    paddingTop:1000,
    alignItems:'center',
    overflow:'hidden'
  },
    textHeading:{
        fontSize:25
    },
    img:(scrollDetail)=>({
        height:400,
        width:'200%',
        transform:[
            {
                translateY:scrollDetail.interpolate({
                  inputRange:[-400,0,400,401],
                  outputRange:[-200,0,300,300]
                })
            },
            {
                scale:scrollDetail.interpolate({
                    inputRange:[-400,0,400,401],
                    outputRange:[2,1,0.5,0.5]
                })
            }
        ]
    })
})
export default Details
