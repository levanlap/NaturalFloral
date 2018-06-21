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
          {/* 
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
        */}

          <View style={{ flex: 1 }}>
            <BarCodeScanner
              type={this.state.cameraDirection}
              onBarCodeRead={this._handleBarCodeRead}
              style={StyleSheet.absoluteFill}
            >
              <View style={styles.layerTop}>
                <Text style={{ color: "#FFF", fontSize: 22, lineHeight: 30 }}>Scan QR Code</Text>
              </View>
              <View style={styles.layerCenter}>
                <View style={styles.layerLeft} />
                <View style={[styles.focused]}>
                  <View style={{ height: 1, backgroundColor: 'white', borderBottomColor: 'red', borderBottomWidth: 1 }} />
                  <View style={[styles.corner, styles.cornerTopRight]}/>
                  <View style={[styles.corner, styles.cornerTopLeft]}/>
                  <View style={[styles.corner, styles.borderBottomLeft]}/>
                  <View style={[styles.corner, styles.borderBottomRight]}/>
                </View>
                <View style={styles.layerRight} />
              </View>
              <View style={styles.layerBottom}>
                <Button transparent onPress={() => this._onBack()} style={{ alignSelf: 'center' }}>
                  <Text style={{ color: "#FFF", fontSize: 16, lineHeight: 30 }}>Annuler</Text>
                </Button>

              </View>
            </BarCodeScanner>
          </View>
        </Container>
      )
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    //alert(`Bar code with type ${type} and data ${JSON.stringify(data)} has been scanned!`)
  }
}
const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    flex: 1,
    backgroundColor: opacity,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  layerCenter: {
    flex: 2,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 2,
    backgroundColor: opacity
  },
  focused: {
    flex: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative'
  },
  corner: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderColor: 'white'
  },
  cornerTopLeft: {
    left: 0,
    top: 0,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderTopLeftRadius: 10
  },
  cornerTopRight: {
    right: 0,
    top: 0,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderTopRightRadius: 10
  },
  borderBottomLeft: {
    left: 0,
    bottom: 0,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderBottomLeftRadius: 10
  },
  borderBottomRight: {
    right: 0,
    bottom: 0,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderBottomRightRadius: 10
  },
  layerRight: {
    flex: 2,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 1,
    backgroundColor: opacity,
    alignItems: 'center',
    justifyContent: 'center'
  },
});