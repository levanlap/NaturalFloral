import React from "react"
import MainScreen from "./src/MainScreen"
import { Text } from 'react-native'
import Expo, { AppLoading } from 'expo'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    Text.defaultProps.allowFontScaling = false
    console.disableYellowBox = true
  }

  async _loadFontsAsync() {
    return Promise.all([
      await Expo.Font.loadAsync({
        'Roboto': require('./node_modules/native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
        'Ionicons': require('./node_modules/@expo/vector-icons/fonts/Ionicons.ttf'),
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
