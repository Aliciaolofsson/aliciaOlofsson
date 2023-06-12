import { Link } from "react-router-dom";
import styled from "styled-components";

const BookButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px black;
  padding: 0.6em 1.2em;
  border-radius: 10px;
background-color: transparent;
  font-weight: 700;
  font-size: 18px;

  &:hover {
    background-color: var(--accent-color);
    transition: 0.1s ease-in-out;
    cursor: pointer;
  }
`;

export default function NavButton() {
  return (
    <Link to="/contact">
      <BookButton as="button">Contact</BookButton>
    </Link>
  );
}
