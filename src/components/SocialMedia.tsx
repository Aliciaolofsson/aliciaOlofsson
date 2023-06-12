import { Icon } from "@iconify/react";
import styled from "styled-components";

interface SocialMediaProfile {
  name: string;
  url: string;
  icon: string;
}

interface SocialMediaComponentProps {
  profiles: SocialMediaProfile[];
}

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 1em;
  left: 0;
  right: 0;
`;

const SocialMediaLink = styled.a`
  margin: 1em;
  font-size: 24px;
  color: #333;

  &:hover {
    color: #666;
  }
`;

const SocialMediaComponent: React.FC<SocialMediaComponentProps> = ({
  profiles,
}) => {
  return (
    <SocialMediaContainer>
      {profiles.map((profile) => (
        <SocialMediaLink
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          key={profile.name}
        >
          <Icon icon={profile.icon} />
        </SocialMediaLink>
      ))}
    </SocialMediaContainer>
  );
};

const App: React.FC = () => {
  const socialMediaProfiles: SocialMediaProfile[] = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/aliciaolofssoon",
      icon: "simple-icons:instagram",
    },
    {
      name: "GitHub",
      url: "https://github.com/Aliciaolofsson",
      icon: "simple-icons:github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alicia-olofsson-b23b25242/",
      icon: "simple-icons:linkedin",
    },
  ];

  return (
    <div>
      <SocialMediaComponent profiles={socialMediaProfiles} />
    </div>
  );
};

export default App;
