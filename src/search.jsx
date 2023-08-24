import React, { useState } from 'react';
function Search(props){
    const [ setHovered] = useState(false); // состояние наведения на изображение
const handleMouseEnter = () => {
    setHovered(true);
};
    
const handleMouseLeave = () => {
    setHovered(false);
};
const onClickSearch=()=>{
//
}
return (<div className="search-block d-flex" >
    <img  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="ml-10" width="15" height="15" src="/img/searchicon.png" alt="search"/>
    <input placeholder="Поиск товаров..." onClick={props.onClickSearch} />
</div>)}
export default Search;