import React, { Component } from "react"
import { View, Image, Modal, ScrollView, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { Container, Content, Header, Button, List, ListItem, Icon, Left, Right, Thumbnail, Body, Tabs, Fab, H1, H3, Tab, Text, Card, CardItem } from "native-base"
import styles from "./styles"
const sankhadeep = require("../../../assets/product-thumbile/1.png")
const supriya = require("../../../assets/product-thumbile/2.png")
const himanshu = require("../../../assets/product-thumbile/2.png")
const shweta = require("../../../assets/plant/betulapendularoth.png")
const shruti = require("../../../assets/plant/achilleamillefolium.png")
const shivraj = require("../../../assets/plant/achilleamillefolium.png")
const datas = [
  {
    img: sankhadeep,
    text: "Achillea millefolium",
    note: "Chez les femmes, apaise les crampes . ."
  },
  {
    img: supriya,
    text: "Elaeagnus rhamnoides",
    note: "One needs courage to be happy and smiling all time . . "
  },
  {
    img: shivraj,
    text: "Artemisia vulgarisa",
    note: "Time changes everything . ."
  },
  {
    img: shruti,
    text: "Betula pendula roth",
    note: "The biggest risk is a missed opportunity !!"
  },
  {
    img: himanshu,
    text: "Himanshu",
    note: "Live a life style that matchs your vision"
  },
  {
    img: shweta,
    text: "Shweta",
    note: "Failure is temporary, giving up makes it permanent"
  }
]
const hello = "hello world"

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

  _onBack() {
    this.props.navigation.navigate('PlantesList')
    // if (this.props.stackNavigation) {
    //   this.props.stackNavigation.goBack()
    // }
    // else {
    //   this.props.navigation.goBack()
    // }
  }

  render() {
    const { navigation } = this.props
    const plant = navigation.state.params.item
    const deviceHeight = Dimensions.get("window").height;
    return (
      <Container>
        <View>
          <ImageBackground style={[StyleSheet.absoluteFill]} source={plant.img} />
          <Header style={{ backgroundColor: 'rgba(0,0,0,0.2)', height: deviceHeight / 3.5 }} >
            <Left style={{ flex: 0.2 }}>
              <Button transparent onPress={() => this._onBack(hello)}>
                <Icon style={headerStyle.icon} name='arrow-back' style={{ color: '#FFFFFF' }} />
              </Button>
            </Left>
            <Body>
              <Text style={headerStyle.title}>{_.startCase(plant.name)} </Text>
              {plant.scientific.trim() == ""}
              <Text style={[headerStyle.title, { fontSize: 16, fontStyle: 'italic' }]}>{plant.scientific}</Text>
            </Body>
            <Right style={{ flex: 0.2 }} />
          </Header>
        </View>


  {
    code: ['yarrow', 'achillea millefolium'],
    img: require("../../../assets/herb/yarrow.jpg"),
    name: "Yarrows",
    scientific: "Achillea",
    rank: "Genus",
    isStar: true,
    intro: "Achillea is a group of flowering plants in the family Asteraceae described as a genus by Linnaeus in 1753. The genus was named after the Greek mythological character Achilles."
  },

        <Content style={{ backgroundColor: "white" }}>
          <Tabs>
            <Tab heading="Détail">
              <CardItem header>
                <Text>NativeBase</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{plant.intro}</Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text>GeekyAnts</Text>
              </CardItem>
            </Tab>
            <Tab heading="Produits connexes">
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                <ScrollView>
                  <Card >
                    <CardItem header>
                      <H3 style={[{ color: '#85cfcd', marginTop: 10 }]}>Achillée millefeuille Bio - Plante entière</H3>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        style={{
                          resizeMode: "cover",
                          width: null,
                          height: 550,
                          flex: 1
                        }}
                        source={require('../../../assets/products/achilleemillefeuillebioplanteentiere.png')}
                      />
                    </CardItem>

                    <CardItem>
                      <Body>
                        <Text>Ingrédients</Text>
                        <Text note>Extrait de plante entière d’achillée millefeuile Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.</Text>
                        <Text note>L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune.</Text>
                      </Body>
                    </CardItem>
                    <CardItem>
                      <Body>

                        <Text>Composition</Text>
                        <Text note> Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)</Text>
                      </Body>
                    </CardItem>
                    <CardItem>
                      <Body>

                        <H3 style={[styles.mb10, { color: "#85cdb4" }]}>
                          CARTON : 12 UNITÉS.
              </H3>
                      </Body>
                    </CardItem>
                    <CardItem footer>
                      <Left />
                      <Body />
                      <Right>
                        <Button block light onPress={() => {
                          this.setModalVisible(!this.state.modalVisible)
                        }}>
                          <Text>Close</Text>
                        </Button>
                      </Right>
                    </CardItem>
                  </Card>
                </ScrollView>



              </Modal>


              <List
                dataArray={datas}
                renderRow={data =>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square size={55} source={data.img} />
                    </Left>
                    <Body>
                      <Text style={[{ color: '#85cfcd' }]}>
                        {data.text}
                      </Text>
                      <Text numberOfLines={1} note>
                        {data.note}
                      </Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text onPress={() => {
                          this.setModalVisible(true)
                        }}>View</Text>
                      </Button>
                    </Right>
                  </ListItem>}
              />
              {/* <List>
          <ListItem avatar>
              <Body>
                <Text>Ingrédients</Text>
                <Text note>Extrait de plante entière d’achillée millefeuile Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.</Text>
                <Text note>L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune.</Text>
              </Body>
              
            </ListItem>
            <ListItem avatar>
              <Body>
                <Text>Composition</Text>
                <Text note> Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)</Text>
              </Body>
              
            </ListItem>
            <ListItem avatar>
              <Body>
              <H3 style={[styles.mb10,{ color: "#85cdb4"}]}>
              CARTON : 12 UNITÉS.
              </H3>
              </Body>
              
            </ListItem>
            </List> */}

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
