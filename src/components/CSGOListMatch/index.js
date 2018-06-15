import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { ListItem, Text } from 'native-base'
import PropTypes from 'prop-types'
import ImageStorage from '../../services/images'
import StatHeader from '../StatHeader'

const WIN_COLOR = '#388E3C'
const LOST_COLOR = '#F53939'
const CT_COLOR = 'blue'
const T_COLOR = '#fab200'

export default class CSGOListMatch extends Component {
  constructor(props) {
    super(props)
  }
  _viewDetail = () => {
    if (this.props.stackNavigation) {
      this.props.stackNavigation.navigate('SeriesDetail', { item: this.props.overview })
    }
  }
  render() {
    const { seriesID, listMatch, teams, radiantId } = this.props
    let resultListMatch
    if (listMatch && listMatch.length > 0) {
      resultListMatch = listMatch.map((match, index) => {
        if (match.series_id === seriesID) {
          const radiantTeam = teams.find((team) => team.team_id === match.radiant_team)
          const direTeam = teams.find((team) => team.team_id === match.dire_team)

          let left = radiantTeam
          let right = direTeam
          let leftScore = match.radiant_score
          let rightScore = match.dire_score

          if (radiantId !== radiantTeam.team_id) {
            left = direTeam
            right = radiantTeam
            leftScore = match.dire_score
            rightScore = match.radiant_score
          }
          const isLeftWin = match.winner === left.team_id ? true : false
          const isRightWin = match.winner === right.team_id ? true : false
          const leftColor = match.winner === left.team_id ? WIN_COLOR : LOST_COLOR
          const rightColor = match.winner === right.team_id ? WIN_COLOR : LOST_COLOR

          return (
            <ListItem key={index} style={styles.listItem} onPress={this._viewDetail}>
              {this.props.isStats &&
                <View style={{ width: '100%', position: 'relative' }} >
                  <Image style={{ width: '100%', height: 28, margin: 0, padding: 0 }} source={ImageStorage.getCsgoImages('train-mini')} />
                  <Text style={{ position: 'absolute', lineHeight: 28, fontSize: 13, color: '#FFF' }}>Train</Text>
                </View>
              }
              <View style={styles.scorePanel}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexBasis: '40%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Image style={[styles.teamLogo, { marginRight: 4 }]} resizeMode='contain' source={{ uri: ImageStorage.getTeamImage(left.team_id) }} />
                    <Text style={[styles.primeFont, { lineHeight: 20 }]} numberOfLines={1} adjustsFontSizeToFit>{left.name}</Text>
                  </View>
                  <View style={[{ flexBasis: '20%', flexDirection: 'row', justifyContent: 'center' }]}>
                    <Text style={[styles.font11, styles.txtRight, { flexBasis: '45%', color: leftColor }]}>{leftScore}</Text>
                    <Text style={[styles.font11, styles.txtCenter, { flexBasis: '10%' }]}>:</Text>
                    <Text style={[styles.font11, styles.txtLeft, { flexBasis: '45%', color: rightColor }]}>{rightScore}</Text>
                  </View>
                  <View style={{ flexBasis: '40%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={[styles.primeFont, styles.txtRight, { lineHeight: 20 }]} numberOfLines={1} adjustsFontSizeToFit>{right.name}</Text>
                    <Image style={[styles.teamLogo, { marginLeft: 4 }]} resizeMode='contain' source={{ uri: ImageStorage.getTeamImage(right.team_id) }} />
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexBasis: '40%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Image style={{ width: 37, height: 16, maxWidth: '50%' }} resizeMode='contain' source={ImageStorage.getCsgoImages('usp_silencer_blue')} />
                    <Image style={{ width: 37, height: 16, maxWidth: '50%' }} resizeMode='contain' source={ImageStorage.getCsgoImages('glock_yellow')} />
                  </View>
                  <View style={[{ flexBasis: '20%', justifyContent: 'center' }]}>
                    <View style={[styles.scoreLine]}>
                      <Text style={[{ flexBasis: '45%' }, styles.font11, styles.txtRight]}>
                        <Text style={[styles.font11, { color: CT_COLOR }]}>10 </Text>:
                        <Text style={[styles.font11, { color: T_COLOR }]}> 5</Text>
                      </Text>
                      <Text style={[{ flexBasis: '10%' }, styles.font11, styles.txtCenter]}>;</Text>
                      <Text style={[{ flexBasis: '45%' }, styles.font11]}>
                        <Text style={[styles.font11, { color: T_COLOR }]}>6 </Text>:
                        <Text style={[styles.font11, { color: CT_COLOR }]}> 7</Text>
                      </Text>
                    </View>
                    <View style={[styles.scoreLine]}>
                      <Text style={[styles.font11, styles.txtRight, { flexBasis: '45%', color: leftColor }]}>{leftScore}</Text>
                      <Text style={[styles.font11, styles.txtCenter, { flexBasis: '10%' }]}>:</Text>
                      <Text style={[styles.font11, styles.txtLeft, { flexBasis: '45%', color: rightColor }]}>{rightScore}</Text>
                    </View>
                  </View>
                  <View style={{ flexBasis: '40%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Image style={{ width: 37, height: 16, maxWidth: '50%' }} resizeMode='contain' source={ImageStorage.getCsgoImages('glock_grey')} />
                    <Image style={{ width: 37, height: 16, maxWidth: '50%' }} resizeMode='contain' source={ImageStorage.getCsgoImages('usp_silencer_grey')} />
                  </View>
                </View>
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
  listItem: {
    flexDirection: 'column',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 10,
    marginLeft: 10
  },
  scorePanel: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
    paddingBottom: 5,
    paddingTop: 5
  },
  scoreLine: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  teamLogo: { 
    backgroundColor: 'rgba(220, 220, 220, 0.9)',
    width: 20,
    height: 20,
    margin: 0,
    padding: 0,
    marginRight: 4
  },
  primeFont: {
    color: '#363636',
    fontSize: 12,
    fontFamily: 'Roboto_medium',
    lineHeight: 18
  },
  font11: { fontSize: 11, fontFamily: 'Roboto_medium' },
  txtLeft: { textAlign: 'left' },
  txtCenter: { textAlign: 'center' },
  txtRight: { textAlign: 'right' }
})

