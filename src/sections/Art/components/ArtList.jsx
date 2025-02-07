// eslint-disable-next-line no-unused-vars
import React from 'react'
import ArtListItem from './ArtListItem'

function ArtList(props) {
    
  return (
    <div>
        <ul>
            {props.data.map((content , index) => (
                <ArtListItem key = {index} imageUrl = {`${props.regularUrl}${content.imageURL}`} title = {content.title} name = {content.artist} publicationHistory = {content.publicationHistory}/>
            ))}
        </ul>
    </div>
    
  )
}

export default ArtList