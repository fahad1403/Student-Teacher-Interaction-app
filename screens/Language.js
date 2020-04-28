import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button ,Image,ScrollView, ImageBackground} from 'react-native';
import { render } from 'react-dom';
import Icon from 'react-native-ionicons'



class Language extends React.Component { 
render(){
        return(
          
            <View style={styles.container}>
             <Image source={require('../assets/robo.JPG')} style={styles.img}/>
    <Text style={styles.heading}>Select the Language you prefer</Text>
    <Text style={styles.heading}>अपनी पसंद की भाषा चुनें</Text> 
      <Button title="English" color="#008a7a" onPress={()=> this.props.navigation.navigate('initialHome')}/>
      <br/>
      
      <Button title="   हिंंदी    " color="#008a7a" onPress={()=> this.props.navigation.navigate('HomeHindi')}/>
      
      </View>
      
          );
    
  
}
}


export default Language;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9BEDEC',
      alignItems: 'center',
      justifyContent: 'center',     
      
    },
  
    heading:{
      color:'#026670',
      marginBottom:'20px',
      textAlign:"center",
      fontSize:'20px',
      fontWeight:'bold'
    },
    img:{
      width:100,
      height:100,
      resizeMode: 'stretch',
      

    },
 
   
  
  });
