import React from 'react'
import { useSelector } from 'react-redux'


function Photo() {
const photo = useSelector(state => state.photo)
    return (
        <div className="Photo">
            <img src={photo} alt="author" />
        </div>
    )
}

export default Photo
