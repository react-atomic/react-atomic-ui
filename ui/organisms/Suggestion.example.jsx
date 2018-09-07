import React, {PureComponent} from 'react'

import {
   Suggestion 
} from 'react-atomic-organism'


const data = [
  'abc',
  'abb',
  'acc'
]


class SuggestionExample extends PureComponent
{
  state = {
    results: []
  }

  handleChange = (e, value) => {
    if (!value.length) {
      this.setState({results: data})
      return
    }
    const results = []
    data.forEach((v, k) => {
      if (value.length && -1 !== v.indexOf(value)) {
        results.push(v)
      }
    })
    this.setState({results})
  }

  handleItemClick = (e, item) => {
    this.suggestion.setValue(item)
  }

  render()
  {
    const {results} = this.state
    return (
      <Suggestion
        ref={el=>this.suggestion = el}
        onChange={this.handleChange}
        results={results}
        itemOnClick={this.handleItemClick}
      />
    )
  }
}

export default SuggestionExample
