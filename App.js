import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeActivity from './components/HomeActivity';
import ProfileActivity from './components/ProfileActivity';
import Login from './screens/Login';
import Register from './screens/Register';
import RegisterCompleted from './screens/RegisterCompleted';
import HomeVideo from './screens/HomeVideo';
import Video1 from './Videos/Video1';
import Video2 from './Videos/Video2';
import Video3 from './Videos/Video3';
import Chat from './screens/Chat';
import Upload from './screens/Upload';
import homeafterLogin from './screens/homeafterLogin';
import initialHome from './screens/initialHome';
import studentLogin from './screens/studentLogin';
import Language from './screens/Language';
import HomeHindi from './screens/HomeHindi';
import LoginHindi from './screens/LoginHindi';
import RegisterHindi from './screens/RegisterHindi';
import homeafterLoginHindi from './screens/homeafterLoginHindi';
import studentLoginHindi from './screens/studentLoginHindi';
import UploadHindi from './screens/UploadHindi';
import HomeVideoHindi from './screens/HomeVideoHindi';

const RootStack = createStackNavigator(
{
  Home: { screen: HomeActivity },
  Profile: { screen: ProfileActivity },
  Login:{screen:Login},
  Register:{screen:Register},
  RegisterCompleted:{screen:RegisterCompleted},
  HomeVideo:{screen:HomeVideo},
  Video1:{screen:Video1},
  Video2:{screen:Video2},
  Video3:{screen:Video3},
  Chat:{screen:Chat},
  Upload:{screen:Upload},
  homeafterLogin:{screen:homeafterLogin},
  initialHome:{screen:initialHome},
  studentLogin:{screen:studentLogin},
  Language:{screen:Language },
  HomeHindi:{screen:HomeHindi},
  LoginHindi:{screen:LoginHindi},
  RegisterHindi:{screen:RegisterHindi},
  homeafterLoginHindi:{screen:homeafterLoginHindi},
  studentLoginHindi:{screen:studentLoginHindi},
  UploadHindi:{screen:UploadHindi},
  HomeVideoHindi:{screen:HomeVideoHindi},
 
},
{
    initialRouteName: 'Language',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

