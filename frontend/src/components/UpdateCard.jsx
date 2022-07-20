import React from 'react'

function UpdateCard({shoeData}) {
  return (
    <div>
        <h1>{shoeData.name}</h1>
        <img src={shoeData.grid_picture_url} alt={shoeData.name} />
        <h2>${shoeData.retail_price}</h2>
        <h4>{shoeData.story_html}</h4>
    </div>
  )
}

export default UpdateCard