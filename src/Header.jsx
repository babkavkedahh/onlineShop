function Header(props){
    return (
        <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img className="ml-15"width="80" height="80" src="/img/logo.jpg"/>
          <div className="headerinfo">
          <h3 className="text-uppercase">Plusha магазин плюшевых игрушек</h3>
          <p>Плюша - лучший подарок</p>
          </div>    
        </div>
        <ul className="d-flex">
          <li onClick={props.onClickFavor} className="mr-20">
            <img className="hearticoninheader"width="40" height="50" src={"/img/heart.jpg"}/>
          </li> 
          <li onClick={props.onClickCart}className="mr-20">
            <img className="caIcon" width="40" height="50" src="/img/bcarticon.png"/>
            <span className="ml-10">2500 руб.</span>
          </li> 
          <li className="mr-20">
          <img className="userIcon" width="50" height="50" src="/img/brownusericon.png"/>
          <span className="ml-10">userbobiks</span>
          </li>
        </ul>
        </header>
    );
}
export default Header;