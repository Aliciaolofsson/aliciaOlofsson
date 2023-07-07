import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import SocialMedia from "./SocialMedia";

interface LayoutProps {
  children: React.ReactNode;
}

const AppContainer = styled.div`
height: 100%;
background: ;
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
        <Header />
      </>
      <main className={`main-content ${isMenuOpen ? 'no-scroll' : ''}`}>{children}
      </main><SocialMedia />
      <>
      </>
    </AppContainer>
  );
};

export default Layout;
