import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import NavButton from "./NavButton";

const DesktopNav = styled.nav`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  align-items: center;
  padding: 2em 3em;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const LogoLink = styled(Link)`
color: black;
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
  font-weight: 700;

  &.active,
  &:hover {
    color: var(--accent-color);
  }
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
      <LogoLink to="/hem">
        <Icon icon="ph:moon-bold" width="60" height="60" />
      </LogoLink>
      <NavList>
        {navLinks.map((link) => (
          <NavListItem key={link.url}>
            <NavLink
              to={link.url}
              className={`nav-link${link.url === activeLink ? " active" : ""}`}
            >
              {link.title}
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
