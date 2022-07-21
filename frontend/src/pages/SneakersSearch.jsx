import React, { useState, useEffect } from 'react';

import '../CSS/index.css';

function SneakersSearch() {

    const [shoes, setShoes] = useState([])

    const getShoesData = async () => {
        const response = await fetch(`http://localhost:8000/api/sneakers`)
        const data = await response.json()

        console.log('data:', data.shoes)
        setShoes(data.shoes)
        console.log(shoes)
    }

    useEffect(() => {
        getShoesData()
    }, []);

    return (
        <div>
            <input
                class="form-control me-2"
                type="search"
                placeholder="Search for Sneakers..."
                aria-label="Search"
            // onChange={e => setQuery(e.target.value)}
            />

            <table className='search-table'>
                <tbody>
                    <tr>
                        <th className='search-title'>Sneaker</th>
                    </tr>
                    {shoes.map((shoe) => <tr>{shoe.name} <img src={shoe.grid_picture_url} alt="test"></img></tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default SneakersSearch;