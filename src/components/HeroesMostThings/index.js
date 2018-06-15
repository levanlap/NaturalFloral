import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text } from 'native-base'
import ImageStorage from '../../services/images'
import StatHeader from '../StatHeader'

class Hero extends Component {
  _renderHero(hero, borderColor, index) {
    if (!hero) return
    return (
      <View key={index} style={{ height: 60 }}>
        <Image
          style={[styles.heroAvatar, { borderColor }]}
          source={ImageStorage.getHeroImage(hero._id)}
        />

        {!!hero.won &&
          <View style={{
            flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'
          }}
          >
            <Text style={[styles.scoreText, { color: borderColor }]}>{hero.won}</Text>
            <Text style={[styles.scoreText, { color: '#000000' }]}>/{hero.total}</Text>
          </View>
        }
        {!!hero.averageMinutes &&
          <View style={{
            flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'
          }}
          >
            <Text style={[styles.scoreText, { color: borderColor }]}>{hero.averageMinutes}</Text>
          </View>
        }
      </View>
    )
  }

  render() {
    const { left, right } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.side}>
          {
            left.map((hero, index) => this._renderHero(hero, '#388E3C', index))
          }
        </View>
        <View style={[styles.side, styles.reverseSide]}>
          {
            right.map((hero, index) => this._renderHero(hero, '#F53939', index))
          }
        </View>
      </View>
    )
  }
}

export default class HeroesMostThings extends Component {
  render() {
    return (
      <View >
        <StatHeader title={this.props.title} />
        {
          <View style={{ flexDirection: 'row', margin: 4, backgroundColor: '#FFFFFF' }} >
            <Hero left={this.props.left} right={this.props.right} />
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
  side: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    padding: 4
  },
  statArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 2,
    paddingRight: 2
  },
  heroName: {
    fontSize: 12,
    lineHeight: 12,
    color: '#959595',
    textAlign: 'right',
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold'
  },
  scoreText: {
    fontFamily: 'Roboto_medium',
    fontSize: 12,
    lineHeight: 12
  },
  heroAvatar: {
    margin: 4,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#388E3C'
  },
  reverseSide: {
    justifyContent: 'flex-start'
  },
  reverseHeroName: {
    textAlign: 'left'
  },
  reverseHeroAvatar: {
    borderColor: '#F53939'
  }
})
