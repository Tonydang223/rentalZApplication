import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const FlatListSearch = (props) => {
    const {dataSearch} = props
    return (
        <View style={{flex:1}}>
        {dataSearch.emptyData ?(<Text>No data to search</Text>):(
            <FlatList
          data={dataSearch.data}
          keyExtractor={item=>item.rental_id.toString()}
          contentContainerStyle={{
              padding:25
          }}
          renderItem={({item})=>(
              <View>
                  <Text>{item.property}</Text>
              </View>
          )}
        />
        )}
        
        </View>
    )
}
const styles = StyleSheet.create({

})

export default FlatListSearch
