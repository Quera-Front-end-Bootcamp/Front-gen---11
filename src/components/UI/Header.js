import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
const Header = () => {
  const links = [
    { id: "1", name: "دوره ها", url: "/courses" },
    { id: "2", name: "مقالات", url: "/home" },
    { id: "3", name: "خدمات", url: "/home" },
    { id: "4", name: "درباره ما", url: "/home" },
  ];
  return (
    <header className="header">
      <h1 className="header__title">بامبو</h1>
      <nav className="header__links">
        <ul className="header__links--link">
          {links.map((link) => (
            <li className="header__links--link-item" key={link.id}>
              <Link className="header__links--link-item-link" to={link.url}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__login">
        <Link className="header__loginBtn">ورود</Link>
        <Button color="main" freeSize="true">
          <Link className="header__loginBtn">ثبت نام</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
