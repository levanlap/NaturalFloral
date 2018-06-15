import React from 'react'
import Sentry from 'sentry-expo'

export default class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    Sentry.captureException(error)
  }

  render() {
    return this.props.children
  }
}
