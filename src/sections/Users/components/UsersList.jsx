import React from 'react'
import UsersListItem from './UsersListItem'

function UsersList(props) {
  return (
    <>
    <ul>
        {props.data.map((content, index) => (
            <UsersListItem key = {index} profileImage={content.profileImage} fullName={`${content.firstName} ${content.lastName}`} favoriteColor={content.favouriteColour} email = {content.email}/>
        ))}
    </ul>
    </>
    
  )
}

export default UsersList