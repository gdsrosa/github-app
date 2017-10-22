'use strict'

import React from 'react'

const Search = ({handleSearch}) => (
  <div className='search'>
    <input
      type='search'
      className='form-control'
      placeholder='Digite o nome de usuário no github'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
