import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text } from 'native-base'
import ImageStorage from '../../services/images'
import StatHeader from '../StatHeader'

class HeroItem extends Component {
  _renderPlayerName(player) {
    return (
      <View style={styles.playerText}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 12, color: '#363636', textAlign: 'right', fontFamily: 'Roboto_medium'
          }}
        >{player.name}
        </Text>
        {/* <Text numberOfLines={1} style={{ fontSize: 12, color: '#959595', textAlign: 'right', fontFamily: 'Roboto_medium' }}>{player.tagLine}</Text> */}
      </View>
    )
  }

  _renderPlayerAvatar(player) {
    return (
      <Image
        style={styles.playerAvatar}
        source={require('../../resources/images/person-placeholder.png')}
      />
    )
  }

  _renderLeftPlayer(player) {
    return (
      <View style={styles.playerArea}>
        {this._renderPlayerName(player)}
        {this._renderPlayerAvatar(player)}
      </View>
    )
  }

  _renderRightPlayer(player) {
    return (
      <View style={[styles.playerArea, styles.reversePlayerArea]}>
        {this._renderPlayerAvatar(player)}
        {this._renderPlayerName(player)}
      </View>
    )
  }

  _renderHeroes(heroes, color, extraStyle = {}) {
    // Maintain the heroes length
    if (heroes.length > 3) {
      heroes = heroes.splice(0, 3)
    }

    return (
      <View style={[styles.heroesArea, extraStyle]}>
        {heroes.map((hero, index) => (
          <View style={styles.hero} key={hero.id}>
            <Image
              style={styles.heroAvatar}
              source={ImageStorage.getHeroImage(hero.id)}
            />
            {hero.score > 0 && hero.base > 0 &&
            <View style={styles.stat}>
              <Text style={[styles.heroScoreText, { color }]}>{hero.score}</Text>
              <Text style={styles.heroBaseText}>/{hero.base}</Text>
            </View>
            }
          </View>
        ))}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          {this._renderLeftPlayer(this.props.left.player)}
          {this._renderHeroes(this.props.left.heroes, '#388E3C', { justifyContent: 'flex-end' })}
        </View>
        <View style={styles.right}>
          {this._renderRightPlayer(this.props.right.player)}
          {this._renderHeroes(this.props.right.heroes, '#F53939')}
        </View>
      </View>
    )
  }
}

export default class HeroPlayerMostThings extends Component {
  render() {
    return (
      <View >
        <StatHeader title={this.props.title} />
        {this.props.players &&
          <View style={{
            backgroundColor: '#FFFFFF'
          }}
          >
            {
              this.props.players.map(({ left, right }, index) => (
                <View key={index}>
                  <HeroItem left={left} right={right} />
                  {index > 0 && <View style={styles.separator} />}
                </View>
              ))
            }
          </View>
        }
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
    paddingRight: 8,
    paddingLeft: 8,
    marginTop: 4
  },
  playerAvatar: {
    height: 36,
    width: 36,
    borderRadius: 18
  },
  heroAvatar: {
    width: 44,
    height: 24
  },
  heroesArea: {
    marginTop: 8,
    marginBottom: 8,
    flex: 1,
    height: 36,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  hero: {
    margin: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stat: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  heroScoreText: {
    fontSize: 10,
    fontFamily: 'Roboto_medium',
    color: '#388E3C'
  },
  heroBaseText: {
    fontSize: 10,
    fontFamily: 'Roboto_medium',
    color: '#515151'
  },
  reversePlayerArea: {
    paddingLeft: 8,
    justifyContent: 'flex-start'
  },
  reversePlayerText: {
    paddingLeft: 8
  },
  reverseHeroScoreText: {
    color: '#F53939'
  },
  separator: {
    backgroundColor: '#E8E7E7',
    height: 1,
    marginLeft: 8,
    marginRight: 8
  }
})
