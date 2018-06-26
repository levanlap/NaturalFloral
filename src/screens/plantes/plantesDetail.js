import React, { Component } from "react"
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { Container, Content, Header, Button, List, ListItem, Icon, Left, Right, Thumbnail, Body, Tabs, Fab, H1, H3, Tab, Text, Card, CardItem } from "native-base"
import ProduitsStorage from '../../services/produits'
import ImageStorage from '../../services/images'
export default class PlantesDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  _viewDetail(qrCode) {
    this.props.navigation.navigate('ProductsDetail', { qrCode })
  }
  _onBack() {
    this.props.navigation.navigate('PlantesList')
  }

  render() {
    const deviceHeight = Dimensions.get("window").height

    const { navigation } = this.props
    const plant = navigation.state.params.item
    let relatedProduct = ProduitsStorage.find((item) => item.qrCode == plant.product)
    return (
      <Container>
        <View>
          <ImageBackground style={[StyleSheet.absoluteFill]} source={plant.img} />
          <Header style={{ backgroundColor: 'rgba(0,0,0,0.2)', height: deviceHeight / 3.5 }} >
            <Left style={{ flex: 0.2 }}>
              <Button transparent onPress={() => this._onBack()}>
                <Icon style={headerStyle.icon} name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Text style={headerStyle.title}>{_.startCase(plant.name)} </Text>
              <Text style={[headerStyle.title, { fontSize: 16, fontStyle: 'italic' }]}>{plant.scientifique}</Text>
            </Body>
            <Right style={{ flex: 0.2 }} />
          </Header>
        </View>
        <Content style={{ backgroundColor: "white" }}>
          <Tabs>
            <Tab heading="Détail">
              <CardItem>
                <Body>
                  <Text><Text style={{ fontWeight: '700', padding: 5 }}>Nom scientifique:</Text> {plant.scientifique}</Text>
                  <Text><Text style={{ fontWeight: '700', padding: 5 }}>Famille:</Text> {plant.famille}</Text>
                  <Text><Text style={{ fontWeight: '700', padding: 5 }}>Ordre:</Text> {plant.ordre}</Text>
                  <Text><Text style={{ fontWeight: '700', padding: 5 }}>Classification:</Text> {plant.classification}</Text>
                  <Text note style={{ padding: 5 }}>{plant.intro}</Text>
                  <Text note style={{ padding: 5 }}>{plant.wikipedia}</Text>

                  <Text style={{ fontWeight: '700', padding: 5 }}>Produits connexes</Text>
                </Body>
              </CardItem>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square size={55} source={ImageStorage.getProduitsImages(relatedProduct.qrCode)} />
                </Left>
                <Body>
                  <Text style={{ color: '#85cfcd' }}>{relatedProduct.nom}</Text>
                  <Text numberOfLines={1} note> {relatedProduct.decride} </Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => { this._viewDetail(relatedProduct.qrCode) }}> <Text>Détails</Text></Button>
                </Right>
              </ListItem>
            </Tab>
            <Tab heading="Slack chat">
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('../../../assets/contacts/atul.png')} />
                  </Left>
                  <Body>
                    <Text>Kumar Pratik</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('../../../assets/contacts/shweta.png')} />
                  </Left>
                  <Body>
                    <Text>Kumar Pratik</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('../../../assets/contacts/sankhadeep.png')} />
                  </Left>
                  <Body>
                    <Text>Kumar Pratik</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('../../../assets/contacts/pratik.png')} />
                  </Left>
                  <Body>
                    <Text>Kumar Pratik</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
              </List>
            </Tab>
          </Tabs>
        </Content>
        <Fab active={this.state.active} direction="up" containerStyle={{}} style={{ backgroundColor: "#92C7A9" }} position="bottomRight" onPress={() => alert("La fonction n'a pas été activée.")} >
          <Icon name="edit" type="Entypo" style={{ color: "#fff", fontSize: 26, width: 30 }} />
        </Fab>
      </Container>
    )
  }
}

const headerStyle = StyleSheet.create({
  title: { color: "#FFF", fontSize: 36, fontWeight: '300' },
  icon: { color: "#fff", fontSize: 30 }
})