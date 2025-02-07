// eslint-disable-next-line no-unused-vars
import React from 'react'
import PublicationHistoryList from './PublicationHistoryList'

function ArtListItem({imageUrl, title, name, publicationHistory}) {
  return (
    <li>
        <img src={imageUrl} alt="" />
        <h3>Title: {title}</h3>
        <p>Artist name: {name}</p>
        <PublicationHistoryList publicationHistory = {publicationHistory}/>
        <br />
        <br />
        <br />
        <br />
    </li>
  )
}

export default ArtListItem