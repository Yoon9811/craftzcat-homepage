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
      <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </CompanyContainer>
    </FooterWrapper>
  );
};

export default Footer;
