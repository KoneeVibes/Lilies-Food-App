import styled from "styled-components";

export const SideBarWrapper = styled.div`
    // position: fixed;
    top: 0;
    bottom: 0;
    padding: 2.36%;
    width: 20vw;
    background: #FBFBFB;

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
        padding-left: 1em;
        margin-right: 4.25em;
        opacity: 0.5;
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
        margin: 2em 0em 2em;
    }

    .icon-margin{
        margin-right: 2em;
    }
`