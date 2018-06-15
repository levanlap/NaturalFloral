import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import StatHeader from '../StatHeader'

class Team extends Component {
  componentWillMount() {
    const loadImageJob = [
      Image.prefetch(this.props.logo)
    ]
    Promise.all(loadImageJob).catch(() => { })
  }

  render() {
    const hits = []
    for (const i = 0; i < 10; i++) {
      const backgroundColor = this.props.hits[i] === 1 ? this.props.color : '#E8E7E7'
      hits.push(<View key={i} style={[styles.hit, { backgroundColor }]} />)
    }

    return (
      <View style={styles.team}>
        <Image
          resizeMode='contain'
          style={styles.teamLogo}
          source={{ uri: this.props.logo }}
        />
        <View style={styles.hitContainer}>
          {hits}
        </View>
      </View>
    )
  }
}

export default class LastFirstThings extends Component {
  render() {
    const { matches, field, series } = this.props
    let leftId,
      rightId
    leftId = series.radiant_team
    rightId = series.dire_team

    const leftHits = matches.map((match) => {
      if (match[field] === leftId) {
        return 1
      }
      return 0
    })

    const rightHits = matches.map((match) => {
      if (match[field] === rightId) {
        return 1
      }
      return 0
    })

    return (
      <View >
        <StatHeader title={this.props.title} />
        <View style={styles.container}>
          <Team logo={`http://esportsace.com/static/images/dota2/teams/${leftId}.png`} color='#87D37C' hits={leftHits} />
          <Team logo={`http://esportsace.com/static/images/dota2/teams/${rightId}.png`} color='#F53939' hits={rightHits} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  team: {
    flexDirection: 'row',
    marginBottom: 10
  },
  teamLogo: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 20
  },
  hitContainer: {
    flex: 1,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  hit: {
    width: 10,
    height: 10,
    borderRadius: 5
  }
})
