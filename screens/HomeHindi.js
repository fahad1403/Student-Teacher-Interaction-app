import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button,ImageBackground ,Image,ScrollView} from 'react-native';
import { render } from 'react-dom';

class initialHome extends React.Component { 
render(){
        return(
          
            <View style={styles.container}>
            <ImageBackground source={require('../bg_hindi.jpg')} style={{width: '100%', height: '150px',flex:1, resizeMode: 'stretch', alignItems:'center',justifyContent:'center'}}>
  <Image source={require('../assets/robo.JPG')} style={styles.img}/>
 
  </ImageBackground>
    <Text style={styles.heading}>स्वागत हे.</Text>
      <Button title="शिक्षक लॉगिन" color="#008a7a" onPress={()=> this.props.navigation.navigate('LoginHindi')}/>
      <br/>
      
      <Button title=" छात्र लॉगइन " color="#008a7a" onPress={()=> this.props.navigation.navigate('studentLoginHindi')}/>
      
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
      marginBottom:'50px',
      textAlign:"center",
      fontSize:'27px',
      fontWeight:'bold'
    },
    img:{
      top:65,
      width:100,
      height:100,
      resizeMode: 'stretch',
    },
  
  });
