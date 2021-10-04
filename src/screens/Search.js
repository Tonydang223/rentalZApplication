import React from 'react'
import { StyleSheet, View,Text, Image, ScrollView } from 'react-native';
import BottomContent from '../components/ExplorePage/BottomContent';
import TopNav from './../components/ExplorePage/TopNav';
import {useNavigation} from '@react-navigation/native'

const Search = (props) => {
    const navigation = useNavigation()
    return (
        <View>
            <TopNav navigation={navigation}/>
            <ScrollView>
            <View style={styles.bannerWrapper}>
              <Image
                  style={styles.banner}
                  source={require('../../assets/images/bg.jpg')}
              />
              <BottomContent/>
            </View>
            </ScrollView>
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
      width:'200%'
    })
})
export default Search
