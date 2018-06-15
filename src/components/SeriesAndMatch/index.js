import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { ListItem, Text } from 'native-base'
import moment from 'moment'
import StatHeader from '../StatHeader'
import ImageStorage from '../../services/images'
import DotaListMatch from '../ListMatch'
import CSGOListMatch from '../CSGOListMatch'

const GREEN = '#388E3C'
const RED = '#F53939'
export default class SeriesAndMatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seriesState: []
    }
  }

  componentWillMount() {
    let seriesState = []
    const { recent_series } = this.props

    if (recent_series && recent_series.length > 0) {
      recent_series.map(({ series }) => {
        seriesState.push({
          series_id: series.series_id,
          show: false
        })
      })
    }
    this.setState({ seriesState })
  }

  _showMatch(seriesID) {
    let seriesState = [...this.state.seriesState]
    let index = seriesState.findIndex((series) => series.series_id === seriesID)
    seriesState[index].show = !seriesState[index].show
    this.setState({ seriesState })
  }

  _renderLeague(leagues, series) {
    const seriesDate = moment(series.created_date).format('DD/MM/YYYY')
    const seriesLeague = leagues.find((league) => league.league_id === series.league_id)
    return (
      <View style={styles.headLine}>
        <Text numberOfLines={1} style={styles.headText}>{seriesLeague.name}</Text>
        <Text numberOfLines={1} style={[styles.headText, styles.txtRight, { flex: 0.2, fontSize: 10 }]}>{seriesDate}</Text>
      </View>
    )
  }

  _renderSeries(leftTeam, rightTeam, index, seriesID, overview) {
    let leftColor = GREEN
    let rightColor = RED

    if (leftTeam[index].score > rightTeam[index].score) {
      leftColor = GREEN
      rightColor = RED
    }
    else if (leftTeam[index].score < rightTeam[index].score) {
      rightColor = GREEN
      leftColor = RED
    }
    const ListMatch = this.props.game == 'CSGO' ? CSGOListMatch : DotaListMatch
    return (
      <View key={seriesID}>
        <View style={styles.itemSeries}>
          <View style={[{ flexBasis: '40%', flexDirection: 'row', justifyContent: 'flex-start' }]}>
            <Image style={[styles.teamLogoLeft]} resizeMode='contain' source={{ uri: ImageStorage.getTeamImage(leftTeam[index].id) }} />
            <Text style={styles.teamName} numberOfLines={1}>{leftTeam[index].name}</Text>
          </View>
          <View style={[{ flexBasis: '20%', flexDirection: 'row', justifyContent: 'center' }]}>
            <Text style={[styles.teamScore, { color: leftColor }]}>{leftTeam[index].score}</Text>
            <Text style={styles.teamScore}> - </Text>
            <Text style={[styles.teamScore, { color: rightColor }]}>{rightTeam[index].score}</Text>
          </View>
          <View style={[{ flexBasis: '40%', flexDirection: 'row', justifyContent: 'flex-end' }]}>
            <Text style={[styles.teamName, styles.txtRight]} numberOfLines={1}>{rightTeam[index].name}</Text>
            <Image style={[styles.teamLogoRight]} resizeMode='contain' source={{ uri: ImageStorage.getTeamImage(rightTeam[index].id) }} />
          </View>
        </View>
        <View style={styles.separator} />
        {this.state.seriesState.find((series) => series.series_id === seriesID && series.show) &&
          <ListMatch
            overview={overview}
            stackNavigation={this.props.stackNavigation}
            seriesID={seriesID}
            listMatch={this.props.recent_matches}
            teams={this.props.teams}
            radiantId={this.props.radiant_stat.team.team_id}
            isStats={true}
          />
        }
      </View>
    )
  }

  render() {
    const { row, title, recent_series, leagues, teams } = this.props
    let result
    const leftTeam = []
    const rightTeam = []
    if (recent_series && recent_series.length > 0) {
      result = recent_series.map((overview, index) => {
        const series = overview.series
        if (index > (row - 1)) return
        const radiantInfo = teams.find((team) => team.team_id === series.radiant_team)
        const direInfo = teams.find((team) => team.team_id === series.dire_team)
        if (radiantInfo.team_id === this.props.radiant_stat.team.team_id) {
          leftTeam.push({
            id: radiantInfo.team_id,
            name: radiantInfo.name,
            score: series.radiant_score
          })
          rightTeam.push({
            id: direInfo.team_id,
            name: direInfo.name,
            score: series.dire_score
          })
        }
        else {
          rightTeam.push({
            id: radiantInfo.team_id,
            name: radiantInfo.name,
            score: series.radiant_score
          })
          leftTeam.push({
            id: direInfo.team_id,
            name: direInfo.name,
            score: series.dire_score
          })
        }
        return (
          <ListItem key={series.series_id} style={styles.listItem} onPress={() => { this._showMatch(series.series_id) }}>
            {this._renderLeague(leagues, series)}
            {this._renderSeries(leftTeam, rightTeam, index, series.series_id, overview)}
          </ListItem>
        )
      })
    }
    return (
      <View style={{ backgroundColor: '#fff' }}>
        {this.props.recent_series.length > 0 && <StatHeader title={this.props.title} />}
        {result}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#D7D7D7',
    height: 1,
    marginLeft: 8,
    marginRight: 8
  },
  listItem: { flexDirection: 'column', marginLeft: 0, marginBottom: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0 },
  headLine: { backgroundColor: '#388E3C', flexDirection: 'row', width: '100%', height: 34, justifyContent: 'space-between', padding: 10 },
  headText: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold', fontFamily: 'Roboto_medium', flex: 0.9 },
  teamName: { color: '#4D4D4D', fontSize: 13, fontFamily: 'Roboto_medium', flex: 0.9 },
  teamLogoLeft: { backgroundColor: 'rgba(220, 220, 220, 0.9)', width: 24, height: 24, margin: 0, padding: 0, marginRight: 4 },
  teamLogoRight: { backgroundColor: 'rgba(220, 220, 220, 0.9)', width: 24, height: 24, margin: 0, padding: 0, marginLeft: 4 },
  teamScore: { fontSize: 14, fontFamily: 'Roboto_medium' },
  itemSeries: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    marginLeft: 0,
    marginRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txtRight: { textAlign: 'right' }
})
