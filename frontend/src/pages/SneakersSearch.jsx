import React, { useState, useEffect, useParams } from 'react'
import CSS from "../CSS/index.css"
import {Link} from "react-router-dom"

function SneakersSearch() {

    const [shoes, setShoes] = useState([])
    const [query, setQuery] = useState("")
    console.log(query)


    const getShoesData = async () => {
        const response = await fetch(`http://localhost:8000/api/sneakers`)
        const data = await response.json()

        console.log('data:', data.shoes)
        setShoes(data.shoes)
        console.log(shoes)
    }

    useEffect(() => {
        getShoesData()
    }, [])


    return (
        <div>
            <div className='search-bar-container'>
                <input
                    class="form-control me-2 search-bar"
                    type="search"
                    placeholder="Search for Sneakers..."
                    aria-label="Search"
                    onChange={e => setQuery(e.target.value)}
                />
            </div>

            <table className='search-table'>
                <tbody>
                    <tr>
                        <th className='search-title'>Sneaker</th>
                    </tr>
                    {shoes.filter(shoe => shoe.name.toLowerCase().includes(query)).map((shoe) => <tr>{shoe.name} <img src={shoe.grid_picture_url} alt="test"></img><Link to={`/sneakers/${shoe.id}`}>Go To Shoe</Link></tr>)}
                    
                </tbody>
            </table>
        </div>
    )
}

export default SneakersSearch