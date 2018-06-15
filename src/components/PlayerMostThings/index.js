import React, { Component } from 'react'
import { View } from 'react-native'
import StatHeader from '../StatHeader'

export default class PlayerMostThings extends Component {
  render() {
    return (
      <View >
        <StatHeader title={this.props.title} />
        <View style={{
          height: 548,
          backgroundColor: '#FFFFFF'
        }}
        />
      </View>
    )
  }
}
