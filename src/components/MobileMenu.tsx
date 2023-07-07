import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hamburger from "./Hamburger";

interface MobileMenuProps {
  menuItems: string[];
  isMenuOpen: boolean;
  onMenuOpen: () => void;
  onMenuClose: () => void;
}

interface NavLink {
  title: string;
  url: string;
}

const navLinks: NavLink[] = [
  { title: 'Home', url: '/home' },
  { title: 'Portfolio', url: '/portfolio' },
  { title: 'Contact', url: '/contact' },

];

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: white;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }c
`;

const MenuToggle = styled.button`
  display: flex;
  block;
  border-radius: 0.5em;
  background-color: var(--accent-color);
  border: none;
  cursor: pointer;
  height: 4em;
  width: 4em;
`;

const Menu = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 90vh;
  width: 100vw;
`;

const MenuLink = styled(Link)`
  color: black;
  font-weight: 700;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 10em;
`;

const MenuItem = styled.li`
  margin: 3em 0;
  cursor: pointer;
  font-size: 1.5em;
  text-align: center;

  &:nth-child(3) {
    background-color: var(--accent-color);
    border-radius: 10px;
    border: solid 3px black;
    padding: 15px;
  }

  &:nth-child(3):hover {
    background: pink;

  }



`;

const MobileNavbar = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: center;
  width: 100vw;
  padding: 2em;
`;

const MobileLogo = styled.div`
  font-size: 30px;
  font-weight: 600;


  @media (max-width: 400px) {

    width: 25%;
  }
`;

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuItems,
  isMenuOpen,
  onMenuOpen,
  onMenuClose,
}) => {
  const [isScrollable, setIsScrollable] = useState(true);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isMenuOpen) {
      body?.classList.add("no-scroll");
      setIsScrollable(false);
    } else {
      body?.classList.remove("no-scroll");
      setIsScrollable(true);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      onMenuClose();
    } else {
      onMenuOpen();
    }
  };

  const handleMenuItemClick = () => {
    onMenuClose();
  };

  return (
    <MobileMenuContainer>
      <MobileNavbar>
        <MobileLogo>AO</MobileLogo>
        <MenuToggle className="menu-toggle" onClick={toggleMenu}>
          <Hamburger open={isMenuOpen} onClick={toggleMenu} />
        </MenuToggle>
      </MobileNavbar>
      {isMenuOpen && (
        <div className="overlay">
          <Menu>
            <MenuList>
              {navLinks.map((link) => (
                <MenuItem key={link.url}>
                  <MenuLink to={link.url} onClick={handleMenuItemClick}>
                    {link.title}
                  </MenuLink>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      )}
      {!isScrollable && <div className="overlay-scroll" />}
    </MobileMenuContainer>
  );
};

export default MobileMenu;
