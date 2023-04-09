import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
const Navbar = () => {
  return (
    <div className="list">
      <header className="warp">
      <Nav>
        <NavMenu>
        <NavLink to="/" >
            Список напрвлений
          </NavLink>
          <NavLink to="/about" >
          Требования
          </NavLink>
          <NavLink to="/blogs" >
          Заявка   
          </NavLink>
          <NavLink to="/zaivka">
            Тест
          </NavLink>

        </NavMenu>
      </Nav>
      </header>
    </div>
  );
};
export default Navbar;