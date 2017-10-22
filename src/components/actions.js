'use strict'

import React from 'react'

const Actions = ({getRepos, getStarred}) => (
  <div className='actions'>
    <button onClick={getRepos} className='btn btn-primary'>Ver Respositórios</button>
    <button onClick={getStarred} className='btn btn-primary'>Ver favoritos</button>
  </div>
)

export default Actions
