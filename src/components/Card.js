import styled from "styled-components";
import { theme } from "../configs/app";

export const Card = styled.div`
    position: ${(props) => props.position || "static"};
    left: ${(props) => props.left || "auto"};
    right: ${(props) => props.right || "auto"};
    top: ${(props) => props.top || "auto"};
    bottom: ${(props) => props.bottom || "auto"};
    width: ${(props) => props.width || "auto"};
    background-color: ${(props) => props.backgroundColor || theme.colors.base};
    padding: ${(props) => props.padding || "2rem"};
    overflow-y: ${(props) => props.overflow || "visible"};
    z-index: ${(props) => props.zIndex || "auto"};
    
    @media (max-width: 763px){
        width: ${(props) => props.fullWidth && "auto"};
    }
`