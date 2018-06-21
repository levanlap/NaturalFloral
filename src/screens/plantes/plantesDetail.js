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

  _viewDetail = (item) => {
    this.props.navigation.navigate('ProductsDetail', { item })
  }
  _onBack() {
    this.props.navigation.navigate('PlantesList')
  }

  render() {
    const { navigation } = this.props
    const plant = navigation.state.params.item
    const deviceHeight = Dimensions.get("window").height
    let relatedProduct  = productsData.find((item) => item.code === plant.product)
    console.log(relatedProduct)
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
                </Body>
              </CardItem>
            </Tab>
            <Tab heading="Produits connexes">
            <ListItem thumbnail>
                    <Left>
                      <Thumbnail square size={55} source={relatedProduct.img} />
                    </Left>
                    <Body>
                      <Text style={[{ color: '#85cfcd' }]}>
                        {relatedProduct.name}
                      </Text>
                      <Text numberOfLines={1} note>
                        {relatedProduct.ingredients}
                      </Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text onPress={() => {
                          this._viewDetail(relatedProduct.code)
                        }}>Détails</Text>
                      </Button>
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



const productsData = [
  {
    code: 3760265300112,
    img: require("../../../assets/products/3760265300112.jpg"),
    name: "Achillée millefeuille Bio",
    intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion",
    ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.",
    composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)",
    pack: "20 ampoules buvables de 15 ml",
    completeBox: "300 ml",
    detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune."
  },
  { code: 3760265300341, img: require("../../../assets/products/3760265300341.jpg"), name: "Aloe vera - Sève", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300013, img: require("../../../assets/products/3760265300013.jpg"), name: "Aloe vera", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300310, img: require("../../../assets/products/3760265300310.jpg"), name: "Jus d’argousier", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300136, img: require("../../../assets/products/3760265300136.jpg"), name: "Artichaut", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300129, img: require("../../../assets/products/3760265300129.jpg"), name: "Armoise", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300030, img: require("../../../assets/products/3760265300030.jpg"), name: "Aubier de tilleul", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300303, img: require("../../../assets/products/3760265300303.jpg"), name: "Sève de Bouleau", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300280, img: require("../../../assets/products/3760265300280.jpg"), name: "Bruyère", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300037, img: require("../../../assets/products/3760265300037.jpg"), name: "Cassis", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300044, img: require("../../../assets/products/3760265300044.jpg"), name: "Chardon Marie", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300051, img: require("../../../assets/products/3760265300051.jpg"), name: "Cranberry - Cannberge", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },

  { code: 3760265300068, img: require("../../../assets/products/3760265300068.jpg"), name: "Desmodium", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300297, img: require("../../../assets/products/3760265300297.jpg"), name: "Echinacée", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300358, img: require("../../../assets/products/3760265300358.jpg"), name: "Fumeterre", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300075, img: require("../../../assets/products/3760265300075.jpg"), name: "Ginkgo biloba", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300365, img: require("../../../assets/products/3760265300365.jpg"), name: "Harpagophyton", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300143, img: require("../../../assets/products/3760265300143.jpg"), name: "Lotier corniculé", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300150, img: require("../../../assets/products/3760265300150.jpg"), name: "Marron d’Inde", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300167, img: require("../../../assets/products/3760265300167.jpg"), name: "Mauve", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300174, img: require("../../../assets/products/3760265300174.jpg"), name: "Mélisse", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300181, img: require("../../../assets/products/3760265300181.jpg"), name: "Menthe nanah", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300198, img: require("../../../assets/products/3760265300198.jpg"), name: "Menthe poivrée", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300204, img: require("../../../assets/products/3760265300204.jpg"), name: "Millepertuis", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300082, img: require("../../../assets/products/3760265300082.jpg"), name: "Myrtille", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },

  { code: 3760265300099, img: require("../../../assets/products/3760265300099.jpg"), name: "Olivier", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300211, img: require("../../../assets/products/3760265300211.jpg"), name: "Ortie", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300228, img: require("../../../assets/products/3760265300228.jpg"), name: "Pavot de californie", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300259, img: require("../../../assets/products/3760265300259.jpg"), name: "Pissenlit", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300372, img: require("../../../assets/products/3760265300372.jpg"), name: "Prêle des champs", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300327, img: require("../../../assets/products/3760265300327.jpg"), name: "Radis noir", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300389, img: require("../../../assets/products/3760265300389.jpg"), name: "Reine des près", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300266, img: require("../../../assets/products/3760265300266.jpg"), name: "Romarin", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300235, img: require("../../../assets/products/3760265300235.jpg"), name: "Sariette", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300273, img: require("../../../assets/products/3760265300273.jpg"), name: "Serpolet", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300242, img: require("../../../assets/products/3760265300242.jpg"), name: "Tanaisie", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  { code: 3760265300334, img: require("../../../assets/products/3760265300334.jpg"), name: "Valériane", intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion", ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.", composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)", pack: "20 ampoules buvables de 15 ml", completeBox: "300 ml", detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune." },
  {
    code: 3760265300105,
    img: require("../../../assets/products/3760265300105.jpg"),
    name: "Vigne rouge",
    intro: "Chez les femmes, apaise les crampes abdominales périodiques - Aide à favoriser la digestion",
    ingredients: "Extrait de plante entière d'achillée millefeuille Bio* 100%. Convient aux Vegans. *100% des ingrédients agricoles sont issus de l’Agriculture Biologique.",
    composition: "Achillée millefeuille Bio : 2000mg** par ampoule de 15ml ** équivalent en plante sèches (EPS)",
    pack: "20 ampoules buvables de 15 ml",
    completeBox: "300 ml",
    detail: "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune."
  }
]