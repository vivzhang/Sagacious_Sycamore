import React, { Component } from 'react';
import { SensorManager } from 'NativeModules';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  DeviceEventEmitter,
  Animated,
} from 'react-native';
import PetBox from './petBox.js';
import Buttons from './buttons.js';
import StatusMessage from './statusMessage.js';
import Info from './info.js';
import Restart from './restart.js';
import Question from './question.js';
import Login from './login.js';
import Signup from './signup.js';
import Petlist from './petlist.js';
import {Scene, Router} from 'react-native-router-flux';
import NativeHR2 from './NativeHR2.js';
import cookingChallenge from './cookingChallenge.js';
import exerciseChallenge from './exerciseChallenge.js';
import sleepingChallenge from './sleepingChallenge.js';
import quizChallenge from './quizChallenge.js';
import start from './start.js';

const refreshOnBack = () => { Actions.pop(); Actions.refresh(); };
export default class NativeHR extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Router hideNavBar={true}>
        <Scene key="root">
          <Scene key="NativeHR2" component={NativeHR2} title="Home"/>
          <Scene key="start" component={start} initial={true} title="start" />
          <Scene key="petBox" component={PetBox} title="Register"/>
          <Scene key="Login" component={Login} title="Login" />
          <Scene key="Signup" component={Signup} title="Signup" />
          <Scene key="quizChallenge" component={quizChallenge} title="quizChallenge" duration={0}/>
          <Scene key="cookingChallenge" component={cookingChallenge} title="cookingChallenge" duration={0}/>
          <Scene key="exerciseChallenge" component={exerciseChallenge} title="exerciseChallenge" duration={0}/>
          <Scene key="sleepingChallenge" component={sleepingChallenge} title="sleepingChallenge" duration={0}/>
          </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('NativeHR', () => NativeHR);
