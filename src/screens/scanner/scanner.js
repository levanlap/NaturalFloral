import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BarCodeScanner, Permissions, Constants } from 'expo'
import { Container, Header, Button, Icon, Left, Right, Body } from "native-base"

const sommaire = []
export default class Scanner extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }
  _onBack() {
    this.props.navigation.navigate('PlantesList')
  }

  render() {
    const { hasCameraPermission } = this.state
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    } else {
      return (
        <Container>
          <Header style={{ backgroundColor: "#92C7A9", paddingTop: 25 }} >
            <Left style={{ flex: 0.2 }}>
              <Button transparent onPress={() => this._onBack()}>
                <Icon name='arrow-back' style={{ color: "#fff", fontSize: 30 }} />
              </Button>
            </Left>
            <Body>
              <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "700" }}>Scanner</Text>
            </Body>
            <Right style={{ flex: 0.2 }} />
          </Header>

          <View style={{ flex: 1 }}>
            <BarCodeScanner
              type={this.state.cameraDirection}
              onBarCodeRead={this._handleBarCodeRead}
              style={StyleSheet.absoluteFill}
            />
          </View>
        </Container>

      )
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${JSON.stringify(data)} has been scanned!`)
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  contentRow: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    width: 300,
    height: 300,
  },
  scanline: {
    backgroundColor: 'red',
    height: 1
  }
})