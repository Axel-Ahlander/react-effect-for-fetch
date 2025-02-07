import React from 'react'

function AdviceSlip(props) {
  return (
    <div>AdviceSlip
    <h3>Some advice</h3>
    <p>{props.data}</p>
    <button onClick = {props.handleMoreAdvice}>Get More Advice</button>
    <button onClick={props.handleFavorites}>Save to Favourties</button>
    <br />
    <br />
    </div>
  )
}

export default AdviceSlip