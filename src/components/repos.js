'use strict'

import React from 'react'

const Repos = ({className, title, repos}) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      { repos.map((repo, index) => (<li key={repo.link}><a href={repo.link}>{repo.name}</a></li>)) }
    </div>
  )
}

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array
}

export default Repos
