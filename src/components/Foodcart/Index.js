import styled from "styled-components";
import { Row } from "../Flex";
import { Avatar } from "../Avatar/Index";
import { Card } from "../Card";

export const FoodCard = styled(Card)`
    @media (max-width: 425px){
        padding: 2rem 1rem;
    }
`

export const CartRow = styled(Row)`
    flex-direction: row;

    @media (min-width: 1024px) and (max-width: 1150px){
        gap: 1rem;
    }

    @media (max-width: 768px){
        flex-direction: ${(props) => props.toColumn && 'column'};
        align-items: ${(props) => props.toCenter && 'center'};
        justify-content: ${(props) => props.justCenter && 'center'};
    }
`
export const CartAvatar = styled(Avatar)`
    @media (max-width: 425px){
        width: ${(props) => props.resWidth && "100%"};
    }
`