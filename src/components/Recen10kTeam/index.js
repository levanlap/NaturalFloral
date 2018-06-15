import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text } from 'native-base'
import ImageStorage from '../../services/images'
import WinnerCheck from '../../resources/images/win_check.png'

export default class Recent10kMatch extends Component {

  _renderTeamName(team) {
    return (
      <View style={styles.matchText}>
        <Text numberOfLines={1} style={{ fontSize: 12, color: '#363636', textAlign: 'right', fontFamily: 'Roboto_medium' }}>{team.name}</Text>
      </View>
    )
  }
  _renderLeftTeam(team, showWinIcon) {
    const source = { uri: ImageStorage.getTeamImage(team.team_id) }
    return (
      <View style={[styles.matchArea]}>
        {showWinIcon && <Image style={{ width: 14, height: 14 }} source={WinnerCheck} /> }
        {this._renderTeamName(team)}
        <Image style={styles.matchAvatar} source={source} />
      </View>
    )
  }

  _renderRightTeam(team, showWinIcon) {
    const source = { uri: ImageStorage.getTeamImage(team.team_id) }
    return (
      <View style={[styles.matchArea, styles.reverseMatchArea]}>
        <Image style={styles.matchAvatar} source={source} />
        {this._renderTeamName(team)}
        {showWinIcon && <Image style={{ width: 14, height: 14 }} source={WinnerCheck} /> }
      </View>
    )
  }

  _renderHeroes(heroes, side = 'left') {
    const styleSide = side === 'right' ? { justifyContent: 'flex-start' } : ''
    return (
      <View style={[styles.heroArea, styleSide]}>
        {heroes.map((hero, index) => (
          <View key={hero._id}>
            <Image style={styles.heroAvatar} source={ImageStorage.getHeroImage(parseInt(hero.hero))} />
          </View>
        ))}
      </View>
    )
  }

  render() {
    const { type, row_num, recent_matches, teams } = this.props
    let result
    if (recent_matches && recent_matches.length > 0) {
      result = recent_matches.map((item, index) => {
        if (index > (row_num - 1)) return
        const radiantTeamInfo = teams.find((team) => team.team_id === item.radiant_team)
        const direTeamInfo = teams.find((team) => team.team_id === item.dire_team)
        let leftSideTeamScore = 0,
          leftSideTeamInfo,
          leftSideTeamDraftPick,
          leftSideTeamBonusScore = 0,
          leftSideTeamWin = false
        let rightSideTeamScore = 0,
          rightSideTeamInfo,
          rightSideTeamDraftPick,
          rightSideTeamBonusScore = 0,
          rightSideTeamWin = false
        if (radiantTeamInfo.team_id === this.props.radiant_stat.team.team_id) {
          leftSideTeamInfo = radiantTeamInfo
          leftSideTeamDraftPick = item.radiant_draft.picks

          rightSideTeamInfo = direTeamInfo
          rightSideTeamDraftPick = item.dire_draft.picks
          switch (type) {
            case '10k':
              leftSideTeamScore = item.radiant_kills_at_first_10k
              rightSideTeamScore = item.dire_kills_at_first_10k
              break
            case 'h2h':
              leftSideTeamScore = item.radiant_score
              rightSideTeamScore = item.dire_score
              leftSideTeamBonusScore = item.radiant_kills_at_first_10k
              rightSideTeamBonusScore = item.dire_kills_at_first_10k
              break
          }
        }
        else {
          leftSideTeamInfo = direTeamInfo
          leftSideTeamDraftPick = item.dire_draft.picks

          rightSideTeamInfo = radiantTeamInfo
          rightSideTeamDraftPick = item.radiant_draft.picks

          switch (type) {
            case '10k':
              leftSideTeamScore = item.dire_kills_at_first_10k
              rightSideTeamScore = item.radiant_kills_at_first_10k
              break
            case 'h2h':
              leftSideTeamScore = item.dire_score
              rightSideTeamScore = item.radiant_score
              leftSideTeamBonusScore = item.dire_kills_at_first_10k
              rightSideTeamBonusScore = item.radiant_kills_at_first_10k
              break
          }
        }

        if (leftSideTeamScore > rightSideTeamScore) {
          leftSideTeamWin = true
        }
        else {
          rightSideTeamWin = true
        }
        return (
          <View key={index}>
            <View style={styles.container}>
              <View style={styles.left}>
                {this._renderLeftTeam(leftSideTeamInfo, leftSideTeamWin)}
                
                {this._renderHeroes(leftSideTeamDraftPick)}
              </View>
              <View style={{ paddingTop: 12, width: 50 }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                  <View style={styles.scoreCol}>
                    <Text style={{ fontSize: 12, textAlign: 'right' }}>{leftSideTeamScore}</Text>
                  </View>
                  <View style={styles.scoreCol}>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}> - </Text>
                  </View>
                  <View style={styles.scoreCol}>
                    <Text style={{ fontSize: 12, textAlign: 'left' }}>{rightSideTeamScore}</Text>
                  </View>
                </View>
                {type === 'h2h' &&
                  <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <View style={styles.scoreCol}>
                      <Text style={{ fontSize: 10, textAlign: 'right' }}>{leftSideTeamBonusScore}</Text>
                    </View>
                    <View style={styles.scoreCol}>
                      <Text style={{ fontSize: 10, textAlign: 'center' }}> - </Text>
                    </View>
                    <View style={styles.scoreCol}>
                      <Text style={{ fontSize: 10, textAlign: 'left' }}>{rightSideTeamBonusScore}</Text>
                    </View>
                  </View>
                }
              </View>
              <View style={styles.right}>
                {this._renderRightTeam(rightSideTeamInfo, rightSideTeamWin)}

                {this._renderHeroes(rightSideTeamDraftPick, 'right')}
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        )
      })
    }
    return (
      <View style={{ backgroundColor: '#FFFFFF' }}>{result}</View>
    )
  }
}

const styles = StyleSheet.create({
  scoreCol: {
    flexBasis: `${100 / 3}%`
  },

  separator: {
    backgroundColor: '#E8E7E7',
    height: 1,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 3,
    marginBottom: 3
  },
  heroArea: {
    paddingRight: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  heroAvatar: {
    height: 25,
    width: 25,
    borderRadius: 12.5
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5

  },
  left: {
    flex: 0.5
  },
  right: {
    flex: 0.5
  },
  matchText: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 8,
    paddingLeft: 8,
    marginTop: 4
  },
  matchAvatar: {
    width: 30,
    height: 30
  },
  matchArea: {
    marginTop: 8,
    marginBottom: 8,
    flex: 1,
    height: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 3
  },
  reverseMatchArea: {
    paddingLeft: 3,
    justifyContent: 'flex-start',
    paddingRight: 0
  }
})
