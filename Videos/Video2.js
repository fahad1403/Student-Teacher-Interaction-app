import React, { Component } from 'react';
import { StyleSheet, View,Text,ScrollView,TouchableOpacity,Button } from 'react-native';
import { Video } from 'expo-av';

class Video2 extends React.Component {
render(){
  return (
    <ScrollView>
    <View >
    <Text style={styles.heading}>Learn React Native full Course!!</Text>
   <Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300,borderRadius:10,borderWidth:1,borderColor:'lightgray',right:0 }}
/>
<br/>
<Button title="Ask your doubts here!" style={{fontSize:20 ,color:'#008a7a',textAlign:"center",marginTop:10}} onPress={()=>this.props.navigation.navigate('Chat')}/>
</View>
</ScrollView>
    );
  }
}
export default Video2;

const styles = StyleSheet.create({

    heading:{
      marginTop:30,
      color:'blue',
      marginBottom:5,
      textAlign:"center",
      fontSize:27,
      fontWeight:'bold'
    },
       container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
});

