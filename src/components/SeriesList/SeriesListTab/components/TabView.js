import React from 'react'
import { StyleSheet, View } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import TabBar from './TabBar'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabScreen: {
    flex: 1
  }
})

export default function TabView(props) {
  const {
    game, screenProps, router, navigation
  } = props
  const { routes, index } = navigation.state
  const ActiveScreen = router.getComponentForRouteName(routes[index].routeName)

  return (
    <View style={styles.container}>
      <TabBar navigation={navigation} game={game} />
      <View style={styles.tabScreen}>
        <ActiveScreen
          {...screenProps}
          navigation={addNavigationHelpers({
            dispatch: navigation.dispatch,
            state: routes[index]
          })}
        />
      </View>
    </View>
  )
}
