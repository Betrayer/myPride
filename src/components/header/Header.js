import React from "react";
import css from "./header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.menuContainer}>
        <img
          src="https://pythonru.com/wp-content/uploads/2018/12/random-module-icon.png"
          alt="test_img"
          width={100}
        />
        <ul className={css.menuList}>
          <li className={css.menuListItem}>
            <a href="#" className={css.menuListLink}>
              menu
            </a>
          </li>
          <li className={css.menuListItem}>
            <a href="#" className={css.menuListLink}>
              menu
            </a>
          </li>
          <li className={css.menuListItem}>
            <a href="#" className={css.menuListLink}>
              menu
            </a>
          </li>
          <li className={css.menuListItem}>
            <a href="#" className={css.menuListLink}>
              menu
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
