import FavorDrawerCard from './favorDrawerCard';
function FavorDrawer(props){
    return(
        <div className="overlay">
        <div className="favordrawer">
          <div className="d-flex">
            <h1 >Избранное</h1>
            <img onClick={props.onClickRemoveFavor} className="hightRB removebutton" weidht="40px" height="40px" src="/img/removebutton.svg" alt="remove"/>
          </div>
          
          <button className="bluebutton mt-10">Добавить все товары в корзину</button>
          <FavorDrawerCard/>
          <FavorDrawerCard/>
          <FavorDrawerCard/>
          
          
        </div>
      </div>
    );
}
export default FavorDrawer;