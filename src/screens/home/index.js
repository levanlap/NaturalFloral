import React, { Component } from "react"
import { ImageBackground, View, StatusBar } from "react-native"
import { Container, Button, H3, Text } from "native-base"

import styles from "./styles"

const launchscreenBg = require("../../../assets/launchscreen-bg.png")
const launchscreenLogo = require("../../../assets/logo.jpg")

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {/* <ImageBackground source={launchscreenBg} style={styles.imageContainer}> */}
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View style={{ alignItems: "center", marginBottom: 50, backgroundColor: "transparent" }} >
            <H3 style={styles.text}>Flora Natura</H3>
            <View style={{ marginTop: 8 }} />
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button style={{ backgroundColor: "#6FAF98", alignSelf: "center" }} onPress={() => this.props.navigation.openDrawer()} >
              <Text>Lets Go!</Text>
            </Button>
          </View>
        {/* </ImageBackground> */}
      </Container>
    )
  }
}

export default Home