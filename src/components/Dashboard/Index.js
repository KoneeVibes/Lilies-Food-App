import styled from "styled-components";
import { Column } from "../Flex";
import { theme } from "../../configs/app";
import { Card } from "../Card";

export const DashboardWrapper = styled(Column)`
    background-color: ${(props) => props.backgroundColor || theme.colors.base};
    pointer-events: ${(props) => props.pointerEvents || "auto"};
`

export const Hamburger = styled(Card)`
    display: none;
    float: right;

    .bar{
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: #FFF; 
    }

    @media (max-width: 1280px){
        display: ${(props) => props.display || "block"};  
    }

    @media (max-width: 768px){
        display: ${(props) => props.sideDisplay && "block"};
    }
`

export const Header = styled(Card)`
    @media (min-width: 1281px){
        display: none;
    }
`