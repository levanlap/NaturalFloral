import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'native-base'
import PropTypes from 'prop-types'

export default class KDAPerGame extends Component {
  static propTypes = {
    title: PropTypes.string,
    players: PropTypes.array.isRequired,
    color: PropTypes.string.isRequired
  }

  render() {
    return (
      <View>
        <View style={[
          styles.row,
          { backgroundColor: this.props.color }
        ]}>
          <Text style={[styles.header, styles.firstCol]}>{this.props.title}</Text>
          <Text style={[styles.header, styles.col]}>K</Text>
          <Text style={[styles.header, styles.col]}>A</Text>
          <Text style={[styles.header, styles.col]}>D</Text>
        </View>
        {
          this.props.players.map(({ name, kill, assist, death }) => {
            return (
              <View
                style={styles.row}
                key={name}
              >
                <Text style={styles.firstCol}>{name}</Text>
                <Text style={styles.col}>{kill}</Text>
                <Text style={styles.col}>{assist}</Text>
                <Text style={styles.col}>{death}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#A7A6AB',
    borderBottomWidth: 0.5
  },
  col: {
    fontFamily: 'Roboto_medium',
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 30,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  header: {
    color: '#FFFFFF'
  },
  firstCol: {
    flex: 0.5
  }
})
