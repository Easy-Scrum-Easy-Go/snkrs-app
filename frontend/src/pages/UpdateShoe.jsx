import React from 'react'
import EditForm from '../components/EditForm'
import {useParams} from "react-router-dom"


function UpdateShoe() {

    const {id} = useParams();

  return (
    <div>
        <h1 className='update-shoe-title'>Update Shoe</h1>
        <EditForm shoeId={id}/>
    </div>
  )
}

export default UpdateShoe