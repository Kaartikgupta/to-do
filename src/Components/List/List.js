import React from 'react';
import './list.css'
const list=(props)=>{
    return(
        <div>
           <ul>
               {
                   props.listItems.map((item,index)=>{
                       return <li key={index}>{item}</li>
                   })
               }
           </ul>
        </div>
        
            
    )
}

export default list;