import React, { Component } from "react"
import { StyleSheet } from 'react-native'
import { Container, Content, Button, Input, Body, Form, Text, ListItem, CheckBox } from "native-base"
import TitleHeader from "../../components/TitleHeader"

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pseudo: false,
      naturopathe: false,
      conditions: false
    }
  }
  toggleSwitch(checkbox) {
    if (checkbox == 'pseudo') {
      this.setState({
        pseudo: !this.state.pseudo
      })
    }
    else if (checkbox == 'naturopathe') {
      this.setState({
        naturopathe: !this.state.naturopathe
      })
    }
    else if (checkbox == 'conditions') {
      this.setState({
        conditions: !this.state.conditions
      })
    }
  }
  render() {
    return (
      <Container style={styleForm.container}>
        <TitleHeader title={"D'INSCRIPTION"} navigation={this.props.navigation} />
        <Content>
          <Form>
            <Input style={styleForm.input} placeholder="Pseudo" />
            <Input style={styleForm.input} placeholder="Prénom" />
            <Input style={styleForm.input} placeholder="Nom" />
            <ListItem style={{ borderBottomWidth: 0 }} button onPress={() => this.toggleSwitch('pseudo')}>
              <CheckBox color="#1AAC8F" checked={this.state.pseudo} onPress={() => this.toggleSwitch('pseudo')} />
              <Body>
                <Text style={{ fontSize: 12 }}>Afficher seulement mon pseudo (vos prénom et nom ne seront pas affichés)</Text>
              </Body>
            </ListItem>
            <ListItem style={{ borderBottomWidth: 0 }} button onPress={() => this.toggleSwitch('naturopathe')}>
              <CheckBox color="#1AAC8F" checked={this.state.naturopathe} onPress={() => this.toggleSwitch('naturopathe')} />
              <Body><Text style={{ fontSize: 12 }}>Je suis naturopathe</Text></Body>
            </ListItem>
            <Input style={styleForm.input} placeholder="Date de naissance" />
            <Input style={styleForm.input} placeholder="Code postal" />
            <Input style={styleForm.input} placeholder="Ville" />
            <Input style={styleForm.input} placeholder="No Tél" />
            <Input style={styleForm.input} placeholder="Mot de passe" secureTextEntry />
            <Input style={styleForm.input} placeholder="Re-confirmer le mot de passe" secureTextEntry />
            <ListItem style={{ borderBottomWidth: 0 }} button onPress={() => this.toggleSwitch('conditions')}>
              <CheckBox color="#1AAC8F" checked={this.state.conditions} onPress={() => this.toggleSwitch('conditions')} />
              <Body>
                <Text style={{ fontSize: 12 }}>J'accepte les termes et conditions</Text>
              </Body>
            </ListItem>
          </Form>
          <Button block style={{ backgroundColor: "#92C6A9", alignSelf: "center" }}>
            <Text>S'inscrire</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
const styleForm = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: { borderBottomColor: 'rgba(0,0,0,0.5)', borderBottomWidth: 0.5, marginBottom: 5, marginTop: 5, marginLeft: 15, marginRight: 15, height: 40, lineHeight: 40 },
})

