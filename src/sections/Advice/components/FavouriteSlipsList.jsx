import React from 'react'
import AdviceSlip from './AdviceSlip'
import AdviceForFavorite from './AdviceForFavorite'

function FavouriteSlipsList(props) {
    return (
        <div>
          <h3>Favourite Slips List</h3>
          <ul>
            {props.data.map((advice, index) => (
              <li key={index}>
                <AdviceForFavorite data={advice} />
              </li>
            ))}
          </ul>
        </div>
      )
}

export default FavouriteSlipsList