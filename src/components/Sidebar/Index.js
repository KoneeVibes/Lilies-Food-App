import styled from "styled-components";

export const SideBarWrapper = styled.div`
    padding: 4rem;
    max-width: 20rem;
    background-color: ${(props) => props.backgroundColor || "#FBFBFB"};
    pointer-events: ${(props) => props.pointerEvent || "auto"};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: inherit;

    .dashboard-sidebar{
        display: flex;
        overflow-x : hidden;
    }
    
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

    .side-bar-item{
        display: flex;
        align-items: center;
        opacity: 0.5;
        padding: 0 1rem;
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

    .header-logo-items{
        display: flex;
        align-items: center;
        padding-bottom: 4rem;
    }

    .icon-margin{
        margin-right: 2em;
    }

    .hide{
        display: none;
    }

    @media (max-width: 1280px){
       padding: 4rem 1rem;

       h2, p{
            display: none;
       }
    }
`