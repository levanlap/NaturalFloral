import React, { Component } from "react"
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Icon, Text } from "native-base"
import GridView from 'react-native-super-grid'
import TitleHeader from "../../components/TitleHeader"
import ImageStorage from '../../services/images'
import ProduitsStorage from '../../services/produits.json'

const herb = [
  {
    name : "Achillée millefeuille",
    scientifique : "Achillea millefolium",
    famille : "Asteraceae",
    ordre : "Asterales",
    classification : "Achillée",
    rang : "Espèce",
    sous_famille : "Asteroideae",
    wikipedia : "L'Achillée millefeuille ou la Millefeuille est une espèce de plante herbacée vivace de la famille des Astéracées.",
    img : require('../../../assets/herb/yarrow.jpg'),
    product : 3760265300112,
    isStar: true, 
    intro : "L’achillée millefeuille est une plante vivace à racine rampante. Les tiges sont pubescentes, laineuses et blanchâtres. Les feuilles sont très découpées et de couleur vert foncé. La floraison a lieu entre juin et septembre : les fleurs regroupées en capitules sont de couleur blanche, rose ou pourpre et portent en leur cœur des fleurons blanc-jaune à jaune."
  },
  {
    name : "Aloe vera",
    scientifique : "Aloe vera",
    famille : "Aloeaceae",
    ordre : "Liliales",
    classification : "Aloès",
    rang : "",
    sous_famille : "",
    wikipedia : "L'Aloe vera ou aloès des Barbades est une espèce d'aloès d'origine incertaine mais cultivée de longue date en région méditerranéenne, Afrique du Nord, aux îles Canaries et au Cap-Vert.",
    img : require('../../../assets/herb/aloe-vera.jpg'),
    product : 3760265300341,
    isStar: true, 
    intro : "L’aloès est originaire de l’est et du sud de l’Afrique mais aujourd’hui elle est cultivée partout dans le monde."
  },
  {
    name : "Argousier",
    scientifique : "Hippophae rhamnoides",
    famille : "Elaeagnaceae",
    ordre : "Proteales",
    classification : "Hippophae",
    rang : "Espèce",
    sous_famille : "",
    wikipedia : "L'Argousier est une espèce d'arbrisseau dioïque, épineux, originaire des zones tempérées d'Europe et d'Asie. Il est bien représenté également dans les régions subtropicales d'Asie, en altitude.",
    img : require('../../../assets/herb/sea-buckthorn.jpg'),
    product : 3760265300310,
    isStar: true, 
    intro : "L’argousier est un arbrisseau épineux pouvant atteindre 2 à 5 m de hauteur. Ses feuilles sont vert foncé et argentées sur leur face inférieure. Elles sont fines et alternes. Les fruits des akènes sont de couleur jaune à jaune orangé et possèdent un noyau dur contenant une graine. De ces fruits on obtient le jus et des extraits huileux."
  },
  {
    name : "Artichaut",
    scientifique : "Cynara cardunculus var. scolymus",
    famille : "Asteraceae",
    ordre : "Asterales",
    classification : "Cynara",
    rang : "PLANTE",
    sous_famille : "PLANTE",
    wikipedia : "L’artichaut est une plante dicotylédone de la famille des Astéracées appartenant au genre Cynara.",
    img : require('../../../assets/herb/artichoke.jpg'),
    product : 3760265300136,
    isStar: true, 
    intro : "Cultivée dans l’ouest de la France, c’est une plante bisannuelle, sub-ligneuse pouvant atteindre 1.50 m de hauteur. Ses feuilles sont très découpées leur revers est blanchâtre à nervures saillantes. Les fleurs bleues, tubuleuses sont regroupées en gros capitule apical."
  },
  {
    name : "Armoise commune",
    scientifique : "Artemisia vulgaris",
    famille : "Asteraceae",
    ordre : "Asterales",
    classification : "Armoise",
    rang : "Espèce",
    sous_famille : "PLANTE",
    wikipedia : "L’Armoise commune ou Armoise citronnelle est une espèce de plantes herbacées vivaces de la famille des Astéracées ou Composées.",
    img : require('../../../assets/herb/mugwort.jpg'),
    product : 3760265300129,
    intro : "Plante herbacée de 50 cm à 1.5 m de haut. Le dessus de ses feuilles alternes, bipennées est glabre. De couleur vert foncé à rouge sombre elles sont serrées et abondantes sur la tige. Les fleurs sont des petits capitules sessiles, brun rougeâtre, jaunâtre ou pourpré disposés en panicules. L’armoise fleurit de mai à septembre."
  },
  {
    name : "Tilleul à petites feuilles",
    scientifique : "Tilia cordata",
    famille : "Tiliaceae",
    ordre : "Tiliaceae",
    classification : "Tilleul",
    rang : "Espèce",
    sous_famille : "PLANTE",
    wikipedia : "Le Tilleul à petites feuilles est un arbre du genre Tilia et de la famille des Tiliaceae, ou des Malvaceae selon la classification phylogénétique.",
    img : require('../../../assets/herb/tilia-cordata.jpg'),
    product : 3760265300030,
    intro : "Le tilleul est un très grand arbre à l’écorce lisse dans sa prime jeunesse et qui commence à se craqueler (apparition de l’aubier) chez les spécimens de plus d’une vingtaine d’années. Ses feuilles sont petites et en forme de cœur à leur base. Au mois de juin les fleurs très odorantes s’épanouissent. L’aubier se récolte au mois de juin lorsque la sève est montante."
  },
  {
    name : "Bouleau verruqueux",
    scientifique : "Betula pendula",
    famille : "Betulaceae",
    ordre : "Fagales",
    classification : "Bouleau",
    rang : "PLANTE",
    sous_famille : "PLANTE",
    wikipedia : "Le bouleau verruqueux ou bouleau blanc, ou encore bouleau d'Europe, mais aussi bouleau blanc d'Europe est un arbre pouvant atteindre 25 mètres de hauteur. Originaire d'Europe et d'Asie, c'est un arbre très rustique et qui a besoin de lumière.",
    img : require('../../../assets/herb/sea-buckthorn.jpg'),
    product : 3760265300303,
    intro : "Le bouleau est un grand arbre de 15 à 18 m de hauteur au tronc mince et argenté. Ses feuilles caduques sont de petite taille et de forme triangulaire. Des rameaux flexibles portent les fleurs femelles et à l’automne les fleurs mâles (les chatons). Il pousse dans les tourbières et les zones humides. La sève s’obtient par forage superficiel du tronc."
  }
]

