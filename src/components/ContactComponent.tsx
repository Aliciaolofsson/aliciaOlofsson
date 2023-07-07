import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10em;
`;
const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  margin: 0 6em 1em 6em;
  text-align: center;
  line-height: 2em;
`;

const EmailLink = styled.a`
  padding: 1em;
  margin: 1em;
  font-size: 18px;
  background: transparent;
  border: solid 2px black;
  color: black;
  font-weight: 800;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background: #d9c3ff58;
  }
`;

export default function ContactComponent() {
  return (
    <Container>
      <Heading>
        Hi, I'm currently looking for a new job opportunity. <br /> If I sound
        interesting to you and your team,
        <br /> please feel free to reach out!
      </Heading>
      <EmailLink href="mailto:alicia-olofsson@hotmail.com">
        Send a message
      </EmailLink>
    </Container>
  );
}
