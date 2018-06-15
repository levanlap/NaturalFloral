import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { ListItem, Text } from 'native-base'
import PropTypes from 'prop-types'
import ImageStorage from '../../services/images'
import WinnerCheck from '../../resources/images/win_check.png'
import StatHeader from '../StatHeader'

const GREEN = '#388E3C'
const RED = '#F53939'
export default class ListMatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seriesState: []
    }
  }

  _viewDetail = () => {
    if (this.props.stackNavigation) {
      this.props.stackNavigation.navigate('SeriesDetail', { item: this.props.overview })
    }
  }

  _secondToMinutes(seconds) {
    seconds = Math.round(seconds)
    const minute = Math.floor(seconds / 60)
    const leftMinutes = seconds % 60
    return (
      <View style={[styles.scoreColOut]}>
        <Text style={[styles.col5, styles.font9, styles.txtRight]}>{minute}'</Text>
        <Text style={[{ flexBasis: `8%` }, styles.font9, styles.txtCenter]}>:</Text>
        <Text style={[styles.col5, styles.font9, styles.txtLeft]}>{leftMinutes}"</Text>
      </View>
    )
  }

  _renderFirstBlood(leftID, rightID, winFB, leftF10k, rightF10k) {
    let leftFBlood = false
    let rightFBlood = false

    if (winFB === leftID) {
      leftFBlood = true
    }
    else if (winFB === rightID) {
      rightFBlood = true
    }

    let leftColor = GREEN
    let rightColor = RED
    if (leftF10k < rightF10k) {
      leftColor = RED
      rightColor = GREEN
    }
    return (
      <View style={[styles.scoreColOut]}>
        <Text style={[styles.col5, styles.font10, styles.txtRight, { color: 'pink', fontWeight: 'bold' }]}>{leftFBlood && 'FB'}</Text>
        <Text style={[styles.col5, styles.font10, styles.txtRight, { color: leftColor }]}>{leftF10k}</Text>
        <Text style={[styles.col5, styles.font10, styles.txtCenter]}>:</Text>
        <Text style={[styles.col5, styles.font10, styles.txtLeft, { color: rightColor }]}>{rightF10k}</Text>
        <Text style={[styles.col5, styles.font10, styles.txtLeft, { color: 'pink', fontWeight: 'bold' }]}>{rightFBlood && 'FB'}</Text>
      </View>
    )
  }

  _renderHeroes(heroes, side = 'left') {
    const styleSide = side === 'right' ? { justifyContent: 'flex-end' } : ''
    return (
      <View style={[styles.heroArea, styleSide]}>
        {heroes.map((hero) => (
          <Image key={hero._id} style={styles.heroAvatar} source={ImageStorage.getHeroImage(parseInt(hero.hero))} />
        ))}
      </View>
    )
  }

  render() {
    const { seriesID, listMatch, teams, radiantId } = this.props
    let resultListMatch
    if (listMatch && listMatch.length > 0) {
      resultListMatch = listMatch.map((match, index) => {
        if (match.series_id === seriesID) {
          const radiantTeam = teams.find((team) => team.team_id === match.radiant_team)
          const direTeam = teams.find((team) => team.team_id === match.dire_team)
          let matchLeftID, matchRightID,
            matchLeftName, matchRightName,
            matchLeftScore, matchRightScore,
            matchLeftScore10k, matchRightScore10k,
            matchLeftPick, matchRightPick,
            matchLeftWin = false,
            matchRightWin = false
          if (radiantTeam.team_id === radiantId) {

            matchLeftID = radiantTeam.team_id
            matchLeftName = radiantTeam.name
            matchLeftScore = match.radiant_score
            matchLeftPick = match.radiant_draft.picks
            matchLeftScore10k = match.radiant_kills_at_first_10k

            matchRightID = direTeam.team_id
            matchRightName = direTeam.name
            matchRightScore = match.dire_score
            matchRightPick = match.dire_draft.picks
            matchRightScore10k = match.dire_kills_at_first_10k
          }
          else {
            matchLeftID = direTeam.team_id
            matchLeftName = direTeam.name
            matchLeftScore = match.dire_score
            matchLeftPick = match.dire_draft.picks
            matchLeftScore10k = match.dire_kills_at_first_10k

            matchRightID = radiantTeam.team_id
            matchRightName = radiantTeam.name
            matchRightScore = match.radiant_score
            matchRightPick = match.radiant_draft.picks
            matchRightScore10k = match.radiant_kills_at_first_10k
          }
          let leftColor = GREEN
          let rightColor = RED
          if (match.winner === matchLeftID) {
            matchLeftWin = true
            leftColor = GREEN
            rightColor = RED
          }
          if (match.winner === matchRightID) {
            matchRightWin = true
            leftColor = RED
            rightColor = GREEN
          }
          return (
            <ListItem key={index} style={styles.matchItem} onPress={() => {
              this._viewDetail(this.props.overview)
            }} >
              <View style={{ paddingTop: 5, paddingBottom: 5, flexBasis: '37%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                  <Image style={styles.teamLogoLeft} resizeMode='contain' source={{ uri: ImageStorage.getTeamImage(matchLeftID) }} />
                  <Text style={[styles.font12, styles.txtLeft, { color: '#363636', flex: 0.9 }]} numberOfLines={1}>{matchLeftName}</Text>
                </View>
                {this._renderHeroes(matchLeftPick)}
              </View>
              <View style={{ paddingTop: 5, paddingBottom: 5, flexBasis: '26%', alignSelf: 'flex-start' }}>
                <View style={[styles.scoreColOut]}>
                  <View style={[styles.col5, { alignItems: 'flex-end' }]}>{matchLeftWin && <Image style={[styles.winCheck]} source={WinnerCheck} />}</View>
                  <Text style={[styles.col5, styles.font11, styles.txtRight, { color: leftColor }]}>{matchLeftScore}</Text>
                  <Text style={[styles.col5, styles.font11, styles.txtCenter]}>:</Text>
                  <Text style={[styles.col5, styles.font11, styles.txtLeft, { color: rightColor }]}>{matchRightScore}</Text>
                  <View style={[styles.col5]}>{matchRightWin && <Image style={[styles.winCheck]} source={WinnerCheck} />}</View>
                </View>
                {this._renderFirstBlood(matchLeftID, matchRightID, match.first_blood, matchLeftScore10k, matchRightScore10k)}
                {this._secondToMinutes(match.game_length)}
              </View>
              <View style={{ paddingTop: 5, paddingBottom: 5, flexBasis: '37%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[styles.font12, styles.txtRight, { color: '#363636', flex: 0.9 }]} numberOfLines={1}>{matchRightName}</Text>
                  <Image style={styles.teamLogoRight} resizeMode='contain' source={{ uri: ImageStorage.getTeamImage(matchRightID) }} />
                </View>
                {this._renderHeroes(matchRightPick, 'right')}
              </View>
            </ListItem>
          )
        }
      })
    }
    return (
      <View>
        {this.props.title && <StatHeader title={this.props.title} />}
        {resultListMatch}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  teamLogoLeft: { backgroundColor: 'rgba(220, 220, 220, 0.9)', width: 20, height: 20, margin: 0, padding: 0, marginRight: 4 },
  teamLogoRight: { backgroundColor: 'rgba(220, 220, 220, 0.9)', width: 20, height: 20, margin: 0, padding: 0, marginLeft: 4 },
  matchItem: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 10,
    marginLeft: 10
  },
  scoreColOut: { width: '100%', flexDirection: 'row', justifyContent: 'center' },
  col5: { flexBasis: `${100 / 5}%` },
  winCheck: { width: 14, height: 14 },
  heroArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 4
  },
  heroAvatar: {
    height: 22,
    width: 22,
    borderRadius: 11
  },
  font12: { fontSize: 12, fontFamily: 'Roboto_medium' },
  font11: { fontSize: 11, fontFamily: 'Roboto_medium' },
  font10: { fontSize: 10, fontFamily: 'Roboto_medium' },
  font9: { fontSize: 9, fontFamily: 'Roboto_medium' },
  flexStart: { justifyContent: 'flex-start' },
  flexEnd: { justifyContent: 'flex-end' },
  txtLeft: { textAlign: 'left' },
  txtCenter: { textAlign: 'center' },
  txtRight: { textAlign: 'right' }
})
