import styled from "styled-components";
import { Card } from "../Card";
import { Row } from "../Flex";

export const FoodCartWrapper = styled(Card)`
    
`
export const CartRow = styled(Row)`
    @media (max-width: 1280px){
        flex-direction: ${(props) => props.toColumn && 'column'};
    }
`