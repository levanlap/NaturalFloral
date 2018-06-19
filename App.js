import React from "react"
import MainScreen from "./src/MainScreen"
import { Text } from 'react-native'
import Expo, { AppLoading } from 'expo'
import * as firebase from 'firebase';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    Text.defaultProps.allowFontScaling = false
    console.disableYellowBox = true
    const firebaseConfig = {
      apiKey: "AIzaSyD-Aq2_bBYK3MgxNTtznZrkrqLwr69S3iQ",
      authDomain: "natural-floral.firebaseapp.com",
      databaseURL: "https://natural-floral.firebaseio.com",
      storageBucket: "natural-floral.appspot.com",
    };

    firebase.initializeApp(firebaseConfig);
    var ref = firebase.database().ref();

    ref.on("value", function (snapshot) {
      console.log(snapshot.val());
    }, function (error) {
      console.log("Error: " + error.code);
    });

  }

  async _loadFontsAsync() {
    return Promise.all([
      await Expo.Font.loadAsync({
        'Roboto': require('./node_modules/native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
        'Ionicons': require('./node_modules/@expo/vector-icons/fonts/Ionicons.ttf'),
        'Entypo': require('./node_modules/@expo/vector-icons/fonts/Entypo.ttf'),
        'FontAwesome': require('./node_modules/@expo/vector-icons/fonts/FontAwesome.ttf'),
        'Material Design Icons': require('./node_modules/@expo/vector-icons/fonts/MaterialCommunityIcons.ttf'),
        'MaterialCommunityIcons': require('./node_modules/@expo/vector-icons/fonts/MaterialCommunityIcons.ttf'),
        'MaterialIcons': require('./node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf'),
        'Material Icons': require('./node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf'),
      })
    ])
  }

  _handleLoadingError = error => {
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ appIsReady: true })
  }

  render() {

    if (!this.state.appIsReady) {
      return (
        <AppLoading
          startAsync={this._loadFontsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    }
    return <MainScreen />
  }
}
