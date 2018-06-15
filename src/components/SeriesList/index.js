import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import PropTypes from 'prop-types'
import SeriesListTab from './SeriesListTab'
import SeriesDetail from './SeriesDetail'

export default class SeriesListScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    game: PropTypes.object,
    getRoutes: PropTypes.func
  }

  _openMenu = () => {
    this.props.navigation.navigate('DrawerOpen')
  }

  _generateNavigator() {
    return StackNavigator({ // eslint-disable-line
      SeriesListTab: {
        screen: (props) => <SeriesListTab {...props} openMenu={this._openMenu} game={this.props.game} />
      },
      SeriesDetail: {
        screen: (props) => <SeriesDetail {...props} {...props} getRoutes={this.props.getRoutes} />
      }
    }, {
      headerMode: 'none'
    })
  }

  render() {
    const Screen = this._generateNavigator()

    return <Screen />
  }
}
