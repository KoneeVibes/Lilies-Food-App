import styled from "styled-components";
import { theme } from "../../configs/app";

export const Button = styled.button`
    font-family: ${(props) => props.fontName || 'Poppins'};
    font-size: ${(props) => props.fontSize || theme.font.sizes.base};
    font-weight: ${(props) => props.fontWeight || theme.font.weight.normal};
    line-height: 1.25rem;
    text-align: ${(props) => props.textAlign || 'left'};
    overflow: ${(props) => props.overFlow || 'hidden'};
    text-overflow: ellipsis;
    margin: ${(props) => props.margin || "0rem"};
    color: ${(props) => props.fontColor || theme.colors.base};
    border: ${(props) => props.border || "none"};
    padding: ${(props) => props.padding || "2rem"};
    background: ${(props) => props.backgroundColor || "none"};
    width: ${(props) => props.width || "auto"};
    cursor: pointer;
`