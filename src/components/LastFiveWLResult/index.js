import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text } from 'native-base'
import StatHeader from '../StatHeader'

const styles = StyleSheet.create({
  circle: {
    width: 'auto',
    height: 24,
    borderRadius: 24,
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 2,
    borderColor: 'black'
  },
  team: {
    flex: 0.5,
    flexDirection: 'row',
    margin: 8,
    flexWrap: 'wrap'
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold'
  },
  win: {
    borderColor: '#388E3C'
  },
  lose: {
    borderColor: '#F53939'
  },
  equal: {
    borderColor: 'yellow'
  }
})

class ResultRow extends Component {
  render() {
    let styleMatch
    let custom
    switch (this.props.match.result) {
      case -1:
        styleMatch = styles.lose
        custom = this.props.customLose
        break
      case 0:
        styleMatch = styles.equal
        custom = this.props.customEqual
        break
      case 1:
        styleMatch = styles.win
        custom = this.props.customWin
        break
    }
    return (
      <View style={[styles.circle, styleMatch]}>
        <Text style={styles.text}>{custom || this.props.match.score}</Text>
      </View>
    )
  }
}

export default class LastFiveWLResult extends Component {
  static defaultProps = {
    customWin: null,
    customLose: null,
    customEqual: null
  }

  _onMoreResult = (teamId) => {
    this.props.viewRecentSeries && this.props.viewRecentSeries(teamId)
  }

  render() {
    return (
      <View >
        <StatHeader title={this.props.title} />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF'
        }}
        >
          <View style={styles.team}>
            {
              this.props.left.map((match, index) => {
                const key = `left-${index}`
                return (<ResultRow
                  match={match} customWin={this.props.customWin} customLose={this.props.customLose}
                  customEqual={this.props.customEqual} key={key}
                />)
              })
            }
            <TouchableOpacity style={styles.circle} onPress={() => this._onMoreResult(this.props.leftTeamID)}>
              <Text style={[styles.text, { fontSize: 12, fontWeight: 'normal' }]}>more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.team}>
            {
              this.props.right.map((match, index) => {
                const key = `right-${index}`
                return (<ResultRow
                  match={match} customWin={this.props.customWin} customLose={this.props.customLose}
                  customEqual={this.props.customEqual} key={key}
                />)
              })
            }
            <TouchableOpacity style={styles.circle} onPress={() => this._onMoreResult(this.props.rightTeamID)}>
              <Text style={[styles.text, { fontSize: 12, fontWeight: 'normal' }]}>more</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
