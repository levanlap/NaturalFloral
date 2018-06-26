import React, { Component } from "react"
import { View, Image, ImageBackground } from 'react-native'
import { Container, Text, H1 } from "native-base"
import TitleHeader from "../../components/titleHeader"

const laboratoiles = require("../../../assets/laboratoiles.png")
const bandeau = require("../../../assets/bandeau2.jpg")
const posts = {
  title: "Scientia Natura",
  intro: "",
  content: "64 ZI EYGRETEAU \n33230 COUTRAS \nFRANCE \n+33 (0)5 57 49 75 82 \n+33 (0)9 67 89 75 82 \nContact commercial \nSecteur Nord-Est : +33 (0)7 82 55 79 77 \nSecteur Sud-Est : +33 (0)6 95 47 76 37 \nSecteur Nord-Ouest : +33 (0)7 69 41 55 15 \nSecteur Sud-Ouest : +33 (0)6 52 80 60 28 \ninfo@flora-natura.com \n"
}
export default class Progress extends Component {

  render() {
    return (
      <Container>
        <TitleHeader title={this.props.titleHeader} navigation={this.props.navigation} />
        <ImageBackground source={bandeau} style={{ flex: 1, width: null, height: null, alignItems: 'center' }}>
          <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', margin: 10, padding: 10 }}>
            <Image source={laboratoiles} style={{ marginBottom: 10, alignSelf: 'center' }} />
            <H1 style={{ textAlign: 'center' }}>{posts.title}</H1>
            <Text style={{ fontWeight: 'bold' }}>{posts.intro}</Text>
            <Text style={{ textAlign: 'center' }}>{posts.content}</Text>
          </View>
        </ImageBackground>
      </Container>
    )
  }
}
