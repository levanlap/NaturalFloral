import React, { Component } from "react"
import { StyleSheet } from 'react-native'
import { Content, Button, Item, Label, Input, Form, Text } from "native-base"
import firebase from 'firebase'

export default class Register extends Component {
  constructor(props) {
    super(props)
  }
  state = { email: '', password: '', error: '', loading: false }
  onLoginPress() {
    this.setState({ error: '', loading: true })
    console.log("Ham login");
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => { console.log(result); this.props.navigation.navigate("PlantesList"); })
      .catch(() => {
        //Login was not successful, let's create a new account
      })
  }
  _onBack() {
    this.props.navigation.navigate('PlantesList')
  }
  render() {
    return (
      <Content>
        <Form>
          <Item floatingLabel style={styleLogin.input}>
            <Label style={styleLogin.label}>Email</Label>
            <Input value={this.state.email} onChangeText={email => this.setState({ email })} />
          </Item>
          <Item floatingLabel style={styleLogin.input}>
            <Label style={styleLogin.label}>Mot de passe</Label>
            <Input secureTextEntry value={this.state.password} onChangeText={password => this.setState({ password })} />
          </Item>
        </Form>
        <Button block style={{ backgroundColor: "#92C6A9", alignSelf: "center" }} onPress={this.onLoginPress.bind(this)}>
          <Text>Se connecter</Text>
        </Button>
      </Content>
    )
  }
}



const styleLogin = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  viewLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    flex: 1,
    width: 200,
    marginTop: 25,
    marginBottom: 25,

  },
  label: {
    color: "#00a486",
  },
  input: {
    width: '90%',
    height: 50,
    paddingLeft: 25,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 12,
    backgroundColor: '#D8D8D8',
  },
  btnLogin: {
    width: '60%',
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#00a486',
    borderRadius: 5,
  },
  txtButton: {
    color: 'white',
    textAlign: 'center',
  }
})

