import styled from "styled-components";
import { theme } from "../configs/app";

export const Text = styled.p`
    font-family: ${(props) => props.fontName || 'Poppins'};
    font-size: ${(props) => props.fontSize || theme.font.sizes.base};
    font-weight: ${(props) => props.fontWeight || theme.font.weight.normal};
    line-height: 1.25rem;
    text-align: ${(props) => props.textAlign || 'left'};
    overflow: ${(props) => props.overFlow || 'hidden'};
    text-overflow: ellipsis;
    margin: ${(props) => props.margin || "0rem"};
    color: ${(props) => props.fontColor || theme.colors.base};
    cursor: ${(props) => props.cursor || "auto"};
`

export const H4 = styled.h4`
    font-family: ${(props) => props.fontName || 'Poppins'};
    font-size: ${(props) => props.fontSize || theme.font.sizes.base};
    font-weight: ${(props) => props.fontWeight || theme.font.weight.medium};
    line-height: 1.125rem;
    text-align: ${(props) => props.textAlign || 'left'};
    margin: ${(props) => props.margin || "0rem"};
    color: ${(props) => props.fontColor || theme.colors.base};
`

export const P = styled.p`
    font-family: ${(props) => props.fontName || 'Poppins'};
    font-size: ${(props) => props.fontSize || theme.font.sizes.base};
    font-weight: ${(props) => props.fontWeight || theme.font.weight.light};
    line-height: 1.25rem;
    text-align: ${(props) => props.textAlign || 'left'};
    margin: ${(props) => props.margin || "0rem"};
    color: ${(props) => props.fontColor || theme.colors.base};
`