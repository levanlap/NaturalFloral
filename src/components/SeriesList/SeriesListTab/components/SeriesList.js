import React, { PureComponent } from 'react'
import { StyleSheet, Image, FlatList, RefreshControl } from 'react-native'
import { Spinner, ListItem, Text, Body, View } from 'native-base'
import Tracker from '../../../../services/tracker'
import Store from '../../../../services/store'
import AdsBanner from '../../../AdsBanner'
import ScoreBoard from '../../../ScoreBoard'
import ListMatch from '../../../../components/ListMatch'

export default class ListSeries extends PureComponent {
  constructor() {
    super()
    this.state = {
      isFetching: true,
      page: 1,
      stickyHeaderIndices: [],
      seriesState: []
    }
  }

  componentWillMount() {
    if (this.props.initState) {
      this.setState(...this.props.initState)
    }
    this._onRefresh()
  }

  _onRefresh = () => {
    this.setState({ isFetching: true, page: 1 }, async () => {
      const { data } = await Store.getSeries(this.props.seriesType, this.state.page)
      const items = data
      const stickyHeaderIndices = []
      const loadImageJob = []
      const seriesState = []

      items.map((item, index) => {
        if (item.header) {
          stickyHeaderIndices.push(index)
        }
        if (item.left && item.right) {
          loadImageJob.push(Image.prefetch(item.left.logo))
          loadImageJob.push(Image.prefetch(item.right.logo))
        }
        if (item.series && (item.meta.id === 'history')) {
          this.callToGetSeriesDetail(item).then((data) => {
            let seriesDetail = data
            seriesState.push({
              series_id: item.series.series_id,
              show: false,
              seriesDetail
            })
          })
        }
      })
      Promise.all(loadImageJob)
      stickyHeaderIndices.push(0)
      this.setState({ isFetching: false, items, stickyHeaderIndices, seriesState })
    })
  }

  _onLoadMore = () => {
    if (this.state.isFetching || this.state.isLoadingMore || this.state.lastItem) return
    this.setState({ page: this.state.page + 1, isLoadingMore: true }, async () => {
      const { data, lastItem } = await Store.getSeries(this.props.seriesType, this.state.page)
      const items = this.state.items.concat(data)
      const stickyHeaderIndices = []
      const loadImageJob = []
      const seriesState = []

      items.map((item, index) => {
        if (item.header) {
          stickyHeaderIndices.push(index)
        }
        if (item.left && item.right) {
          loadImageJob.push(Image.prefetch(item.left.logo))
          loadImageJob.push(Image.prefetch(item.right.logo))
        }
        if (item.series && (item.meta.id === 'history')) {
          this.callToGetSeriesDetail(item).then((data) => {
            let seriesDetail = data
            seriesState.push({
              series_id: item.series.series_id,
              show: false,
              seriesDetail
            })
          })
        }
      })
      Promise.all(loadImageJob).catch(() => { })
      stickyHeaderIndices.push(0)
      this.setState({
        items, stickyHeaderIndices, isLoadingMore: false, lastItem, seriesState
      })
    })
  }

  async callToGetSeriesDetail(item) {
    const result = await Store.getSeriesDetail(item)
    return result
  }

  _viewDetail = (item) => {
    if (this.props.stackNavigation) {
      Tracker.fireEvent(
        `SeriesList-${this.props.navigation.state.routeName}`, 'SelectSeries',
        `${item.left.name} - ${item.right.name}`
      )
      this.props.stackNavigation.navigate('SeriesDetail', { item })
    }
  }

  _showMatch(item) {
    if (item.meta.id === 'history') {
      let seriesState = [...this.state.seriesState]
      let index = seriesState.findIndex((series) => series.series_id === item.series.series_id)
      if (seriesState[index]) {
        seriesState[index].show = !seriesState[index].show
      }
      this.setState({ seriesState })
    }
    else {
      this._viewDetail(item)
    }
  }

  _renderMatch(leftSide, item) {
    let seriesID = item.series.series_id
    if (this.state.seriesState.find((series) => series.series_id === seriesID && series.show)) {
      const current = this.state.seriesState.findIndex((series) => series.series_id === seriesID)
      const seriesDetail = this.state.seriesState[current].seriesDetail
      return (
        <View>
          <View style={styles.separator} />
          <ListMatch
            overview={item}
            stackNavigation={this.props.stackNavigation}
            seriesID={seriesID}
            listMatch={seriesDetail.games}
            teams={seriesDetail.teams}
            radiantId={leftSide.id}
          />
        </View>
      )
    }
  }
  _renderItem = ({ item }) => {
    const { left } = item
    if (item.header) {
      return (
        <ListItem itemDivider key={item.name} style={[styles.listViewItem, styles.header]}>
          <Text style={styles.headerText}>
            {item.name.toUpperCase()}
          </Text>
        </ListItem>
      )
    }
    else if (item.isAds) {
      return (
        <ListItem key={item.id} style={styles.listViewItem}>
          <AdsBanner />
        </ListItem>
      )
    }
    else if (item.isLoading) {
      return (
        <ListItem key={`loading-${item.id}`} style={[styles.listViewItem, { justifyContent: 'center' }]}>
          <Spinner color='#388E3C' />
        </ListItem>
      )
    }
    return (
      <ListItem key={item.id} style={[styles.listViewItem, styles.series]} onPress={() => {
        this._showMatch(item)
      }}>
        <Body>
          <ScoreBoard item={item} />
          {this._renderMatch(left, item)}
        </Body>
      </ListItem>
    )
  }
  render() {
    let items = this.state.items
    if (this.state.isLoadingMore) {
      items = items.concat([{ isLoading: true, id: Math.random() }])
    }
    return (
      <FlatList
        onEndReachedThreshold={0.8}
        onEndReached={this._onLoadMore}
        style={{ height: '100%' }}
        data={items}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.id.toString()}
        stickyHeaderIndices={this.state.stickyHeaderIndices}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isFetching}
            onRefresh={this._onRefresh}
            title='Pull to refresh'
            tintColor='#388E3C'
            titleColor='#959595'
          />
        }
      />
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
    backgroundColor: '#E8E7E7',
    height: 24
  },
  headerText: {
    fontFamily: 'Roboto_medium',
    paddingLeft: 8,
    color: '#959595',
    fontSize: 11,
    fontWeight: 'bold'
  }
})
