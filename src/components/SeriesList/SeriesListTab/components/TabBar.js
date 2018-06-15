import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from 'native-base'
import Tracker from '../../../../services/tracker'

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 28,
    margin: 10
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#388E3C',
    borderWidth: 1
  },
  tabCenter: {
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  tabLeft: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  tabRight: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  selectedTab: {
    backgroundColor: '#388E3C'
  },
  tabLabel: {
    fontFamily: 'Roboto_medium',
    fontSize: 12,
    color: '#388E3C'
  },
  selectedLabel: {
    color: '#FFFFFF'
  }
})

export default function CustomTabBar({ navigation }) {
  const { index, routes } = navigation.state
  return (
    <View style={styles.tabContainer}>
      {routes.map((route, routeIndex) => {
        const tabStyles = [styles.tab]
        const labelStyles = [styles.tabLabel]
        if (routeIndex === 0) {
          tabStyles.push(styles.tabLeft)
        }
        else if (routeIndex === routes.length - 1) {
          tabStyles.push(styles.tabRight)
        }
        else {
          tabStyles.push(styles.tabCenter)
        }

        if (routeIndex === index) {
          tabStyles.push(styles.selectedTab)
          labelStyles.push(styles.selectedLabel)
        }
        return (
          <TouchableOpacity
            onPress={() => {
              Tracker.hitScreen(`Dota2/SeriesList/${route.routeName}`)
              navigation.navigate(route.routeName)
            }}
            style={tabStyles}
            key={route.routeName}
          >
            <Text style={labelStyles}>{route.routeName}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
