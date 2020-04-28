import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native';
import Constants from 'expo-constants';

class HomeVideoHindi extends React.Component {
  render()
  {

  
    return (
      <ScrollView>
      <View style={styles.container}>
      <View style={styles.image_cont}>
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Video1')}>
      <Image source={require('../assets/rc.png')} style={styles.img}/>
        <Text style={styles.text}>जानें रिएक्टि नेटिव</Text>
        </TouchableOpacity>
         </View>
        
         <TouchableOpacity onPress={()=> this.props.navigation.navigate('Video2')}>
         <View style={styles.image_cont}>
        <Image source={require('../assets/cc2.jfif')} style={styles.img}/>
        <Text style={styles.text}>क्लाउड कम्प्यूटिंग सीखें</Text>
      </View>
      </TouchableOpacity>
      
         <TouchableOpacity onPress={()=> this.props.navigation.navigate('Video3')}>
         <View style={styles.image_cont}>
        <Image source={require('../assets/cc2.jfif')} style={styles.img}/>
        <Text style={styles.text}>क्लाउड कम्प्यूटिंग सीखें</Text>
      </View>
      </TouchableOpacity>
      
      </View>
      </ScrollView>
    );
  }
}
export default HomeVideoHindi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
    top:40
  },
  image_cont:{
    width:300,
    height:150,
    borderWidth:2,
    borderColor:'lightgray',
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,

  },
  img:{
    width:200,
    height:100,
    borderRadius:10
    
  },
  text:{
    fontSize:20,
    color:'gray'

  }
});
