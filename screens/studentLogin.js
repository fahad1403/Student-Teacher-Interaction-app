import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { render } from 'react-dom';

class Login extends React.Component { 
render(){
        return(
          
            <View style={styles.container}>

      <Text style={styles.heading}>Complete your Login here!!</Text>
      <TextInput style={styles.textbox} placeholder='Username or Email'/>
      <TextInput style={styles.textbox} placeholder='Password..'secureTextEntry />
      <Button color="#008a7a" title="    Login     " onPress={()=> this.props.navigation.navigate('HomeVideo')}/>
      <br/>
     <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register')}>
        <Text>New Member?</Text>
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
