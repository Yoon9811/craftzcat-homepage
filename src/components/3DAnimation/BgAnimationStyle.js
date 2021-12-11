import styled from "styled-components"

export const TopBgContainer = styled.div`
max-width: 100%;
height: auto;   
justify-content: space-between;
margin-left:10%;
display:flex;
@media ${props => props.theme.breakpoints.md}{
    display:flex;
    opacity:0.5;
    margin-left:50px;
}

@media ${props => props.theme.breakpoints.sm}{
    display:flex;
}
`

export const AboutBgContainer = styled.div`
max-width: 100%;
height: auto;   
justify-content: space-between;
margin-left:150px;
margin-top:100px;
display:flex;
box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
border-radius: 50%;
@media ${props => props.theme.breakpoints.md}{
    display:flex;
    margin-left:10%;
}

@media ${props => props.theme.breakpoints.sm}{
    display:flex;
}
`