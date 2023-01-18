import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import bar3 from "../../images/bars-3.svg";

const Header = () => {
  const links = [
    { id: "1", name: "دوره ها", url: "/courses" },
    { id: "2", name: "مقالات", url: "/home" },
    { id: "3", name: "خدمات", url: "/home" },
    { id: "4", name: "درباره ما", url: "/home" },
  ];
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  window.addEventListener("resize", () => {
    let width = window.innerWidth;
    if (width > 640) {
      setMenu(false);
    }
  });
  window.addEventListener("load", () => {
    let width = window.innerWidth;
    if (width > 640) {
      setMenu(false);
    }
  });
  useEffect(() => {
    setMenu(false);
  }, [location]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (menu) body.style.overflow = "hidden";
    else body.style.overflow = "";
  }, [menu]);

  return (
    <>
      <header className="header">
        <h1 className="header__title">بامبو</h1>

        <div className="header__links">
          {links.map((link) => (
            <Link className="header__link" key={link.id} to={link.url}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="header__login">
          <Link className="header__loginBtn">ورود</Link>
          <Link className="header__loginBtn">ثبت نام</Link>
          <img
            onClick={() => setMenu(!menu)}
            src={bar3}
            className="header__menu"
          />
        </div>
      </header>

      {menu && (
        <div className="menu">
          <Link to="/home" className="header__link">
            خانه
          </Link>
          <Link to="/courses" className="header__link">
            دوره ها
          </Link>
          <Link to="/home" className="header__link">
            مقالات
          </Link>
          <Link to="/home" className="header__link">
            خدمات
          </Link>
          <Link to="/home" className="header__link">
            درباره ما
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
