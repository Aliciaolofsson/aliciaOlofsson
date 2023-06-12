import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import NavButton from "./NavButton";

const DesktopNav = styled.nav`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  align-items: center;
  padding: 2em 3em;
  background: #ffffff58;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const LogoLink = styled(Link)`
  color: black;
  font-size: 1.4em;
`;

const NavList = styled.ul`
  display: flex;
  place-items: center;
  justify-content: space-between;
  margin: 0 12vw 0 10vw;
`;

const NavListItem = styled.li`
  list-style: none;
  margin: 0 2em;
`;

const NavLink = styled(Link)`
  list-style: none;
  color: black;
  font-size: 18px;
  font-weight: 700;
  position: relative;
  cursor: pointer;

  &:hover {
    .underline {
      transform: scaleX(1);
    }
  }

  &.active {
    .underline {
      transform: scaleX(1);
    }
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: black;
  transform-origin: left center;
  transform: scaleX(0);
  transition: transform 0.3s ease;
`;

const NavButtonContainer = styled.div`
  justify-self: flex-end;
`;

interface NavLink {
  title: string;
  url: string;
}

function Navbar() {
  const navLinks: NavLink[] = [
    { title: "Home", url: "/home" },
    { title: "Portfolio", url: "/portfolio" },
  ];

  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <DesktopNav>
      <LogoLink to="/home">
        <h1>AO</h1>
      </LogoLink>
      <NavList>
        {navLinks.map((link) => (
          <NavListItem key={link.url}>
            <NavLink
              to={link.url}
              className={`nav-link${link.url === activeLink ? " active" : ""}`}
            >
              {link.title}
              <Underline className="underline" />
            </NavLink>
          </NavListItem>
        ))}
      </NavList>
      <NavButtonContainer>
        <NavButton />
      </NavButtonContainer>{" "}
    </DesktopNav>
  );
}

export default Navbar;
