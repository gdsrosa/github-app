'use strict'

import React, { Component } from 'react'

class UserInfo extends Component {
  render () {
    return (
      <div className='user-info'>
        <img src='https://avatars3.githubusercontent.com/u/13604523?v=4' />
        <h1><a href='https://github.com/gdsrosa'>Gabriel Rosa</a></h1>

        <ul className='repos-info'>
          <li>Respositórios: 13</li>
          <li>Seguidores: 1</li>
          <li>Seguindo: 6</li>
        </ul>
      </div>
    )
  }
}

export default UserInfo
