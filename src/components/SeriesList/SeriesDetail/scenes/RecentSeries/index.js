import React, { Component } from 'react'
import { Svg } from 'expo'
import { Image, View, StyleSheet, FlatList } from 'react-native'
import {
  Container, ListItem,
  Header, Text, Left, Right,
  Body, Title, Icon, Button
} from 'native-base'
import Tracker from '../../../../../services/tracker'
import AdsBanner from '../../../../../components/AdsBanner'

export default class RecentSeries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyHeaderIndices: [],
      items: []
    }
  }

  componentWillMount() {
    Tracker.hitScreen('Dota2/RecentSeries')
    const series = this.props.navigation.state.params.series
    const teamId = this.props.navigation.state.params.teamId
    const stickyHeaderIndices = []

    const items = []
    if (!teamId || series.left.id === teamId) {
      items.push({ key: 1, title: true, name: series.left.name })
      stickyHeaderIndices.push(0)
      series.leftRecent.map((item, index) => {
        if (index === 0) {
          items.push({ key: `ads-left-${index}`, ads: true })
        }
        item.key = `left-${item.id}`

        // Swap in case left is dire
        if (item.left.id !== series.left.id) {
          const right = item.right
          item.right = item.left
          item.left = right
        }
        items.push(item)
      })
    }

    if (!teamId || series.right.id === teamId) {
      items.push({ key: 2, title: true, name: series.right.name })
      stickyHeaderIndices.push(items.length - 1)
      series.rightRecent.map((item, index) => {
        if (index === 0) {
          items.push({ key: `ads-right-${index}`, ads: true })
        }
        item.key = `right-${item.id}`

        // Swap in case right is radiant
        if (item.right.id !== series.right.id) {
          const right = item.right
          item.right = item.left
          item.left = right
        }
        items.push(item)
      })
    }

    this.setState({ items, stickyHeaderIndices })
  }

  _onBack = () => {
    this.props.navigation.goBack()
  }

  _viewDetail = (item) => {
    Tracker.fireEvent('RecentSeries', 'ViewMatchDetail', `${item.left.name} - ${item.right.name}`)
    this.props.navigation.navigate('RecentSeriesDetail', { item })
  }

  _renderItem = ({ item }) => {
    if (item.title) {
      return (
        <ListItem itemDivider style={[styles.listViewItem, { backgroundColor: '#E8E7E7', alignItems: 'center', height: 34 }]}>
          <Text style={styles.teamNameTitle}>{item.name}</Text>
        </ListItem>
      )
    }
    else if (item.ads) {
      return (
        <ListItem style={[styles.listViewItem, { flexDirection: 'column' }]}>
          <AdsBanner />
        </ListItem>
      )
    }
    
    return (
      <ListItem style={[styles.listViewItem, { flexDirection: 'column' }]} onPress={() => {
        this._viewDetail(item)
      }} >
        <View style={styles.header}>
          <Text style={styles.headerText}>{item.league.name}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.teamContainer}>
            <Image style={styles.logo} resizeMode='contain' source={{ uri: item.left.logo }} />
            <Text numberOfLines={1} style={styles.teamName}>{item.left.name}</Text>
          </View>
          <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={styles.teamScore}>{item.left.score}</Text>
            <Text style={styles.teamScore}> - </Text>
            <Text style={[styles.teamScore, { color: '#F53939' }]}>{item.right.score}</Text>
          </View>
          <View style={[styles.teamContainer, { justifyContent: 'flex-end' }]}>
            <Text numberOfLines={1} style={styles.teamName}>{item.right.name}</Text>
            <Image style={styles.logo} resizeMode='contain' source={{ uri: item.right.logo }}/>
          </View>
        </View>
      </ListItem>
    )
    
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#E8E7E7' }}>
        <Header style={{ backgroundColor: '#388E3C' }}>
          <Left style={{ flex: 0.2 }}>
            <Button transparent onPress={this._onBack}>
              <Icon name='arrow-back' style={{ color: '#FFFFFF' }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontFamily: 'Roboto_medium', color: '#FFFFFF' }}>10 Recent Series</Title>
          </Body>
          <Right style={{ flex: 0.2 }} />
        </Header>
        <FlatList
          style={{ height: '100%' }}
          data={this.state.items}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.key.toString()}
          stickyHeaderIndices={this.state.stickyHeaderIndices}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  teamNameTitle: {
    flex: 1,
    color: '#388E3C',
    fontFamily: 'Roboto_medium',
    paddingLeft: 10
  },
  teamContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  teamName: {
    color: '#4D4D4D',
    flex: 0.8,
    fontSize: 14,
    fontFamily: 'Roboto_medium'
  },
  teamScore: {
    color: '#388E3C',
    fontFamily: 'Roboto_medium',
    fontSize: 14
  },
  listViewItem: {
    width: '100%',
    marginLeft: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    marginRight: 0
  },
  header: {
    width: '100%',
    backgroundColor: '#388E3C',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 28
  },
  headerText: {
    fontFamily: 'Roboto_medium',
    paddingLeft: 8,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold'
  },
  logo: {
    margin: 8,
    width: 24,
    height: 24,
    backgroundColor: 'rgba(249, 249, 249, 0.8)'
  }
})
