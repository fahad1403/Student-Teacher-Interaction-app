import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { render } from 'react-dom';

class Upload extends React.Component { 
render(){
        return(
          
            <View style={styles.container}>
      <Text  style={styles.heading}>एक नया विषय बनाएँ!!</Text>
      <TextInput style={styles.textbox} placeholder='वीडियो का शीर्षक दर्ज करें..'/>
      <TextInput style={styles.textbox_desc} placeholder='वीडियो का विवरण दर्ज करें..'/>
       <Button title="वीडियो फ़ाइल का चयन करें" color="#008a7a"/>
       <br/>
        <Button title="     वीडियो अपलोड करें     " color="#008a7a" />
      
      </View>
          );
    
  
}
}


export default Upload;

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
   textbox_desc:{
    width:'300px',
    borderRadius:'10px',
    borderColor:'lightgrey',
    borderWidth:'2px',
    height:'50px',
    fontSize:'20px',
    padding:'20px',
    marginBottom:'30px',
    color:'black',
  },
  
  });
