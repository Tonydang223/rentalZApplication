import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const FlatListSearch = (props) => {
    const {dataSearch,openDetails} = props
    return (
        <View style={{flex:1}}>
        {dataSearch.emptyData ?(<Text style={styles.textNodata}>No data to search</Text>):(
            <FlatList
          data={dataSearch.data}
          keyExtractor={item=>item.id.toString()}
          contentContainerStyle={{
              padding:25
          }}
          renderItem={({item})=>(
              <TouchableOpacity
              style={styles.wrapper}
              onPress={()=>openDetails(item.id)}
              >
                  <Image
                  source={{uri:item.images}}
                  style={styles.img}
                  />
                  <View style={{padding:13}}>
                  <View style={[styles.above,{flexDirection:'row'}]}>
                  <Text style={styles.textPrice}>${item.monthlyPrice} </Text>
                      <Text style={{fontSize:14,color:'#999894',marginTop:4.5}}>/per night</Text>
                  </View>
                <Text style={{fontSize:22,fontWeight:'bold',textTransform:'capitalize'}}>{item.propertyType}</Text>
                <View style={[styles.middle,{flexDirection:'column'}]}>
                    <Text style={{fontSize:13.5,marginTop:0.5,color:'#999894',textTransform:'capitalize'}}>By {item.name}</Text>
                    <View style={{flexDirection:'row'}}>
                    <Icon 
                    name='calendar-outline' 
                    size={16} 
                    color='#999894'
                    style={{marginTop:2}}
                    ></Icon>
                    <Text 
                    style={{fontSize:13.5,marginLeft:5,marginTop:1,color:'#999894'}}>
                    {item.createdAt.slice(0,item.createdAt.length-10)}</Text>
                    </View>
                </View>
                <View style={[styles.bottom,{flexDirection:'row'}]}>
                <View style={[styles.iconbed,{flexDirection:'row'}]}>
                <Icon 
                name="bed" 
                size={18} 
                color="#000"
                style={{marginTop:1}}
                />
                    <Text style={{marginLeft:5,marginTop:1}}>{item.bedRoom}</Text>
                </View>
                <View style={[styles.iconhome,{flexDirection:'row'}]}>
                <Icon 
                style={{marginTop:2}}
                name="home" size={16} color="#000"/>
                    <Text style={{marginLeft:3,marginTop:2,textTransform:'capitalize',fontSize:13}}>{item.furTypes?item.furTypes:'None'}</Text>
                </View>
                </View>
                  </View>
              </TouchableOpacity>
          )}
        />
        )}
        
        </View>
    )
}
const styles = StyleSheet.create({
  wrapper:{
   marginBottom:20,
   flexDirection:'row',
   borderRadius:15,
   backgroundColor:'#f9f9f9',
   shadowColor:'#000',
   shadowOpacity:0.7,
   shadowOffset:{width:0,height:10},
   marginTop:12,
   elevation:10,
   shadowRadius:20
  },
  img:{
      width:120,
      height:120,
      borderRadius:20,
      margin:12,
      zIndex:15
  },
  bottom:{
      marginTop:5
  },
  textPrice:{
      fontSize:20,
      fontWeight:'bold',
      letterSpacing:0.8
      
  },
  iconhome:{
      marginLeft:12,
  },
  textNodata:{
      color:'#6b6b6b',
      textAlign:'center',
      marginTop:80,
      fontSize:25
  }
})

export default FlatListSearch
