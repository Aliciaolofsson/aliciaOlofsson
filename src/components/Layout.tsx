import React, { useState } from "react";
import Navbar from "./Navbar";


interface LayoutProps {
  children: React.ReactNode;
}

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
    <div className="app-container">
      <>
      <Navbar />
      </>
      <main className={`main-content ${isMenuOpen ? 'no-scroll' : ''}`}>{children}</main>
      <>
      </>
    </div>
  );
};

export default Layout;
