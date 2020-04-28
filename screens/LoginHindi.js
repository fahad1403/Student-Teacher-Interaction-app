import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { render } from 'react-dom';

class Login extends React.Component { 
render(){
        return(
          
            <View style={styles.container}>

      <Text style={styles.heading}>अपना लॉगिन यहाँ पूरा करें!!</Text>
      <TextInput style={styles.textbox} placeholder='नाम या ईमेल दर्ज करें..'/>
      <TextInput style={styles.textbox} placeholder='पास वर्ड दर्ज करें..'secureTextEntry />
      <Button title="लॉग इन करें" color="#008a7a" onPress={()=> this.props.navigation.navigate('homeafterLoginHindi')}/>
      <br/>
     <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register')}>
        <Text>नया सदस्य?</Text>
      </TouchableOpacity>
      
      </View>
          );
    
  
}
}


export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',     
      
    },
  
    heading:{
      color:'gray',
      marginBottom:'50px',
      textAlign:"center",
      fontSize:'27px',
      fontWeight:'bold'
    },
  
  textbox:{
    width:'300px',
    borderRadius:'10px',
    borderColor:'lightgrey',
    borderWidth:'2px',
    height:'20px',
    fontSize:'20px',
    padding:'20px',
    marginBottom:'30px',
    color:'black',
  },
  
  });
