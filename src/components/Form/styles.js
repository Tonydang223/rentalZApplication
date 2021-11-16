import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formInside:{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-start',
        padding:22,
    },
    label:{
        marginTop:10,
        fontSize:15,
        fontWeight:'800',
        letterSpacing:0.8
    },
    input:{
        height:50,
        width:280,
        padding:12,
        borderStyle:'solid',
        borderWidth:1,
        marginTop:11,
        borderRadius: 6,
    },
    textArea:{
        width:'100%',
        width:280,
        height:130,
        top:0,
        paddingHorizontal:10,
        paddingTop:5,
        marginTop:11,
        borderRadius: 6,
        borderStyle:'solid',
        borderWidth:1,
    },
    btn:{
        flex:1,
        alignItems:'center',
    },
    pressBtn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:280,
        height:45,
        borderRadius:7,
        borderColor:'#000000',
        backgroundColor:'#22A7F0',
        borderStyle:'solid',
        marginTop:35,
        marginBottom:15,
        shadowColor:'#fff',
        shadowOffset:{width:5,height:2},
        shadowRadius:5,
        shadowOpacity:0.5,
        elevation:8
    },
    text:{
        fontSize:20,
        letterSpacing:3.5,
        color:'#fff'
    },
    ctBar:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width:280,
      marginTop:10
    },
    bar:{
        width:180,
        marginTop:28,
        height:2,
        backgroundColor:'#CCCDC6'
    },
    error:{
        color:'#ff3333',
        fontSize:14,
        letterSpacing:0.8,
        marginTop:5
    }
})
const pickerStyles = (borderColor)=> StyleSheet.create({
    inputAndroid: {
        fontSize: 14,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor:borderColor,
        marginTop:6,
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        height:48,
        width:280 
      },
  });
  export {pickerStyles,styles}