import React, { Component } from "react"
import { Image, StyleSheet } from "react-native"
import { View, Text, List, ListItem, Icon } from "native-base"
import firebase from 'firebase'

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((currentUser) => {
      this.setState({
        currentUser,
      });
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    const currentUser = this.state.currentUser;
    const datas = [
      {
        name: "Liste des plantes",
        route: "PlantesList",
        icon: "envira",
        iconType: "FontAwesome",
        statusColor: "#1FB5AD"
      },
      {
        name: "Liste des produits",
        route: "ProductsList",
        icon: "ios-medical",
        iconType: "Ionicons",
        statusColor: "#1FB5AD"
      },
      {
        name: "Club Flora",
        route: "Clubflora",
        icon: "forum",
        iconType: "MaterialIcons",
        statusColor: "#AAB2BD"
      },
      {
        name: "Trouver un produit autour de moi",
        route: "Productnearme",
        icon: "pin-drop",
        iconType: "MaterialIcons",
        statusColor: "#AAB2BD"
      },
      {
        name: "Magasin Bio",
        route: "Shops",
        icon: "store",
        iconType: "MaterialIcons",
        statusColor: "#AAB2BD"
      },
      {
        name: "Nature et progrès",
        route: "Progress",
        icon: "ios-paper-outline",
        iconType: "Ionicons",
        statusColor: "#1FB5AD"
      },
      {
        name: "Aide et Assistance",
        route: "Help",
        icon: "assistant",
        iconType: "MaterialIcons",
        statusColor: "#AAB2BD"
      },
      {
        name: "A propos",
        route: "About",
        icon: "info-outline",
        iconType: "MaterialIcons",
        statusColor: "#1FB5AD"
      }
    ]
    datas.map((item) => {
      if (this.props.activeItemKey === item.route) {
        item.statusColor = this.props.activeTintColor
      }
    })
    return (
      <View style={{ flex: 1, flexDirection: 'column', paddingTop: 100, backgroundColor: '#28282e' }} >
        <Image source={require("../../../assets/logo.jpg")} style={styles.drawerCover} />
        {currentUser ?
          <ListItem noBorder button style={styles.listItem}>
            <Icon style={{ color: "#1FB5AD", fontSize: 20 }} name="user-circle" type="FontAwesome" />
            <Text style={[styles.text, { color: "#1FB5AD" }]}>{currentUser.email}</Text>
          </ListItem> : null}

        <List dataArray={datas} renderRow={data =>
          <ListItem noBorder button onPress={() => this.props.navigation.navigate(data.route)} style={styles.listItem}>
            <Icon active name={data.icon} style={{ color: data.statusColor, fontSize: 20 }} type={data.iconType} />
            <Text style={[styles.text, { color: data.statusColor }]}>{data.name}</Text>
          </ListItem>
        }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  drawerCover: {
    alignSelf: "center",
    //height: deviceHeight / 4,
    //width: null,
    height: 120,
    width: 120,
    position: "relative",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5
  },
  listItem: { backgroundColor: "#28282e", marginLeft: 0, paddingLeft: 10, borderBottomColor: 'rgba(255,255,255,0.2)', borderBottomWidth: 0.5 },
  text: {
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 5
  }
})


