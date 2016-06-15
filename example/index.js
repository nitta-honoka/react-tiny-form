
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
          <Input type='number' placeholder='number' onChange={
            v => this.setState({inputValue: v})
          } />

          <Textarea onChange={
            v => this.setState({textValue: v})
          } />

          <Checkbox onChange={
            checked => this.setState({checkboxChecked: checked})
          } />

          <Radio name='radio' value='radio-a' onChange={
            checked => this.setState({checkedRadio: 'a:' + checked})
          } />

          <Radio name='radio' value='radio-b' onChange={
            checked => this.setState({checkedRadio: 'b:' + checked})
          } />
        </section>

        <section>
          <Select options={options} optLabel='name' optValue='id'
            value={opt.id} onChange={opt => this.setState({opt})} />
        </section>

        <button onClick={
          () => console.log(this.state)
        }>console</button>
      </article>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}
