
import { Component } from 'react'

function noop() {}

class DateTime extends Component {
  render() {
    const {
      onChange = noop
    } = this.props

    return (
      <input type='datetime-local' {...this.props}
        onChange={e => onChange(getTime(e), e)} />
    )
  }
}

export default DateTime

// private

function getTime(e) {
  const v = e.target.value
  const d = new Date(v.replace('T', ' '))
  return parseInt(d.getTime() / 1000)
}
