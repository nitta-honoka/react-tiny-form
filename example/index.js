
import { render } from 'react-dom'
import { Component } from 'react'

import {
  Checkbox,
  Textarea,
  Radio,
  Input,

  Select,
  Switch,
  Link
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
      switchChecked,
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
        </section>

        <section>
          <Switch width={78} height={22} checked={switchChecked} label={`I'm Switch`}
            onChange={v => this.setState({switchChecked: v})} />
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
