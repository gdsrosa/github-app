'use strict'
import React, { Component } from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

class App extends Component {
  render () {
    return (
      <div className='app container-fluid'>
        <Search />
        <UserInfo />
        <Actions />

        <Repos className='repos' title='Repositórios' repos={[{
          name: 'Nome do Repositório',
          link: '#'
        }]} />
        <Repos className='starred' title='Favoritos' repos={[{
          name: 'Nome do Repositório',
          link: '#'
        }]} />
      </div>
    )
  }
}

export default App
