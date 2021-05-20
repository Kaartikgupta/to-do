import React from 'react';
import LogoImg from '../../Assets/Images/favicon.png';
import './Logo.css'
const logo=(props)=>{
    return(
        <div className="Logo">
            <img src={LogoImg} alt="My logo" />
        </div>
    )
}
export default logo;