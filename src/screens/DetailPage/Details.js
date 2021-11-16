import React, { useRef } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, Animated,Share } from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';
import BottomContentDetail from './BottomContentDetail';
import TopContentDetail from './TopContentDetail';


const Details = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {idCard,objData} = route.params
    const scrollDetail = useRef(new Animated.Value(0)).current

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
            "Property Type:"+ objData.propertyType
            +"\nName:"+ objData.name
            +"\nBed Room:" +objData.bedRoom
            +"\nFurniture Type:"+ objData.furTypes
            +"\nCreated At:" +objData.createdAt
            +"\nPrice:" +objData.monthlyPrice
            ,
            title:`The Post ${objData.id}`,
            url:objData.images,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              console.log('share with active')
            } else {
              // clg
             console.log('Shared')
            }
          } else if (result.action === Share.dismissedAction) {
            console.log('dont share')
          }
        } catch (error) {
          alert(error.message);
        }
      };
    return (
        <View>
        <TopContentDetail navigation={navigation} 
        scrollDetail={scrollDetail}
        onShare={onShare}
        />
        <Animated.ScrollView
        onScroll={Animated.event(
            [{nativeEvent:{contentOffset:{y:scrollDetail}}}],
            {useNativeDriver:true}
        )}
        scrollEventThrottle={17}
        >
            <View style={styles.wrapper}>
                <Animated.Image
                    source={{uri:objData.images}}
                    style={styles.img(scrollDetail)}
                />
                <BottomContentDetail objData={objData}/>
            </View>
        </Animated.ScrollView>
           
        </View>
    )
}
const styles = {
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
                  inputRange:[-360,0,360,361],
                  outputRange:[-180,0,240,240]
                })
            },
            {
                scale:scrollDetail.interpolate({
                    inputRange:[-360,0,360,361],
                    outputRange:[2,1,0.5,0.5]
                })
            }
        ]
    })
}
export default Details
