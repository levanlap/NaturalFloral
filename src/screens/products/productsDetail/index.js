import React, { Component } from "react"
import { View, Image, StyleSheet } from 'react-native'
import { Container, Content, Header, Button, Footer, Icon, Left, Right, Body, Text, CardItem } from "native-base"
import ProduitsStorage from '../../../services/produits'
import ImageStorage from '../../../services/images'

export default class ProductsList extends Component {

  _onBack() {
    this.props.navigation.navigate('ProductsList')
  }
  render() {
    const { navigation } = this.props
    let qrCode = 3760265300334
    if (navigation.state.params != undefined && navigation.state.params.qrCode != undefined) {
      qrCode = navigation.state.params.qrCode
    }
    const productItem = ProduitsStorage.find((item) => item.qrCode === qrCode)
    return (
      <Container style={{ backgroundColor: "#f1f2f7" }}>
        <Header style={{ backgroundColor: "#92C7A9", paddingTop: 25 }} >
          <Left style={{ flex: 0.2 }}>
            <Button transparent onPress={() => this._onBack()}>
              <Icon name='arrow-back' style={{ color: "#fff", fontSize: 30 }} />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "700" }}>{productItem.nom}</Text>
          </Body>
          <Right style={{ flex: 0.2 }} />
        </Header>
        <Content style={{ backgroundColor: "white" }}>
          <CardItem cardBody style={{justifyContent: 'center'}}>
            <Image  source={ImageStorage.getProduitsImages(productItem.qrCode)} />
          </CardItem>
          <CardItem>
            <Body>
              <Text>{productItem.plante}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Ingrédients</Text>
              <Text note>{productItem.extrait}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Composition</Text>
              <Text note>{productItem.composition}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Decride</Text>
              <Text note>{productItem.decride}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{ color: "#85cdb4", marginBottom: 5, marginTop: 5 }}> {productItem.attention} </Text>
            </Body>
          </CardItem>
          <Footer style={{ paddingBottom: 30 }} />
        </Content>
      </Container >
    )
  }
}

{/*
const styles = StyleSheet.create({
  mb10: {
    marginBottom: 5,
    marginTop: 5
  }
})
*/}