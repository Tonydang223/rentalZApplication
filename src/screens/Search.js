import React,{useRef} from 'react'
import { StyleSheet, View,Text, Image, ScrollView,Animated } from 'react-native';
import BottomContent from '../components/ExplorePage/BottomContent';
import TopNav from './../components/ExplorePage/TopNav';
import {useNavigation} from '@react-navigation/native'

const Search = (props) => {
    const scrollA = useRef(new Animated.Value(0)).current
    const navigation = useNavigation()
    return (
        <View>
            <TopNav navigation={navigation} scrollA={scrollA}/>
            <Animated.ScrollView
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset:{y:scrollA}}}],
                {useNativeDriver:true}
            )}
            scrollEventThrottle={16}
            >
            <View style={styles.bannerWrapper}>
              <Animated.Image
                  style={styles.banner(scrollA)}
                  source={require('../../assets/images/bg.jpg')}
              />
              <BottomContent/>
            </View>
            </Animated.ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    bannerWrapper:{
        marginTop:-1000,
        paddingTop:1000,
        alignItems:'center',
        overflow:'hidden'
    },
    textHeading:{
        fontSize:25
    },
    banner:(scrollA)=>({
      height:350,
      width:'200%',
      transform:[
          {
              translateY:scrollA.interpolate({
                inputRange:[-350,0,350,351],
                outputRange:[-175,0,263,263]
              })
          },
          {
              scale:scrollA.interpolate({
                  inputRange:[-350,0,350,351],
                  outputRange:[2,1,0.5,0.5]
              })
          }
      ]
    })
})
export default Search
