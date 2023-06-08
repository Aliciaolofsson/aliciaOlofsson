import { Link } from "react-router-dom";
import styled from "styled-components";

const BookButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px black;
  padding: 1em;
  border-radius: 5px;
background-
  font-weight: 700;
  font-size: 14px;

  &:hover {
    background-color: var(--secondary-color);
    transition: 0.1s ease-in-out;
  }
`;

export default function NavButton() {
  return (
    <Link to="/contact">
      <BookButton as="button">Get In Touch</BookButton>
    </Link>
  );
}
