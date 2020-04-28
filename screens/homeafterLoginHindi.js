import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { render } from 'react-dom';

class homeafterLogin extends React.Component { 
render(){
        return(
          
            <View style={styles.container}>

      <Text style={styles.heading}>आप जो करना चाहते हैं उसका चयन करें!</Text>
      <Button title="      विषय देखें      " color="#008a7a" onPress={()=> this.props.navigation.navigate('HomeVideoHindi')}/>
      <br/>
      <Button title="वीडियो अपलोड करें" color="#008a7a" onPress={()=> this.props.navigation.navigate('UploadHindi')}/>
      
      </View>
          );
    
  
}
}


export default homeafterLogin;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ADD0F2',
      alignItems: 'center',
      justifyContent: 'center',     
      
    },
  
    heading:{
      color:'black',
      marginBottom:'50px',
      textAlign:"center",
      fontSize:'27px',
      fontWeight:'bold'
    },

  });
