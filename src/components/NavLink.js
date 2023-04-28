import React from 'react'
import {useSelector} from 'react-redux'

function NavLink(props) {
const bgColor = useSelector(state => state.color3)
    return (
        <div className="NavLink" style={{'backgroundColor': bgColor}}>
            <p>{props.content}</p>
        </div>
    )
}

export default NavLink
