import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DescriptionCard from '../componets/DescriptionCard';

function Shoe() {
  const { id } = useParams();
  const [shoe, setShoe] = useState({});

  const getShoe = async (shoeId) => {
    const response = await fetch(`http://localhost:8000/api/sneakers/${shoeId}`);
    const data = await response.json();
    console.log(data.shoe);
    setShoe(data.shoe);
  };

  useEffect(() => {
    getShoe(id);
  }, [id]);

  return (
    <div>
      {shoe ? <DescriptionCard item={shoe} /> : 'Loading...'}
    </div>
  );
}

export default Shoe;