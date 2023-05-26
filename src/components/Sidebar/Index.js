import styled from "styled-components";
import { theme } from "../../configs/app";

export const SideBarWrapper = styled.div`
    padding: 4rem;
    max-width: 20rem;
    background-color: ${(props) => props.backgroundColor || "#FBFBFB"};
    pointer-events: ${(props) => props.pointerEvent || "auto"};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    p{  
        font-size: 16px;
        font-weight: 400;
        color: #000000;
    }

    h2{
        font-size: 33px;
        font-weight: 700;
        color: #00302E;
    }

    .header-logo-items{
        display: flex;
        align-items: center;
        gap: 2rem;
        padding-bottom: 4rem;
        justify-content: space-between;
    }

    .side-bar-item{
        display: flex;
        gap: 1rem;
        align-items: center;
        opacity: 0.5;
        padding: 0 1rem;
        width: fill-available;
    }

    .sustain-depression{
        background: #EFEFEF;
        border-radius: 12px;
        cursor: pointer;
        opacity: 1;
        transform: scale(1.05);
    }

    .side-bar-item:hover{
        transform: scale(1.05);
        cursor: pointer;
        opacity: 0.75;
    }

    .orders-info{
        border: 1px solid #06E775;
        background-color: #06E775;
        border-radius: 5px;
        padding: 0.5rem;
    }

    .cart-info{
        border: 1px solid #F3C294;
        background-color: ${theme.colors.peach};
        border-radius: 5px;
        padding: 0.5rem;
    }

    .hide{
        display: none;
    }

    @media (max-width: 1280px){
        display: ${(props) => props.display};
        position: fixed;
        height: fill-available;
    }

    @media (max-width: 768px){
        max-width: fill-available;
        width: fill-available;
    }
`