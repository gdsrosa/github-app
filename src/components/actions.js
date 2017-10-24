'use strict'

import React, { PropTypes } from 'react'

const Actions = ({getRepos, getStarred}) => (
  <div className='actions'>
    <button onClick={getRepos} className='btn btn-primary'>Ver Respositórios</button>
    <button onClick={getStarred} className='btn btn-primary'>Ver favoritos</button>
  </div>
)

Actions.propType = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
