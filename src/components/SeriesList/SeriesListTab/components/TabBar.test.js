import React from 'react'
import TabBar from './TabBar'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<TabBar navigation={{ state: { routes: [] } }} />).toJSON()
  expect(rendered).toBeTruthy()
})

it('render correctly', async () => {
  const tree = renderer.create(<TabBar navigation={{ state: { routes: [] } }} />).toJSON()
  expect(tree).toMatchSnapshot()
})
