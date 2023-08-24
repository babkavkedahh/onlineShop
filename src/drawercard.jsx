function DrawerCard(){
    return(
        <div className="d-flex align-center cartItem">
            <img className="ml-10"weidht="150px" height="150px" src="/img/goods/4good.webp" />
            <div>
              <p className="text ">Мягкая акула ZAK</p>
              <b>5322 руб.</b>
            </div>
            <img className="mr-10 removebutton" weidht="30px" height="30px" src="/img/removebutton.svg" alt="remove"/>
          </div>
    );
}
export default DrawerCard;