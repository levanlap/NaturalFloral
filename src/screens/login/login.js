import React, { Component } from "react"
import { Container, Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  View
} from "native-base"
import { Image, StyleSheet } from 'react-native'
import firebase from 'firebase'
import styleLogin from "./styles"


class Login extends Component {
  state = { email: '', password: '', error: '', loading: false }
  onLoginPress() {
    this.setState({ error: '', loading: true })

    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => { this.setState({ error: '', loading: false }) })
      .catch(() => {
        //Login was not successful, let's create a new account
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => { this.setState({ error: '', loading: false }) })
          .catch(() => {
            this.setState({ error: 'Authentication failed.', loading: false })
          })
      })
  }
  _onBack() {
    this.props.navigation.navigate('PlantesList')
  }
  render() {
    return (
      <Container style={styleLogin.container}>
        <Header style={{ backgroundColor: "#92C7A9", paddingTop: 25 }} >
          <Left style={{ flex: 0.2 }}>
            <Button transparent onPress={() => this._onBack()}>
              <Icon name='arrow-back' style={{ color: "#fff", fontSize: 30 }} />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "700" }}>Se connecter</Text>
          </Body>
          <Right style={{ flex: 0.2 }} />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel style={styleLogin.input}>
              <Label style={styleLogin.label}>Username</Label>
              <Input value={this.state.email} onChangeText={email => this.setState({ email })} />
            </Item>
            <Item floatingLabel style={styleLogin.input}>
              <Label style={styleLogin.label}>Password</Label>
              <Input secureTextEntry value={this.state.password} onChangeText={password => this.setState({ password })} />
            </Item>
          </Form>
          <Button block style={{ backgroundColor: "#92C6A9", alignSelf: "center" }} onPress={this.onLoginPress.bind(this)}>
            <Text>Se connecter</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default Login
