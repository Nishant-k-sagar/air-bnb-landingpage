import React from 'react';
import '../styleSheets/Card.css';

function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className='card'>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src = {props.img} className='card--c'alt='katie-zaferes' />
            <div className='card--stats'>
                <img src= '/Card/Star1.png' className='card--star' alt='star icon'/>
                <span >{props.rating}</span>
                <span className='gray'>({props.reviewCount}) • </span>
                <span className='gray'>USA</span>
            </div>
                <h2>{props.title}</h2>
                <p><span className='bold'>From ${props.price} </span>/ person</p>
        </div>
        
    )
    }
    
    export default Card;
