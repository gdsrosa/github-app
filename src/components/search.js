'use strict'

import React, { PropTypes } from 'react'

const Search = ({isDisabled, handleSearch}) => (
  <div className='search'>
    <input
      type='search'
      className='form-control'
      placeholder='Digite o nome de usuário no github'
      onKeyUp={handleSearch}
      disabled={isDisabled}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
