
import { Component, PropTypes } from 'react'
import pick from 'lodash.pick'

function noop() {}

export class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onEnter: PropTypes.func
  }

  render() {
    const {
      onChange = noop,
      onEnter
    } = this.props

    const props = pick(this.props, 'placeholder', 'defaultValue', 'value', 'type')
    if (onEnter) {
      props.onKeyPress = e => {
        if (e.key === 'Enter') {
          onEnter(e.target.value, e)
        }
      }
    }

    return (
      <input {...props} onChange={
        e => onChange(e.target.value, e)
      } />
    )
  }
}

export class Textarea extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  render() {
    const {
      onChange = noop
    } = this.props

    return (
      <textarea {...this.props} onChange={
        e => onChange(e.target.value, e)
      } />
    )
  }
}

export class Checkbox extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  render() {
    const {
      onChange = noop
    } = this.props

    return (
      <input {...this.props} type='checkbox' onChange={
        e => onChange(e.target.checked, e)
      } />
    )
  }
}

export class Radio extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  render() {
    const {
      onChange = noop
    } = this.props

    return (
      <input {...this.props} type='radio' onChange={
        e => onChange(e.target.checked, e)
      } />
    )
  }
}
