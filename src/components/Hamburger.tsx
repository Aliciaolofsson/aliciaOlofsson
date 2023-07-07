import React from 'react';
import styled from 'styled-components';

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
}

const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const HamburgerBar = styled.div<{ open: boolean }>`
  width: 55%;
  height: 5px;
  margin: 2px 0;
  border-radius: 4px;
  background-color: #000;
  transition: all 0.3s;


  &:first-child {
    width: ${({ open }) => (open ? '25px' : '')};
    transition: ${({ open }) => (open ? 'width 0.2s ease-in' : 'width 0.4s ease-in-out')};
  }

  &:nth-child(2) {
    width: ${({ open }) => (open ? '20px' : '')};
    transition: ${({ open }) => (open ? 'width 0.1s ease-in' : 'width 0.2s ease-in-out')};
  }

  &:last-child {
    width: ${({ open }) => (open ? '25px' : '')};
    transition: ${({ open }) => (open ? 'width 0.3s ease-in' : 'width 0.1s ease-in-out')};
  }
`;

const Hamburger: React.FC<HamburgerProps> = ({ open, onClick }) => {
  return (
    <HamburgerWrapper onClick={onClick}>
      <HamburgerBar open={open} />
      <HamburgerBar open={open} />
      <HamburgerBar open={open} />
    </HamburgerWrapper>
  );
};

export default Hamburger
