import React, { Component } from 'react'
import { View } from 'react-native'
import CompareRate from '../CompareRate'

export default class H2HLastTenMatchResult extends Component {
  render() {
    const { stat, matches } = this.props
    const avgLeftKill = Math.round(stat.team1_kills / stat.total_game)
    const avgRightKill = Math.round(stat.team2_kills / stat.total_game)
    const avgLeftWinTime = Math.round(stat.total_team1_game_length_win / stat.total_team1_win)
    const avgRightWinTime = Math.round(stat.total_team2_game_length_win / stat.total_team2_win)

    return (
      <View>
        <View style={{ backgroundColor: '#FFFFFF' }}>
          <CompareRate
            attributes={[
              {
                name: 'Win', isPercent: false, left: stat.total_team1_win, right: stat.total_team2_win
              },
              {
                name: 'First 10 kill ', isPercent: false, left: stat.total_team1_win_10k, right: stat.total_team2_win_10k
              },
              {
                name: 'First blood', isPercent: false, left: stat.total_team1_win_fb, right: stat.total_team2_win_fb
              },
              {
                name: 'First Roshan', isPercent: false, left: stat.total_team1_win_first_roshan, right: stat.total_team2_win_first_roshan
              },
              {
                name: 'First tower', isPercent: false, left: stat.total_team1_win_first_tower, right: stat.total_team2_win_first_tower
              },
              {
                name: 'Average kill', isPercent: false, left: avgLeftKill, right: avgRightKill
              },
              {
                name: 'Average win time', isPercent: false, time: true, left: avgLeftWinTime, right: avgRightWinTime
              }
            ]}
          />
        </View>
      </View>
    )
  }
}
