
### react-tiny-form

* Textarea
  - `onChange(value, event)`

* Input
  - `onChange(value, event)`

* Checkbox
  - `onChange(checked, event)`

* Radio
  - `onChange(checked, event)`

* Switch
  ```jsx
  <Switch width={78} height={22} checked={switchChecked} label={`I'm Switch`}
    onChange={v => this.setState({switchChecked: v})} />
  ```

* Select
  ```jsx
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
  <Select options={options} optLabel='name' optValue='id'
    value={opt.id} onChange={opt => this.setState({opt})} />
  ```

### License
MIT
