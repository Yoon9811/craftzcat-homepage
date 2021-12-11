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
          <DiCodeigniter size="3rem" /><Span>CraftzTech</Span> 
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
        <SocialIcons href="https://github.com/Yoon9811">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/min-yoon-chai-b60735169/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
       
      </Div3>
    </Container>
);

export default Header;
