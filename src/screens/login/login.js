import React, { Component } from "react";
import {
  Container,
  Header,
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
} from "native-base";
import {
  Image
} from 'react-native'
import styleLogin from "./styles";
import firebase from 'firebase';

class Login extends Component {
  state = { email: '', password: '', error: '', loading: false };
  onLoginPress() {
    this.setState({ error: '', loading: true });

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => { this.setState({ error: '', loading: false }); })
        .catch(() => {
            //Login was not successful, let's create a new account
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => { this.setState({ error: '', loading: false }); })
                .catch(() => {
                    this.setState({ error: 'Authentication failed.', loading: false });
                });
        });
}

  render() {
    return (
      <Container style={styleLogin.container}>


        <View style={styleLogin.viewLogo}>
          <Image
            style={styleLogin.logo}
            source={require('../../../assets/logo-natural-floral.png')}
          /></View>
        <Content>
          <Form>
            <Item floatingLabel style={styleLogin.input}>
              <Label style={styleLogin.label}>Username</Label>
              <Input value={this.state.email}
                        onChangeText={email => this.setState({ email })}/>
            </Item>
            <Item floatingLabel style={styleLogin.input}>
              <Label style={styleLogin.label}>Password</Label>
              <Input secureTextEntry value={this.state.password}
                        onChangeText={password => this.setState({ password })}/>
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.onLoginPress.bind(this)}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
