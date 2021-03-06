import React, { Component } from 'react'
import { Platform, StatusBar, Text, StyleSheet } from "react-native"
import { Header, Button, Icon, Left, Right, Body } from "native-base"

export default class TitleHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: "#92C7A9", paddingTop: Platform.OS === 'ios' ? 44 : StatusBar.currentHeight }} >
        <Left style={{ flex: 0.2 }}>
          <Button transparent onPress={() => this.props.navigation.openDrawer()} >
            <Icon style={styles.icon} name="menu" type="Entypo" />
          </Button>
        </Left>
        <Body>
          <Text style={styles.title}>{this.props.title}</Text>
        </Body>
        <Right style={{ flex: 0.2 }} />
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  title: { color: "#FFF", fontSize: 20, fontWeight: "700" },
  icon: { color: "#fff", fontSize: 30 }
})

