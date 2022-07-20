import React from 'react'
import {useEffect, useState} from 'react'
import ShoesCard from '../components/ShoesCard'

function Shoes() {


const [shoes, setShoes] = useState([])

const getShoesData = async () => {
  const response = await fetch(`http://localhost:8000/api/sneakers`)
  const data = await response.json ()

  console.log('data:',data.shoes)
  setShoes(data.shoes)
  console.log(shoes)
}

useEffect(() => {
  getShoesData() 
}, [])

  return (
    <div>
      <h1>All Shoes</h1>
      <div>
        {shoes.length > 0 ? shoes.map((shoe) => <ShoesCard key = {shoe.id} shoesData = {shoe} />) : 'loading...'}
      </div>
    </div>

  )
}

export default Shoes