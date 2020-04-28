import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { render } from 'react-dom';

class RegisterCompleted extends React.Component {
render()
{
        return(
            <View style={styles.container}>

      <Text style={styles.heading}>Registration Successfull!!</Text>
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
      <Text style={styles.text}>Go to Login!!</Text>
      </TouchableOpacity>

      </View>
          );
    
  
}
}


export default RegisterCompleted;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
      
    },
  
    heading:{
      color:'blue',
      marginBottom:'50px',
      textAlign:"center",
      fontSize:'27px',
      fontWeight:'bold'
    },

    text:{
      color:'lightgreen',
      fontSize:'15px',
    },
  
  });
