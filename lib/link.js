
import { Component } from 'react'

class Link extends Component {
  render() {
    const {
      children
    } = this.props

    return (
      <a target='_blank' rel='noopener noreferrer' {...this.props}>
        {children}
      </a>
    )
  }
}

export default Link
