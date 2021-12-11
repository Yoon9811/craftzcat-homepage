import React from "react";
import { Section, SectionText, SectionTitle,SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,ImgSection } from './TopSectionStyles';

const TopSection = (props) => (
    <>
        <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
            Hello <br />
            I'm a software developer <br />
            based in Malaysia !
            </SectionTitle>
            <SectionText>
            My Career Objective is to become a software developer whereby I can utilize my potential to the fullest extend and contribution towards organization growth. 
            </SectionText>
            <Button onClick={props.handleClick}>GET IN TOUCH</Button>
        </LeftSection>
        </Section>
        <ImgSection>
            <img src={'/Web development _Isometric.svg'}  height={450} alt={"Web development"}></img>
        </ImgSection>
    </>
);

export default TopSection;