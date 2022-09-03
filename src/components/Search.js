import React from 'react'

export const Search = (props) => {

  let onSubmit = props.onSubmit
  let onChange =  props.onChange
  let value = props.value

  return (
    <form onSubmit = {(e)=>onSubmit(e)} >
      <input
        type="text"
        name="search"
        value={value}
        placeholder="Search Games"
        onChange={onChange}>
      </input>
      <button type = 'submit'>Search</button>
    </form>
  )
}

export default Search
