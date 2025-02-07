import React from 'react'

function UsersListItem({profileImage, fullName, favoriteColor, email}) {
  return (
    <li style={{ background: favoriteColor }}>
        <img src={profileImage} alt={`${fullName}`} />
        <h3>{fullName}</h3>
        <p>Email: {email}</p>
    </li>
  )
}

export default UsersListItem