import React, { Component } from "react"
import { StyleSheet } from 'react-native'
import { Container, Content, Button, Body, Text, Header, Icon, Left, Right, Segment } from "native-base"
import Register from "./register"
import Login from "./login"

export default class CheckIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seg: 2
    };
  }
  _onBack() {
    this.props.navigation.navigate('PlantesList')
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header hasSegment style={{ backgroundColor: "#92C7A9" }} >
          <Left style={{ flex: 0.2 }}>
            <Button transparent onPress={() => this._onBack()}>
              <Icon name='arrow-back' style={{ color: "#fff", fontSize: 30 }} />
            </Button>
          </Left>
          <Body>
            <Segment style={{ backgroundColor: "#92C7A9"}} >
              <Button first
              style={{ backgroundColor: this.state.seg === 1 ? "#fff" : undefined, borderColor: "#fff", }}
              active={this.state.seg === 1 ? true : false} onPress={() => this.setState({ seg: 1 })} >
                <Text style={{ color: this.state.seg === 1 ? "#92C7A9" : "#FFF" }}>Se connecter</Text>
              </Button>
              <Button last
              style={{ backgroundColor: this.state.seg === 2 ? "#fff" : undefined, borderColor: "#fff", }}
              active={this.state.seg === 2 ? true : false} onPress={() => this.setState({ seg: 2 })}>
                <Text style={{ color: this.state.seg === 2 ? "#92C7A9" : "#FFF" }}>S'inscrire</Text>
              </Button>
            </Segment>
          </Body>
          <Right/>
        </Header>

        <Content padder>
          {this.state.seg === 1 && <Login />}
          {this.state.seg === 2 && <Register />}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

