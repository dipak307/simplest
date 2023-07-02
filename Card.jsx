import React from "react";
import './index.css';
const cards={
display: "flex",  
height: 100,  
width: 400,  
boxShadow: "0 0 3px 2px #cec7c759",  
alignItems: "center",  
padding: 20,  
borderRadius: 20,  
}
const k={
  weight:"bold",
}
const changeColor=()=>{
  console.log(k.weight)
}
const Card=(props)=>{
    return(
        <>
        <div className={cards}>
    <div className='card'>
      <img src={props.imgSrc} alt='myPic' className='my__img' />
      <div className='card__info'> </div>
      <span className='card__category'> {props.title} </span>
      <h3 className='card__title'> {props.Sname}
      </h3>
      <a href={props.link} target='_blank'>
       <button >Watch Now</button>
      </a>
       <button onClick={changeColor}> Changing Color </button>
    </div>
        </div>
      </>
    )
}
export default Card;