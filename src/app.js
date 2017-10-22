'use strict'
import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        username: 'Gabriel Rosa',
        login: 'gdsrosa',
        photo: 'https://avatars3.githubusercontent.com/u/13604523?v=4',
        repos: 12,
        followers: 10,
        following: 10
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repos',
        link: '#'
      }]
    }
  }
  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App
