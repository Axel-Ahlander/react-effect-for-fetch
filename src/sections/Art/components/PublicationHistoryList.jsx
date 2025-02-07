import React from 'react'

function PublicationHistoryList({publicationHistory}) {
  return (
    <div>
        <h4>Publication History</h4>
        <ul>
        {publicationHistory.map((history, index) => (
          <li key={index}>{history}</li>
        ))}
        </ul>
    </div>
  )
}

export default PublicationHistoryList
