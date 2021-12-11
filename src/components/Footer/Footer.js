import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { LinkItem,FooterWrapper,SocialIconsContainer,CompanyContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkItem>© 2021 CraftzTech. All Rights Reserved.</LinkItem>
      <br />
      <CompanyContainer>
      <SocialIcons href="https://github.com/Yoon9811">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/min-yoon-chai-b60735169/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </CompanyContainer>
    </FooterWrapper>
  );
};

export default Footer;
