import React, { Component } from 'react'
import { View } from 'react-native'
import StatHeader from '../StatHeader'

export default class LastTenMatches extends Component {
  render() {
    return (
      <View >
        <StatHeader title='Last 10 Matches' />
        <View style={{
          height: 754,
          backgroundColor: '#FFFFFF'
        }}
        />
      </View>
    )
  }
}
