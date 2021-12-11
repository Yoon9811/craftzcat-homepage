import React from 'react'
import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';
import styled from 'styled-components';
import Image from 'next/image';

const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`

function About() {
    return (
        <GridContainer>
        <Section id="about">
             <Image src={'/uni.jpg'}  width ={350} height={350} alt={"Web development"}></Image>
        </Section>
        <Section >
            <SectionTitle>Chai Min Yoon</SectionTitle>
            <SectionText>Yoon is a full time web developer with a passion for buliding digital services 
                that needed by the society, from planning to development. Not only R&D,
                he also has good problem solving skill on web application and experience with
                handle customer software support issue. Currently he is keep learning new technologies to improve his programming skills and bring more value to the market.<br/>

                </SectionText>
                
        </Section>
        </GridContainer>
    )
}

export default About
