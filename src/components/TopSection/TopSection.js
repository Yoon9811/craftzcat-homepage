import React from "react";
import { Section, SectionText, SectionTitle,SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,ImgSection } from './TopSectionStyles';
import Image from 'next/image';

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
            <Button onClick={props.handleClick}>
                <a style={{ display: 'flex', alignItems: 'center', color:"white"}}
                href="mailto:minyoon5725@gmail.com">GET IN TOUCH</a>
            </Button>
        </LeftSection>
        </Section>
        <ImgSection>
            <Image src={'/Web development _Isometric.svg'} width={450} height={450} alt={"Web development"}></Image>
        </ImgSection>
    </>
);

export default TopSection;