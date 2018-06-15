import React from 'react'
import SeriesList from './SeriesList'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<SeriesList />).toJSON()
  expect(rendered).toBeTruthy()
})

it('render correctly', async () => {
  const tree = renderer.create(<SeriesList />).toJSON()
  expect(tree).toMatchSnapshot()
})
