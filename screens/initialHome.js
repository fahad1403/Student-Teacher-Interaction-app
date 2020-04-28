import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button,Image,ImageBackground } from 'react-native';
import { render } from 'react-dom';

class initialHome extends React.Component { 
render(){
        return(
          
            <View style={styles.container}>
            <ImageBackground source={require('../bg_english.jfif')} style={{width: '100%', height: '150px',flex:1, resizeMode: 'stretch',alignItems:'center',justifyContent:'center'}}>
    <Image source={require('../assets/robo.JPG')} style={styles.img}/>
  </ImageBackground> 
            
      <Text style={styles.heading}>Welcome to Robocom!.</Text>
      <Button title="Teacher Login"  color="#008a7a" onPress={()=> this.props.navigation.navigate('Login')}/>
      <br/>
      
      <Button title="Student Login" color="#008a7a" onPress={()=> this.props.navigation.navigate('studentLogin')}/>       
      </View>
          );
    
  
}
}


export default initialHome;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',     
      
    },
  
    heading:{
      color:'gray',
      marginBottom:'10px',
      textAlign:"center",
      fontSize:'27px',
      fontWeight:'bold'
    },
    img:{
      top:40,
      width:100,
      height:100,
      resizeMode: 'stretch',
    },
    
  
  });
