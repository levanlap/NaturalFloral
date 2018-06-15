import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text } from 'native-base'
import StatHeader from '../StatHeader'

class Player extends Component {
  _renderPlayerAvatar(player) {
    const source = player.avatar ? { uri: player.avatar } : require('../../resources/images/person-placeholder.png')
    return (
      <Image
        style={styles.playerAvatar}
        source={source}
      />
    )
  }

  _format(number) {
    return Math.round(number)
  }

  render() {
    const { left = {}, right = {} } = this.props

    if (!left.kills || !left.assists || !left.deaths) {
      left.kda = '0/0/0'
      left.gpm = 0
      left.xpm = 0
      left.lhdn = 0
    }
    else {
      left.kda = `${this._format(left.kills)}/${this._format(left.deaths)}/${this._format(left.assists)}`
      left.gpm = this._format(left.gpm)
      left.xpm = this._format(left.xpm)
      left.lhdn = `${this._format(left.last_hits)}/${this._format(left.denies)}`
    }

    if (!right.kills || !right.assists || !right.deaths) {
      right.kda = '0/0/0'
      right.gpm = 0
      right.xpm = 0
      right.lhdn = 0
    }
    else {
      right.kda = `${this._format(right.kills)}/${this._format(right.deaths)}/${this._format(right.assists)}`
      right.gpm = this._format(right.gpm)
      right.xpm = this._format(right.xpm)
      right.lhdn = `${this._format(right.last_hits)}/${this._format(right.denies)}`
    }

    if (!left.player) left.player = {}
    if (!right.player) right.player = {}

    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <View style={styles.playerArea}>
            <View style={styles.playerText}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12, color: '#363636', textAlign: 'right', fontFamily: 'Roboto_medium'
                }}
              >{left.player.name}
              </Text>
              {/* <Text numberOfLines={1} style={{ fontSize: 12, color: '#959595', textAlign: 'right', fontFamily: 'Roboto_medium' }}>{left.player.tagLine}</Text> */}
            </View>
            {this._renderPlayerAvatar(left.player)}
          </View>
          <View style={styles.statArea}>
            <View style={styles.statContainer}>
              <Text style={styles.kdaText}>K/D/A</Text>
              <Text style={styles.statText}>{left.kda}</Text>
            </View>
            <View style={styles.statContainer}>
              <Text style={styles.dText}>LH/DN</Text>
              <Text style={styles.statText}>{left.lhdn}</Text>
            </View>
            <View style={styles.statContainer}>
              <Text style={styles.kText}>GPM</Text>
              <Text style={styles.statText}>{left.gpm}</Text>
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <View style={[styles.playerArea, styles.reversePlayerArea]}>
            {this._renderPlayerAvatar(right.player)}
            <View style={[styles.playerText, styles.reversePlayerText]}>
              <Text style={{ fontSize: 12, color: '#363636', fontFamily: 'Roboto_medium' }}>{right.player.name}</Text>
              {/* <Text style={{ fontSize: 12, color: '#959595', fontFamily: 'Roboto_medium' }}>{right.player.tagLine}</Text> */}
            </View>
          </View>
          <View style={styles.statArea}>
            <View style={styles.statContainer}>
              <Text style={styles.kText}>GPM</Text>
              <Text style={styles.statText}>{right.gpm}</Text>
            </View>
            <View style={styles.statContainer}>
              <Text style={styles.dText}>LH/DN</Text>
              <Text style={styles.statText}>{right.lhdn}</Text>
            </View>
            <View style={styles.statContainer}>
              <Text style={styles.kdaText}>K/D/A</Text>
              <Text style={styles.statText}>{right.kda}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default class PlayerKDA extends Component {
  render() {
    const { left, right } = this.props
    if (!left || !right) {
      return <View />
    }

    const players = []

    for (let i = 0; i < 5; i++) {
      const leftPlayer = left.kda[i]
      const rightPlayer = right.kda[i]

      if (leftPlayer) {
        leftPlayer.player = left.players.map(({ player }) => player).find((player) => player && (player.account_id === leftPlayer.account_id))
      }

      if (rightPlayer) {
        rightPlayer.player = right.players.map(({ player }) => player).find((player) => player && (player.account_id === rightPlayer.account_id))
      }
      players.push({ left: leftPlayer, right: rightPlayer })
    }

    return (
      <View>
        <StatHeader title={this.props.title} />
        <View>
          {players.map(({ left, right }, index) => (
            <View key={index}>
              <Player left={left} right={right} />
              {index != 0 &&
                <View style={styles.separator} />
              }
            </View>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  left: {
    flex: 0.5,
    paddingRight: 6
  },
  right: {
    flex: 0.5,
    paddingLeft: 6
  },
  playerArea: {
    marginTop: 10,
    paddingRight: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  playerText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
    marginTop: 4
  },
  playerAvatar: {
    height: 36,
    width: 36,
    borderRadius: 18
  },
  statArea: {
    marginTop: 8,
    marginBottom: 8,
    paddingRight: 8,
    paddingLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  statContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  kText: {
    color: '#096CAA',
    fontSize: 14,
    fontFamily: 'Roboto_medium'
  },
  aText: {
    color: '#388E3C',
    fontSize: 14,
    fontFamily: 'Roboto_medium'
  },
  dText: {
    color: '#EAB936',
    fontSize: 14,
    fontFamily: 'Roboto_medium'
  },
  kdaText: {
    color: '#F53939',
    fontSize: 14,
    fontFamily: 'Roboto_medium'
  },
  statText: {
    fontSize: 14,
    fontFamily: 'Roboto_medium',
    color: '#000000'
  },
  reversePlayerArea: {
    paddingLeft: 8,
    justifyContent: 'flex-start'
  },
  reversePlayerText: {
    paddingLeft: 8
  },
  separator: {
    backgroundColor: '#E8E7E7',
    height: 1,
    marginLeft: 8,
    marginRight: 8
  }
})
