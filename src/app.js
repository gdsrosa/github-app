'use strict'
import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  getGithubApiUrl (username, type) {
    const interalUser = username ? `${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users/${interalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      ajax().get(this.getGithubApiUrl(value)).then((result) => {
        this.setState({
          userInfo: {
            username: result.name,
            login: result.login,
            photo: result.avatar_url,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
      })
    }
  }

  getRepos (type) {
    return (e) => {
      const username = this.state.userInfo.login
      ajax().get(this.getGithubApiUrl(username, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            }))
          })
        })
    }
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => { this.handleSearch(e) }}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}

export default App
