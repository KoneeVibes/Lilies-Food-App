import styled from "styled-components";

export const Avatar = styled.img`
    display: ${(props) => props.display || "block" };
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    margin-left: ${(props) => props.marginLeft || "auto"};
    margin-right: ${(props) => props.marginRight || "auto"};
`