'use strict'

import React, { PropTypes} from 'react'

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
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
