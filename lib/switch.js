
import './switch.css'

import { Component, PropTypes } from 'react'

function noop() {}

class Switch extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
    checked: PropTypes.bool,
    label: PropTypes.string
  }

  static defaultProps = {
    checked: true,
    onChange: noop,
    height: 18,
    width: 32,
    label: ''
  }

  render() {
    const {
      onChange,
      checked,
      height,
      width,
      label
    } = this.props

    const style = {
      borderRadius: px(height / 2 | 0),
      height: px(height),
      width: px(width),
    }

    const spanStyle = {
      height: px(height - 6),
      width: px(height - 6)
    }
    if (checked) {
      spanStyle.left = px(width - height + 2)
    }

    const labelStyle = {
      left: '8px',
    }
    if (!checked) {
      labelStyle.left = px(height + 4)
    }
    // react: custom tag - use class, not className
    return (
      <tiny-switch style={style} class={checked ? 'checked' : ''}
        onClick={() => onChange(!checked)}>
        <label style={labelStyle}>{label}</label>
        <span style={spanStyle}></span>
      </tiny-switch>
    )
  }
}

export default Switch

/**
 * private
 */

function px(n) {
  return n + 'px'
}
