import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCodeigniter,DiCodepen } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span,Logo } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white",marginBottom:"20px" }}>
          <DiCodeigniter size="3rem" /><Span>&nbsp;CraftzTech</Span> 
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>    
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
        
          
    </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
       
      </Div3>
    </Container>
);

export default Header;
