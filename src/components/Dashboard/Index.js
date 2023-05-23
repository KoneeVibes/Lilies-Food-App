import styled from "styled-components";
import { Column } from "../Flex";
import { theme } from "../../configs/app";

export const DashboardWrapper = styled(Column)`
    background-color: ${(props) => props.backgroundColor || theme.colors.base};
    pointer-events: ${(props) => props.pointerEvents || "auto"};
    height: inherit;
`