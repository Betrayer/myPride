import React from "react";
import css from "./header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.menu}>
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
      </nav>
    </header>
  );
};

export default Header;
