import React from 'react'
import { View } from 'react-native'
import { createNavigator, createNavigationContainer, TabRouter } from 'react-navigation'
import {
  Container, Header,
  Left, Right, Body,
  Button, Text
} from 'native-base'
import { Svg } from 'expo'
import TabView from './components/TabView'
import SeriesList from './components/SeriesList'

const { Rect } = Svg

const Menu = () => (
  <Svg width={20} height={16} viewBox='0 0 20 16'>
    <Rect
      fill='#FFFFFF' width='20' height='4'
      rx='2' ry='2'
    />
    <Rect
      fill='#FFFFFF' y='6' width='15'
      height='4' rx='2' ry='2'
    />
    <Rect
      fill='#FFFFFF' y='12' width='10'
      height='4' rx='2' ry='2'
    />
  </Svg>
)

export default function SeriesListTab({ openMenu, navigation, game }) {
  const tabs = {}
  game.seriesTypes.map((seriesType) => {
    const extraProps = { game, seriesType, stackNavigation: navigation }
    tabs[seriesType.title] = {
      screen: (props) => (<SeriesList {...props} {...extraProps} />)
    }
  })

  const Tabs = createNavigationContainer(createNavigator(TabRouter(tabs))(TabView)) // eslint-disable-line

  return (
    <Container style={{ backgroundColor: '#E8E7E7' }}>
      <Header style={{ backgroundColor: '#388E3C' }}>
        <Left style={{ flex: 0.2 }}>
          <Button transparent onPress={openMenu}>
            <Menu />
          </Button>
        </Left>
        <Body>
          <Text style={{ fontFamily: 'Roboto_medium', color: '#FFFFFF' }}>{game.name}</Text>
        </Body>
        <Right style={{ flex: 0.2 }} />
      </Header>
      <View style={{ flex: 1 }}>
        <Tabs />
      </View>
    </Container>
  )
}
