
import { Component, PropTypes } from 'react'

class Select extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,

    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),

    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),

    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    optLabel: PropTypes.string,
    optValue: PropTypes.string
  }

  static defaultProps = {
    optLabel: 'label',
    optValue: 'value'
  }

  onChange = e => {
    const {
      optValue,
      onChange,
      options,
    } = this.props

    const v = e.target.value

    const opt = options.filter(o => String(o[optValue]) === v)[0]

    onChange(opt)
  }

  render() {
    const {
      defaultValue,
      placeholder,
      optLabel,
      optValue,
      options,
      value,
    } = this.props

    // https://github.com/facebook/react/issues/2803
    const props = {}
    if (typeof value !== 'undefined') {
      props.value = String(value)
    } else if (typeof defaultValue !== 'undefined') {
      props.defaultValue = defaultValue
    } else if (typeof placeholder !== 'undefined') {
      props.defaultValue = '__placeholder__'
    } else {
      props.value = ''
    }

    // fix: Select value not exist
    let valueNotExists = (typeof props.value !== 'undefined') ? true : false
    for (let i = 0; i < options.length; i++) {
      if (String(options[i][optValue]) === String(value)) {
        valueNotExists = false
        break
      }
    }

    return (
      <select onChange={this.onChange} {...props}>
        {
          !!placeholder && (
            <option value='__placeholder__' disabled>{placeholder}</option>
          )
        }

        {
          valueNotExists && (
            <option key={-1} value={String(value)} />
          )
        }

        {
          options.map((o, i) => (
            <option key={i} value={String(o[optValue])}>
              {o[optLabel]}
            </option>
          ))
        }
      </select>
    )
  }
}

export default Select
