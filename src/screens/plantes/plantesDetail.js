import React, { Component } from "react"
import { View, StyleSheet, ImageBackground, Dimensions, Text } from 'react-native'
import { Container, Content, Header, Button, ListItem, Icon, Left, Right, Thumbnail, Body, Tabs, Fab, Tab, CardItem } from "native-base"
import ProduitsStorage from '../../services/produits'
import ImageStorage from '../../services/images'
import SlackChat from "../../components/slackChat"
import firebase from 'firebase'

export default class PlantesDetail extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var plantComment = firebase.database().ref("plant-comment/");
    plantComment.orderByChild("id").equalTo(1).on("child_added", function(data) {
      console.log("Equal to filter: " + data.val().comment);
   });
   
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
      <Container style={{ backgroundColor: "white" }}>
        <View>
          <ImageBackground style={[StyleSheet.absoluteFill]} source={plant.img} />
          <Header hasTabs style={{ backgroundColor: 'rgba(0,0,0,0.2)', height: deviceHeight / 3.5 }} >
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
        <Content>
          <Tabs style={{ paddingBottom: 80 }}>
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
                  <Button transparent onPress={() => { this._viewDetail(relatedProduct.qrCode) }}><Text>Détails</Text></Button>
                </Right>
              </ListItem>
            </Tab>
            <Tab heading="Slack chat">
              <SlackChat {...this.props} />
            </Tab>
          </Tabs>
          <Fab direction="up" containerStyle={{}} style={{ backgroundColor: "#92C7A9" }} position="bottomRight" onPress={() => alert("La fonction n'a pas été activée.")} >
            <Icon name="edit" type="Entypo" style={{ color: "#fff", fontSize: 26, width: 30 }} />
          </Fab>
        </Content>
      </Container>
    )
  }
}

const headerStyle = StyleSheet.create({
  title: { color: "#FFF", fontSize: 36, fontWeight: '300' },
  icon: { color: "#fff", fontSize: 30 }
})