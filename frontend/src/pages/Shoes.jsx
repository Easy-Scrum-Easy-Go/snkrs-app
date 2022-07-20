import React, { useState, useEffect } from 'react';

import DisplayCard from '../components/DisplayCard';

function Shoes() {
  const [shoes, setShoes] = useState([]);

  const getShoesData = async () => {
    const response = await fetch(`http://localhost:8000/api/sneakers`);
    const data = await response.json();

    console.log('data:', data.shoes);
    setShoes(data.shoes);
    console.log(data.shoes);
  }

  useEffect(() => {
    getShoesData();
  }, []);

  return (
    <div>
      <h1>SNKRS APP</h1>
      <div>
        {shoes.length > 0 ? shoes.map((shoe) => <DisplayCard key={shoe.id} shoesData={shoe} />) : 'Loading..'}
      </div>
    </div>
  );
}

export default Shoes;