
import './App.css';
import Header from './Header';
import Drawer from './drawer1';
import FavorDrawer from './favorDrawer';
import Card from './Card/card';
import Search from './search';
import React, { useState } from 'react';
const arr=[
   { name:"Плюшевый медведь BOB", picture:"img/goods/firstgood.avif", price:"2150 руб.", name1:"медведь", color:"коричневый", size:"L",goodId:"2"},
   { name:"Плюшевый медведь POLY", picture:'img/goods/2good.jpg', price:"1312 руб.", name1:"медведь", color:"серый", size:"L"},
   { name:"плюшевая лама POPI", picture:"/img/goods/3good.jpg", price:"2156 руб.", name1:"лама", color:"розовая", size:"L"},
   { name:"Мягкая акула ZAK", picture:"/img/goods/4good.webp", price:"5322 руб.", name1:"акула", color:"синяя", size:"L"},
   { name:"Плюшевый медведь BOB", picture:"img/goods/firstgood.avif", price:"2150 руб.", name1:"медведь", color:"коричневый", size:"L",goodId:"2"},
   { name:"Плюшевый медведь POLY", picture:'img/goods/2good.jpg', price:"1312 руб.", name1:"медведь", color:"серый", size:"L"},
   { name:"плюшевая лама POPI", picture:"/img/goods/3good.jpg", price:"2156 руб.", name1:"лама", color:"розовая", size:"L"},
   { name:"Мягкая акула ZAK", picture:"/img/goods/4good.webp", price:"5322 руб.", name1:"акула", color:"синяя", size:"L"},
   { name:"Плюшевый медведь BOB", picture:"img/goods/firstgood.avif", price:"2150 руб.", name1:"медведь", color:"коричневый", size:"L",goodId:"2"},
   { name:"Плюшевый медведь POLY", picture:'img/goods/2good.jpg', price:"1312 руб.", name1:"медведь", color:"серый", size:"L"},
   { name:"плюшевая лама POPI", picture:"/img/goods/3good.jpg", price:"2156 руб.", name1:"лама", color:"розовая", size:"L"},
   { name:"Мягкая акула ZAK", picture:"/img/goods/4good.webp", price:"5322 руб.", name1:"акула", color:"синяя", size:"L"}
   
   
];
function App() {
  const [favorOpened,setFavorOpened]=useState(false);
  const [cartOpened,setCartOpened]=useState(false);
  return (
    <div className="wrapper clear">
      
      {cartOpened? <Drawer onClickRemove={()=>setCartOpened(false)}/>: null}
      {favorOpened? <FavorDrawer onClickRemoveFavor={()=>setFavorOpened(false)}/>:null}
      <Header onClickFavor={()=>setFavorOpened(true)} onClickCart={()=>setCartOpened(true)} />
      <div classname="content">
        <h1 className="ml-30 ">Все товары 
          <Search
            onClickSearch={()=>console.log('Нажали на поисковую строку')}
          />
        </h1>
        
        
        <div className="tovari ml-20 d-flex flex-wrap">
          {arr.map((obj)=>(
            <Card
              name={obj.name}
              picture={obj.picture}
              price={obj.price}
              name1={obj.name1}
              color={obj.color}
              size={obj.size}
              goodId={obj.goodId}
              onClickPlusButton={()=>console.log('Нажали на плюс')}
            />
          ))}
        

      </div>
      
      </div>
    </div>
  );
}

export default App;

