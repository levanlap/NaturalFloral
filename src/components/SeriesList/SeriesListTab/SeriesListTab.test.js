import React from 'react'
import SeriesListTab from './index'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<SeriesListTab game={{ seriesTypes: [{}] }} />).toJSON()
  expect(rendered).toBeTruthy()
})

it('render correctly', async () => {
  const tree = renderer.create(<SeriesListTab game={{ seriesTypes: [{}] }} />).toJSON()
  expect(tree).toMatchSnapshot()
})
