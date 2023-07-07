import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

interface HeaderProps {
  [key: string]: any;
}

function Header(props: HeaderProps) {
  const { isMenuOpen, onMenuOpen, onMenuClose } = props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <Navbar />
      <MobileMenu
        menuItems={[]}
        isMenuOpen={isMobileMenuOpen}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
      />
    </header>
  );
}

export default Header;
