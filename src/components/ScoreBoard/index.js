import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Animated } from 'react-native'
import { Body, Text } from 'native-base'
import moment from 'moment'

class TeamResult extends Component {
  constructor(props) {
    super(props)
    this.state = { showDefault: true }
  }

  componentWillMount() {
    const loadImageJob = [
      Image.prefetch(this.props.team.logo)
    ]
    Promise.all(loadImageJob).catch(() => { })
  }

  render() {
    const team = this.props.team
    const teamNameStyle = [styles.teamName]
    const logoStyle = [styles.teamLogo, this.props.imageStyle]

    if (this.props.isStat) {
      teamNameStyle.push(styles.statTeamName)
      logoStyle.push(styles.teamLogoDark)
    }

    return (
      <Animated.View style={styles.team}>
        <Animated.Image
          resizeMode='contain'
          style={logoStyle}
          source={{ uri: team.logo }}
          defaultSource={require('../../resources/images/unknown.png')}
        />
        <Text numberOfLines={1} style={teamNameStyle}>{team.name}</Text>
      </Animated.View>
    )
  }
}

export default class ScoreBoard extends Component {
  render() {
    const item = this.props.item
    const isStat = this.props.isStat
    const { left, right, league, series } = item
    const headerTextStyle = [styles.headerText]
    const scoreTextStyle = [styles.scoreText]
    let padding = {}

    if (isStat) {
      headerTextStyle.push(styles.statHeaderText)
      scoreTextStyle.push(styles.statScoreText)
      padding = { paddingLeft: 10, paddingRight: 10 }
    }
    const startTimeDate = moment.unix(item.series.start_time)
    const now = moment()
    const countDown = now.to(startTimeDate)

    return (
      <Animated.View style={[this.props.imageStyle, { flex: 1, overflow: 'hidden' }]}>
        <Animated.View style={isStat ? {} : styles.header}>
          <View style={styles.headerLine}>
            <Text numberOfLines={1} style={[headerTextStyle, { flex: 0.9 }]}> {league.name} </Text>
            <Text style={[headerTextStyle, styles.countDown]} >{countDown}
            </Text>
          </View>
          {isStat && this.props.status && <Text style={styles.status}>{this.props.status}</Text>}
        </Animated.View>
        <Animated.View style={styles.scoreContainer}>
          <TeamResult isStat={isStat} imageStyle={this.props.imageStyle} team={left} />
          <Animated.View style={styles.scoreArea}>
            <Text style={scoreTextStyle}>{left.score}  :  {right.score}</Text>
            <Text style={styles.scoreType}>Best of {series.totalMatches}</Text>
          </Animated.View>
          <TeamResult isStat={isStat} imageStyle={this.props.imageStyle} team={right} />
        </Animated.View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4D4D4D',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headerLine: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    overflow: 'hidden'
  },
  headerText: {
    fontFamily: 'Roboto_medium',
    fontSize: 12,
    color: '#FFFFFF',
    lineHeight: 24
  },
  statHeaderText: {
    fontSize: 16,
    textAlign: 'center'
  },
  countDown: { backgroundColor: '#1d1d1d', color: '#73d639', textAlign: 'center', paddingLeft: 10, paddingRight: 10 },
  status: {
    fontFamily: 'Roboto_medium',
    color: '#388E3C',
    fontSize: 12,
    height: 14,
    width: '100%',
    textAlign: 'center'
  },
  scoreContainer: {
    paddingTop: 10,
    paddingBottom: 8,
    marginBottom: 0,
    marginTop: 0,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  team: {
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teamName: {
    fontFamily: 'Roboto_medium',
    color: '#959595',
    fontSize: 14,
    fontWeight: 'bold'
  },
  statTeamName: {
    color: '#FFFFFF',
    fontSize: 12
  },
  teamLogo: {
    width: 60,
    height: 36,
    marginBottom: 4,
    backgroundColor: 'rgba(249, 249, 249, 0.8)'
  },
  teamLogoDark: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  scoreArea: {
    flex: 0.4,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  scoreText: {
    fontFamily: 'Roboto_medium',
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    color: '#959595'
  },
  statScoreText: {
    fontSize: 36,
    color: '#FFFFFF'
  },
  scoreType: {
    fontFamily: 'Roboto_medium',
    fontSize: 10,
    color: '#959595',
    textAlign: 'justify'
  }
})
