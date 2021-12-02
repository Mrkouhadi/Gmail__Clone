import React from 'react'
import './sidebaroption.css'

const SidebarOption = ({Icon, title, number, selected}) => {
    return (
        <div className={`sidebaroption ${selected && 'sidebaroption--active'}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}
export default SidebarOption