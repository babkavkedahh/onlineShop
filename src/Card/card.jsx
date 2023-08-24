import React, { useState } from 'react';

function Card(props){ 
  const [hovered, setHovered] = useState(false); // состояние наведения на изображение
  const [isAdded, setIsAdded]= useState(false );
  const [isLiked, setIsLiked]= useState(false );
const handleMouseEnter = () => {
setHovered(true);
};

const handleMouseLeave = () => {
setHovered(false);
};
const onClickHeartButton=()=>{
  setIsLiked(!isLiked);
}
const onClickPlusButton=()=>{
  setIsAdded(!isAdded);
  //alert("Прежде чем добавить товар в корзину авторизируйтесь на сайте!");

};
return(
<div className="ml-30 card" >

<img className="like" onClick={onClickHeartButton} height="20" weidght="20" src={isLiked ? "/img/heart.jpg": "/img/heart0.jpg"} alt="Plus"/>
<img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} width="200" height="200" src={props.picture} alt="товар"/>
<p className="ml-30 align-center">{props.name}{hovered?props.goodId:""}</p>
<div className="d-flex flex-row">   
  <span className="ml-30 text-uppercase">Цена:</span>
  <b className="ml-5 mr-10">{props.price} </b>
  <img className="like" onClick={onClickPlusButton} height="20" weidght="20" src={isAdded ? "/img/mark.png": "/img/plus.png"} alt="Plus"/>

</div>
<div className="props ml-30 text-capitalize "> 
    {hovered?props.name1:""}
  </div>
  <div className="props ml-30 text-capitalize">
    {hovered?props.color:""}
  </div>
  <div className="props ml-30 text-capitalize">
    {hovered?props.size:""}
  </div>
</div>);}
export default Card;
