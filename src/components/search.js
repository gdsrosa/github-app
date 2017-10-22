'use strict'

import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (
      <div className='search'>
        <input type='search' className='form-control' placeholder='Digite o nome de usuário no github' />
      </div>
    )
  }
}

export default Search
