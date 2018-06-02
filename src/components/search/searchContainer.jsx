import React,{Component} from 'react'
import Search from './search'
import store from '../../store'


class SearchContainer extends Component {
  state = {
    value: ""
  }
  
  handleSubmit = ev => {
    ev.preventDefault()
    store.dispatch({
      type: 'ADD_SONG',
      payload: {
        title: this.input.value
      }
    })
    this.setState({
      value: ''
    })
  }

  setInputRef = element => {
    this.input = element
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }

  render () {
    return (
      <Search 
        setInput = { this.setInputRef }
        handleSubmit = { this.handleSubmit }
        handleChange = {this.handleInputChange}
        value = { this.state.value }
      />
    )
  }
}

export default SearchContainer