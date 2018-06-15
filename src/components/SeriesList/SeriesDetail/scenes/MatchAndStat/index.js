import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, ScrollView, Animated, Image } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Container, Header, Left, Right, Body, Title, Icon, Button, Spinner } from 'native-base'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import RecentIcon from '../../../../../resources/images/recent-icon.png'
import ScoreBoard from '../../../../../components/ScoreBoard'
import Tracker from '../../../../../services/tracker'
import Store from '../../../../../services/store'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    backgroundColor: '#4D4D4D',
    borderColor: 'gray',
    borderBottomWidth: 4
  },
  label: {
    fontFamily: 'Roboto_medium',
    fontSize: 14,
    width: 100,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  indicator: {
    backgroundColor: '#388E3C',
    bottom: -4
  }
})

const HEADER_MAX_HEIGHT = 100
const HEADER_MIN_HEIGHT = 0
const HEADER_SCROLL_DISTANCE = 100

export default class MatchAndStat extends Component {
  static propTypes = {
    getRoutes: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this._previousHeaderHeight = 0
    this._readyForAnimation = true
    this.state = {
      isReady: false,
      scrollY: new Animated.Value(0)
    }
  }

  componentWillMount() {
    let time = new Date()
    Tracker.hitScreen('Dota2/MatchDetail')
    const overview = this.props.item // eslint-disable-line

    this.setState({
      overview,
      title: `${overview.left.tag} vs ${overview.right.tag}`
    })

    Store.getSeriesDetail(overview).then((series) => {
      time = new Date()

      const routes = this.props.getRoutes(series)

      this.setState({ isReady: true, routes, series })
    })
  }

  _onBack = () => {
    // In case it belongs to a nested stack navigation
    if (this.props.stackNavigation) { // eslint-disable-line 
      this.props.stackNavigation.goBack() // eslint-disable-line
    }
    else {
      this.props.navigation.goBack() // eslint-disable-line
    }
  }

  _viewRecentSeries = (teamId = '') => {
    if (teamId) {
      Tracker.fireEvent('RecentSeries', 'ViewSpecificTeam', 'TeamId', teamId)
    }
    else {
      Tracker.fireEvent('RecentSeries', 'ViewBothTeam')
    }
    this.props.navigation.navigate('RecentSeries', { series: this.state.series, teamId }) // eslint-disable-line
  }

  _renderTab = () =>
    (<ScrollableTabBar
      style={{ borderWidth: 0 }}
      backgroundColor='#4D4D4D'
      activeTextColor='#FFFFFF'
      inactiveTextColor='#959595'
      tabBarTextStyle={styles.label}
      tabsContainerStyle={styles.tabBar}
      textStyle={styles.label}
      underlineStyle={styles.indicator}
    />)

  _onScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y
    const goingDown = currentOffset < this._previousHeaderHeight

    if (!this._readyForAnimation) {
      return
    }

    if (goingDown) {
      if (currentOffset < 20) {
        if (this._previousHeaderHeight > 20) {
          this._readyForAnimation = false
          // Expand
          Animated.timing(this.state.scrollY, {
            toValue: 0,
            duration: 300
          }).start(() => {
            this._readyForAnimation = true
          })
        }
      }
    }
    else if (currentOffset > 250) {
      if (this._previousHeaderHeight < 250) {
        this._readyForAnimation = false
        // Collapse
        Animated.timing(this.state.scrollY, {
          toValue: 100,
          duration: 300
        }).start(() => {
          this._readyForAnimation = true
        })
      }
    }
    this._previousHeaderHeight = currentOffset
  }

  _viewBothTeamRecentSeries = () => this._viewRecentSeries('')

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, 50, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, 50, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    return (
      <Container style={{ backgroundColor: '#E8E7E7' }}>
        <Header style={{ backgroundColor: '#388E3C' }}>
          <Left style={{ flex: 0.2 }}>
            <Button transparent onPress={this._onBack}>
              <Icon name='arrow-back' style={{ color: '#FFFFFF' }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontFamily: 'Roboto_medium', color: '#FFFFFF' }}>{this.state.title}</Title>
          </Body>
          <Right style={{ flex: 0.2 }}>
            {this.state.series && this.state.series.radiant_stat && this.state.series.dire_stat &&
              <Button style={{ width: 70 }} transparent onPress={this._viewBothTeamRecentSeries}>
                <Image style={{ width: 24, height: 24 }} source={RecentIcon} />
              </Button>
            }
          </Right>
        </Header>
        {!this.state.isReady && <Spinner color='#388E3C' />}
        {this.state.isReady &&
          <View style={styles.container}>
            <Animated.View style={{ height: headerHeight, backgroundColor: '#4D4D4D' }}>
              <ScoreBoard imageStyle={{ opacity: imageOpacity }} item={this.state.overview} isStat />
            </Animated.View>
            <ScrollableTabView renderTabBar={this._renderTab} >
              {this.state.routes.map(({ title, screen }) => {
                const Screen = screen
                return (
                  <Container key={title} tabLabel={title} style={{ backgroundColor: '#FFFFFF' }}>
                    <ScrollView onScroll={this._onScroll} scrollEventThrottle={100} >
                      <Screen
                        stackNavigation={this.props.stackNavigation}
                        overview={this.state.overview}
                        series={this.state.series}
                        left={this.state.overview.left}
                        right={this.state.overview.right}
                        viewRecentSeries={this._viewRecentSeries}
                        onScroll={this._onScroll}
                      />
                    </ScrollView>
                  </Container>
                )
              })
              }
            </ScrollableTabView>
          </View>
        }
      </Container>
    )
  }
}
