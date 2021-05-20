import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
const toolbar=(props)=>{
    return(
        <div className="Toolbar">
            <Logo />
        </div>
    )
}
export default toolbar;