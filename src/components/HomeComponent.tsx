import styled from "styled-components";

const Introduction = styled.div`
  display: flex;
  align-items: center;
  padding: 5em;

  h1 {
    border-radius: 15px;
    font-weight: 400;

    font-size: 5vw;
  }

  span {
    font-weight: 900;
  }

  h2 {
    font-weight: 400;

    font-size: 1.8vw;
    line-height: 1.5em;
    margin-top: 1.5em;
  }
`;

const AboutMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  height: 40vh;
`;

export default function HomeComponent() {
  return (
    <>
      <Introduction>
        <div>
          <h1>
            Hello, <br /> my name is <span>Alicia</span>
          </h1>
          <h2>
            I'm an aspiring <span>junior frontend developer</span> with 
            a <br /> creative mind and a passion for code
          </h2>
        </div>
      </Introduction>
      <AboutMe>
        <p>
         
        </p>
      </AboutMe>
    </>
  );
}
