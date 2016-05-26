
import { render } from 'react-dom'
import { Component } from 'react'

import {
  Checkbox,
  Textarea,
  Select,
  Radio,
  Input
} from '..'

class App extends Component {
  state = {
    opt: {}
  }

  render() {
    const options = [{
      name: 'one',
      id: 1
    }, {
      name: 'two',
      id: 2
    }, {
      name: 'three',
      id: 3
    }]

    const {
      checkboxChecked,
      radioChecked,
      inputValue,
      textValue,
      opt
    } = this.state

    return (
      <article>
        <section>
          <Input type='number' value={inputValue}
            onChange={v => this.setState({inputValue: v})} />

          <Textarea value={textValue}
            onChange={v => this.setState({textValue: v})} />

          <Checkbox checked={checkboxChecked}
            onChange={checked => this.setState({checkboxChecked: checked})} />

          <Radio checked={radioChecked}
            onChange={checked => this.setState({radioChecked: checked})} />

          <Radio checked={!radioChecked}
            onChange={checked => this.setState({radioChecked: !checked})} />
        </section>

        <section>
          <Select options={options} optLabel='name' optValue='id'
            value={opt.id} onChange={opt => this.setState({opt})} />
        </section>
      </article>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}
