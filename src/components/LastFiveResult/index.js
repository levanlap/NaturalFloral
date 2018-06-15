import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'native-base'
import StatHeader from '../StatHeader'

const styles = StyleSheet.create({
  circle: {
    width: 24,
    height: 24,
    borderRadius: 24,
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  team: {
    flex: 0.5,
    flexDirection: 'row',
    margin: 8
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold'
  },
  win: {
    backgroundColor: '#388E3C'
  },
  lose: {
    backgroundColor: '#F53939'
  }
})

class Win extends Component {
  render() {
    return (
      <View style={[styles.circle, styles.win]}>
        <Text style={styles.text}>{this.props.custom || 'W'}</Text>
      </View>
    )
  }
}

class Lose extends Component {
  render() {
    return (
      <View style={[styles.circle, styles.lose]}>
        <Text style={styles.text}>{this.props.custom || 'L'}</Text>
      </View>
    )
  }
}

export default class LastFiveResult extends Component {
  render() {
    return (
      <View >
        <StatHeader title={this.props.title} />
        <View style={{
          height: 42,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF'
        }}
        >
          <View style={styles.team}>
            {
              this.props.left.map((result, index) => {
                const key = `left-${index}`
                return result ? (<Win custom={this.props.customWin} key={key} />) : (<Lose custom={this.props.customLose} key={key} />)
              })
            }
          </View>
          <View style={styles.team}>
            {
              this.props.right.map((result, index) => {
                const key = `right-${index}`
                return result ? (<Win custom={this.props.customWin} key={key} />) : (<Lose custom={this.props.customLose} key={key} />)
              })
            }
          </View>
        </View>
      </View>
    )
  }
}
