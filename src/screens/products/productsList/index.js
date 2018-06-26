import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Content, Card, CardItem } from "native-base"
import TitleHeader from "../../../components/titleHeader"
import ImageStorage from '../../../services/images'
import ProduitsStorage from '../../../services/produits'
export default class ProductsList extends Component {

  _viewDetail(qrCode) {
    this.props.navigation.navigate('ProductsDetail', { qrCode })
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#f1f2f7" }}>
        <TitleHeader title={this.props.titleHeader} navigation={this.props.navigation} />
        <Content padder>
          {ProduitsStorage.map(({ qrCode, nom, extrait, composition }, index) => {
            return (
              <Card key={index}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { this._viewDetail(qrCode) }}>
                  <CardItem>
                    <Image style={{ width: 120, height: 200, zIndex: 999 }} source={ImageStorage.getProduitsImages(qrCode)} />
                    <View style={{ flex: 1 }}>
                      <View style={styles.flag}>
                        <Text numberOfLines={1} style={{ color: '#fff', fontWeight: '700' }}>{nom}</Text>
                        <Text numberOfLines={1} style={{ color: '#fff', fontSize: 13 }}>{composition}</Text>
                        <View style={styles.flagBottom} />
                      </View>
                      <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: '#7ABC9D' }}>Ingrédients :</Text>
                        <Text style={{ fontSize: 13 }}>{extrait}</Text>
                      </View>
                    </View>
                  </CardItem>
                </TouchableOpacity>
              </Card>
            )
          }
          )}
        </Content>
      </Container >
    )
  }
}


const styles = StyleSheet.create({
  flag: {
    backgroundColor: "#96CCAD",
    height: 60,
    marginRight: 20,
    marginBottom: 10,
    marginLeft: -5,
    paddingLeft: 15,
    paddingRight: 10,
    justifyContent: 'center',
    alignSelf: 'flex-start'
  },
  flagBottom: {
    position: 'absolute',
    right: -15,
    bottom: 0,
    width: 0,
    height: 0,
    borderRightWidth: 15,
    borderRightColor: 'transparent',
    borderTopWidth: 30,
    borderTopColor: '#96CCAD',
    borderBottomWidth: 30,
    borderBottomColor: '#96CCAD'
  }
})

