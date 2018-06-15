import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import PropTypes from 'prop-types'
import MatchAndStat from './scenes/MatchAndStat'
import RecentSeries from './scenes/RecentSeries'

export default class SeriesDetail extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    getRoutes: PropTypes.func
  }

  _generateNavigator(item) {
    return StackNavigator({ // eslint-disable-line
      MatchAndStat: {
        screen: (props) => <MatchAndStat
          {...props} stackNavigation={this.props.navigation}
          item={item}
          getRoutes={this.props.getRoutes}
        />
      },
      RecentSeries: {
        screen: (props) => <RecentSeries {...props} />
      },
      RecentSeriesDetail: {
        screen: (props) => <MatchAndStat
          {...props}
          item={props.navigation.state.params.item}
          getRoutes={this.props.getRoutes}
        />
      }
    },
    {
      headerMode: 'none'
    })
  }

  render() {
    const Screen = this._generateNavigator(this.props.navigation.state.params.item)

    return <Screen />
  }
}
