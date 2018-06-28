import React, { Component } from "react"
import { Platform, StatusBar, StyleSheet, View, ListView, Text, TextInput, ActivityIndicator, Alert } from 'react-native'
import { Container, Header, Button, Content, } from "native-base"
const ProduitsStorage = require('../../services/produits.json')

export default class SearchFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      text: ''
    }
    this.arrayholder = []
  }

  componentDidMount() {
    // return fetch('../../services/produits.json')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(responseJson)

    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.setState({
      isLoading: false,
      dataSource: ds.cloneWithRows(ProduitsStorage),
    }, function () {
      // In this block you can do something with new state.
      this.arrayholder = ProduitsStorage

      console.log(this.state.dataSource)
    })
  }
  _onBack() {
    this.props.navigation.navigate('PlantesList')
  }
  _viewDetail(qrCode) {
    this.props.navigation.navigate('ProductsDetail', { qrCode })
  }
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.nom.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    console.log('newData', newData)
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
    })
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: .5, width: "100%", backgroundColor: "#000", }} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "#92C7A9", paddingTop: Platform.OS === 'ios' ? 44 : StatusBar.currentHeight }} >
          <TextInput
            style={styles.searchBar}
            onChangeText={(text) => this.SearchFilterFunction(text)}
            value={this.state.text}
            underlineColorAndroid='transparent'
            placeholder="Entrez les symptômes, les avantages"
          />
          <Button transparent full onPress={() => this.props.navigation.goBack()} ><Text style={{ color: '#fff', fontWeight: '500' }}>Annuler</Text></Button>
        </Header>
        <Content padder>
          {this.state.isLoading && <ActivityIndicator />}
          {!this.state.isLoading && <ListView
            dataSource={this.state.dataSource}
            renderSeparator={this.ListViewItemSeparator}
            renderRow={(rowData) => <Text style={styles.rowViewContainer} onPress={this._viewDetail.bind(this, rowData.qrCode)} >{rowData.nom}</Text>}
            enableEmptySections={true}
            style={{ marginTop: 10, marginBottom: 10 }}
          />}
        </Content>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rowViewContainer: {
    fontSize: 17,
    padding: 10
  },

  searchBar: {
    backgroundColor: "#FFFFFF",
    borderColor: '#629478',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    flex: 0.9,
    paddingLeft: 5
  },
  innerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  outerContainer: {
    backgroundColor: '#92C7A9',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: Platform.OS === 'ios' ? 44 : StatusBar.currentHeight,
    //height: Platform.OS === 'ios' ? 70 : 70 - StatusBar.currentHeight,
  },
})