function FavorDrawerCard(){
    return(
        <div className="d-flex align-center cartItem">
            <img className="ml-10"weidht="150px" height="150px" src="/img/goods/4good.webp" />
            <div>
              <p className="text ">Мягкая акула ZAK</p>
            </div>
            <div className="flex-wrap">
              <img className="mr-10 removebutton" weidht="30px" height="30px" src="/img/removebutton.svg" alt="remove"/>
              <img className="mr-10 removebutton" weidht="30px" height="30px" src="/img/addtocart.jpg" alt="addCartBtn"/> 
            </div>
            </div>
            //стиль кнопки добавить в корзину как у ремув кнопки;
    );
}
export default FavorDrawerCard;