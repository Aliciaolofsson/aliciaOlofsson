import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";

interface LayoutProps {
  children: React.ReactNode;
}

const AppContainer = styled.div`
height: 100%;
background: rgb(237,242,255);
background: linear-gradient(45deg, rgba(237,242,255,1) 0%, white 20%, rgba(244,229,255,1) 40%, rgba(206,209,295) 70%, rgba(230,245,255,1) 100%);
`;

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = (): void => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleMenuClose = (): void => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const headerProps = {
    isMenuOpen,
    onMenuOpen: handleMenuOpen,
    onMenuClose: handleMenuClose,
  };

  return (
    <AppContainer>
      <>
        <Navbar />
      </>
      <main className={`main-content ${isMenuOpen ? 'no-scroll' : ''}`}>{children}
      </main><SocialMedia />
      <>
      </>
    </AppContainer>
  );
};

export default Layout;
