import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import SearchBar from "react-native-dynamic-search-bar"


class HomeVideo extends React.Component {

  render()
  {

  
    return (
      <ScrollView>
      <View style={styles.container}>
      
<SearchBar
  placeholder="Search here.."
  onChangeText={text => {
    console.log(text)
  }}
  onPressCancel={() => {
    this.filterList("");
  }}
style={styles.search}
/>
<br/>
      <View style={styles.image_cont}>
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Video1')}>
      <Image source={require('../assets/rc.png')} style={styles.img}/>
        <Text style={styles.text}>Learn React Native</Text>
        </TouchableOpacity>
         </View>
        <br/>
         <TouchableOpacity onPress={()=> this.props.navigation.navigate('Video2')}>
         <View style={styles.image_cont}>
        <Image source={require('../assets/cc2.jfif')} style={styles.img}/>
        <Text style={styles.text}>Learn Cloud Computing</Text>
      </View>
      </TouchableOpacity>
      <br/>
         <TouchableOpacity onPress={()=> this.props.navigation.navigate('Video3')}>
         <View style={styles.image_cont}>
        <Image source={require('../assets/cc2.jfif')} style={styles.img}/>
        <Text style={styles.text}>Learn Cloud Computing</Text>
      </View>
      </TouchableOpacity>
      
      </View>
      </ScrollView>
    );
  }
}
export default HomeVideo;

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
    borderRadius:10,
    resizeMode: 'stretch'
    
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'gray',
    textAlign:'ceter',

  },
  search:{
    borderWidth:1,
    textAlign:'center',
    borderColor:'gray',
    height:35,
    width:290,
    borderRadius:10
  }
});
