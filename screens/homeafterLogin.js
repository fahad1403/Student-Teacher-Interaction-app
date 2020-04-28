import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { render } from 'react-dom';

class homeafterLogin extends React.Component { 
render(){
        return(
          
            <View style={styles.container}>

      <Text style={styles.heading}>Select what you want to do!</Text>
      <Button title="View Courses" color="#008a7a" onPress={()=> this.props.navigation.navigate('HomeVideo')}/>
      <br/>
      <Button title="Upload Video" color="#008a7a" onPress={()=> this.props.navigation.navigate('Upload')}/>
      
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
