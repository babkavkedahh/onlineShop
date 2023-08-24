import DrawerCard from './drawercard.jsx';
function Drawer(props){
    return(
        <div className="overlay">
        <div className="drawer ">
          <div className="d-flex">
            <h1 >Корзина</h1>
            <img onClick={props.onClickRemove}className="hightRB removebutton" weidht="40px" height="40px" src="/img/removebutton.svg" alt="remove"/>
          </div>
          <ul>
            <li className="d-flex">
              <span>ИТОГО:</span>
              <div></div>
              <b>12409 руб.</b>
            </li>

          </ul>
          <button className="bluebutton mt-10">Оформить заказ</button>
          <DrawerCard/>
          <DrawerCard/>
          <DrawerCard/>
          <DrawerCard/>
          <DrawerCard/>
          
          
          
        </div>
      </div>
    );
}
export default Drawer;