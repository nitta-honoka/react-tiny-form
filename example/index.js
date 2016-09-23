
import { render } from 'react-dom'
import { Component } from 'react'

import {
  DateTime,
  Checkbox,
  Textarea,
  Radio,
  Input,

  Select,
  Link
} from '..'

class App extends Component {
  state = {
    opt2: {},
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

    const options2 = [{
      label: 'one',
      value: 1
    }, {
      label: 'two',
      value: 2
    }, {
      label: 'three',
      value: 3
    }]

    const {
      opt2,
      opt
    } = this.state

    return (
      <article>
        <section>
          <DateTime onChange={v => alert(new Date(v * 1000))} />

          <Input type='number' placeholder='number' onChange={
            v => this.setState({inputValue: v})
          } />

          <Textarea onChange={
            v => this.setState({textValue: v})
          } />

          <Checkbox onChange={
            checked => this.setState({checkboxChecked: checked})
          } />

          <Checkbox checked={true} />

          <Radio checked={true} />

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

          <Select options={options2} value={opt2.id}
            placeholder='this is placeholder'
            onChange={opt2 => this.setState({opt2})} />
        </section>

        <button onClick={
          () => console.log(this.state)
        }>console</button>

        <section>
          <Link href='//github.com/haoxins'>me</Link>
        </section>
      </article>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}