export default class PlantesList extends Component {

  _viewDetail = (item) => {
    this.props.navigation.navigate('PlantesDetail', { item })
  }
  
  render() {
    return (
      <Container style={{ backgroundColor: "#92C7A9" }}>
        <TitleHeader title={this.props.titleHeader} navigation={this.props.navigation} />
        <Content style={{ backgroundColor: "#f1f2f7" }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingBottom: 0 }} >
            <Button style={[styles.boxShadow, styles.widgetButton]} onPress={() => this.props.navigation.navigate("Filter")}>
              <Icon style={styles.widgetIcons} name="filter" type="FontAwesome" />
            </Button>
            <Button style={[styles.boxShadow, styles.widgetButton]} onPress={() => this.props.navigation.navigate("PlantesFavorite")}>
              <Icon style={styles.widgetIcons} name="star" type="FontAwesome" />
            </Button>
            <Button style={[styles.boxShadow, styles.widgetButton]} onPress={() => this.props.navigation.navigate("Comment")}>
              <Icon style={styles.widgetIcons} name="comments" type="FontAwesome" />
            </Button>
            <Button style={[styles.boxShadow, styles.widgetButton]} onPress={() => this.props.navigation.navigate("CheckIn")}>
              <Icon style={styles.widgetIcons} name="user-circle" type="FontAwesome" />
            </Button>
            <Button style={[styles.boxShadow, styles.widgetButton]} onPress={() => this.props.navigation.navigate("Scanner")}>
              <Icon style={styles.widgetIcons} name="barcode-scan" type="MaterialCommunityIcons" />
            </Button>
          </View>
          <GridView
            itemDimension={130}
            items={herb}
            style={styles.gridView}
            renderItem={item => (
              <View style={{ flex: 1 }}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { this._viewDetail(item) }}>
                  <View style={[{ position: 'relative', marginBottom: 5 }, styles.boxShadow]} >
                    {item.isStar && <Image style={{ width: 20, height: 20, position: 'absolute', top: 5, right: 5, zIndex: 999 }} resizeMode="contain" source={require("../../../assets/icon-favorite.png")} />}
                    <Image style={{ borderRadius: 8, height: 130, width: null, flex: 1 }} source={item.img} />
                  </View>
                  <Text numberOfLines={1} style={styles.itemName}>{_.startCase(item.name)}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </Content>
      </Container >
    )
  }
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1
  },
  boxShadow: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    paddingBottom: 5
  },
  widgetButton: { borderColor: "#fff", borderRadius: 5, borderWidth: 0.5, backgroundColor: "#fff" },
  widgetIcons: { color: "#92C7A9", padding: 0 },

  itemName: {
    fontSize: 15,
    lineHeight: 22,
    color: '#00a486',
  }
})

