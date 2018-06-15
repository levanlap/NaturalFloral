import React from 'react'
import { View } from 'react-native'

import TabView from './TabView'

import renderer from 'react-test-renderer'

const mockedRouter = { getComponentForRouteName: () => () => (<View />) }
const mockedNavigation = { state: { routes: [{ routeName: '' }], index: 0 } }

it('renders without crashing', () => {
  const rendered = renderer.create(<TabView router={mockedRouter} navigation={mockedNavigation} />).toJSON()
  expect(rendered).toBeTruthy()
})

it('render correctly', async () => {
  const tree = renderer.create(<TabView router={mockedRouter} navigation={mockedNavigation} />).toJSON()
  expect(tree).toMatchSnapshot()
})
