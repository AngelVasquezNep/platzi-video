import React from 'react'
import './search.sass'

const Search = (props) => (
  <form className="Search" 
        onSubmit = {props.handleSubmit}
        action=""
    >
    <input
          ref={props.setInput} 
          className="Search-input" 
          type="text" 
          name="search" 
          placeholder="Busca tu video favorito"
          value = { props.value }
          onChange={props.handleChange}
          />
  </form>
)

export default Search