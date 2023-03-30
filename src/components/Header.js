import styles from "./Header.module.scss";
import logo from '../assets/images/cookchef.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid'; 
import { faShoppingBasket } from '@fortawesome/fontawesome-free-solid'; 


function Header() {
    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>

            <FontAwesomeIcon icon={faBars} />
            <div className="flex-fill">
                <img src={ logo } alt="logo cookchef"></img>
            </div>
            <ul>
                <button className="mr-5 btn btn-reverse-primary">
                    <FontAwesomeIcon className="mr-5" icon={faShoppingBasket} />
                    panier
                </button>
                <button className="btn btn-primary">
                    connexion
                </button>
            </ul>

        </header>
    );
}

export default Header;