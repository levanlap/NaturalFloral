import React, { Component } from "react"
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Icon, Text } from "native-base"
import GridView from 'react-native-super-grid'
import TitleHeader from "../../components/TitleHeader"

const items = [
  { name: 'Achillea millefolium', isStar: true, code: require("../../../assets/plant/achilleamillefolium.png") },
  { name: 'Aloe vera barbadensis', isStar: false, code: require("../../../assets/plant/aloeverabarbadensis.png") },
  { name: 'Elaeagnus rhamnoides', isStar: false, code: require("../../../assets/plant/elaeagnusrhamnoides.png") },
  { name: 'Cynara slolymus', isStar: true, code: require("../../../assets/plant/cynaraslolymus.png") },
  { name: 'Artemisia vulgarisa', isStar: true, code: require("../../../assets/plant/artemisiavulgarisa.png") },
  { name: 'Tilia cordata', isStar: false, code: require("../../../assets/plant/tiliacordata.png") },
  { name: 'Betula pendula roth', isStar: false, code: require("../../../assets/plant/betulapendularoth.png") },
  { name: 'Calluna vulgaris', isStar: true, code: require("../../../assets/plant/callunavulgaris.png") },
  { name: 'Ribes nigrum', isStar: false, code: require("../../../assets/plant/ribesnigrum.png") },
  { name: 'Silybum marianum', isStar: false, code: require("../../../assets/plant/silybummarianum.png") },
  { name: 'Vaccinium oxycoccus', isStar: true, code: require("../../../assets/plant/vacciniumoxycoccus.png") },
  { name: 'Desmodium', isStar: true, code: require("../../../assets/plant/desmodium.png") },
  { name: 'Aloe vera barbadensis', isStar: false, code: require("../../../assets/plant/aloeverabarbadensis.png") },
  { name: 'Elaeagnus rhamnoides', isStar: false, code: require("../../../assets/plant/elaeagnusrhamnoides.png") },
  { name: 'Cynara slolymus', isStar: true, code: require("../../../assets/plant/cynaraslolymus.png") },
  { name: 'Artemisia vulgarisa', isStar: true, code: require("../../../assets/plant/artemisiavulgarisa.png") },
  { name: 'Tilia cordata', isStar: false, code: require("../../../assets/plant/tiliacordata.png") },
  { name: 'Betula pendula roth', isStar: false, code: require("../../../assets/plant/betulapendularoth.png") },
  { name: 'Calluna vulgaris', isStar: true, code: require("../../../assets/plant/callunavulgaris.png") },
  { name: 'Ribes nigrum', isStar: false, code: require("../../../assets/plant/ribesnigrum.png") },
  { name: 'Silybum marianum', isStar: false, code: require("../../../assets/plant/silybummarianum.png") },
  { name: 'Vaccinium oxycoccus', isStar: true, code: require("../../../assets/plant/vacciniumoxycoccus.png") },
  { name: 'Desmodium', isStar: true, code: require("../../../assets/plant/desmodium.png") }
]

const herb = [
  {
    code: ['yarrow', 'achillea millefolium'],
    img: require("../../../assets/herb/yarrow.jpg"),
    name: "Yarrows",
    scientific: "Achillea",
    rank: "Genus",
    isStar: true,
    intro: "Achillea is a group of flowering plants in the family Asteraceae described as a genus by Linnaeus in 1753. The genus was named after the Greek mythological character Achilles."
  },
  {
    code: ['Aloe vera', 'achillea millefolium'],
    img: require("../../../assets/herb/aloe-vera.jpg"),
    name: "Aloe vera",
    scientific: "",
    rank: "Species",
    isStar: true,
    intro: "Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula but grows wild in tropical climates around the world and is cultivated for agricultural and medicinal uses."
  },
  {
    code: ['Sea buckthorns', 'Hippophae', 'argousier'],
    img: require("../../../assets/herb/sea-buckthorn.jpg"),
    name: "Sea buckthorns",
    scientific: "Hippophae",
    rank: "Genus",
    intro: "Hippophae is a genus of sea buckthorns, deciduous shrubs in the family Elaeagnaceae. The name sea buckthorn may be hyphenated to avoid confusion with the buckthorns. It is also referred to as sandthorn, sallowthorn, or seaberry."
  },
  {
    code: ['artichoke'],
    img: require("../../../assets/herb/artichoke.jpg"),
    name: "Artichoke",
    scientific: "Cynara scolymus",
    rank: "Variety",
    isStar: true,
    intro: "The globe artichoke is a variety of a species of thistle cultivated as a food. The edible portion of the plant consists of the flower buds before the flowers come into bloom. "
  },
  {
    code: ['mugwort', 'Artemisia vulgaris'],
    img: require("../../../assets/herb/mugwort.jpg"),
    name: "Mugwort",
    scientific: "Artemisia vulgaris",
    rank: "Species",
    intro: "Artemisia vulgaris is one of several species in the genus Artemisia commonly known as mugwort, although Artemisia vulgaris is the species most often called mugwort"
  },
  {
    code: ['tilia cordata'],
    img: require("../../../assets/herb/tilia-cordata.jpg"),
    name: "Tilia cordata",
    scientific: "",
    rank: "Species",
    intro: "Tilia cordata is a species of Tilia native to much of Europe. It is found from Britain through central Fennoscandia, to central Russia, and south to central Portugal, Spain, Italy, Greece, Bulgaria, Romania, Turkey, the Caucasus, and western Asia."
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
            <Button style={[styles.boxShadow, styles.widgetButton]} onPress={() => this.props.navigation.navigate("Liststar")}>
              <Icon style={styles.widgetIcons} name="star" type="FontAwesome" />
            </Button>
            <Button style={[styles.boxShadow, styles.widgetButton]} onPress={() => this.props.navigation.navigate("Comment")}>
              <Icon style={styles.widgetIcons} name="comments" type="FontAwesome" />
            </Button>
            <Button style={[styles.boxShadow, styles.widgetButton]} onPress={() => this.props.navigation.navigate("User")}>
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

