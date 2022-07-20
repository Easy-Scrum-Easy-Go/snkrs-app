import React from 'react';

function DescriptionCard({item}) {
  return (
    <div>
        <h2>{item.name}</h2>
        <img src={item.grid_picture_url} alt={item.name} />
        <h4>{item.retail_price}</h4>
        <h4>{item.story_html}</h4>
    </div>
  )
}

export default DescriptionCard;