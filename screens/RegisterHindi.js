import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button,ScrollView } from 'react-native';

class Register extends React.Component {
render()
{
        return(
          <ScrollView>
            <View style={styles.container}>
      
            <Text style={styles.heading}>Complete your Registration here!!</Text>
            <TextInput style={styles.textbox} placeholder='पूरा नाम..'/>
            <TextInput style={styles.textbox} placeholder='ईमेल..'/>
            <TextInput style={styles.textbox} placeholder='Password..'secureTextEntry />
     <TextInput style={styles.textbox} placeholder='Confirm Password..'secureTextEntry />
            <Button title="रजिस्टर करें!!" color="#008a7a" onPress={ ()=>this.props.navigation.navigate('RegisterCompleted') }  />
            <br/>
            <TouchableOpacity onPress={ ()=>this.props.navigation.navigate('LoginHindi') }>
              <Text >Already Registered?</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
          );
        
}
}

export default Register;

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
