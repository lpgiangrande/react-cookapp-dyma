import styles from "./Header.module.scss";
import logo from "../assets/images/cookchef.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { faHeart } from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img src={logo} alt="logo cookchef"></img>
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <FontAwesomeIcon className="mr-5" icon={faHeart} />
          Wishlist
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        className={`${styles.headerXs}`}
        onClick={() => setShowMenu(true)}
      />
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
