import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc";
import { TbBasketShare } from "react-icons/tb";
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <Link to='/'>
                <FcShop size={30} className="header__logo"/>
            </Link>
            <nav className="header__nav">
             <Link to="cart" className="header__link">
                 <TbBasketShare size={30}/>
             </Link>
            </nav>
        </header>
    )
}

export default Header