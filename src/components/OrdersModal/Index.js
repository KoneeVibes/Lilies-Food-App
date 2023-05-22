import styled from "styled-components";
import { Card } from "../Card";
import { theme } from "../../configs/app";

export const ModalStyler = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 100;
    
    table{
        width: 100%;
    }

    th{
        font-family: Poppins;
        font-size: ${theme.font.sizes.nm};
        font-weight: ${theme.font.weight.normal};
        line-height: 33px;
        text-align: center;
        color: ${theme.colors.offBlack};
    }

    td{
        margin: 1em 0;
    }

    .item-column{
        text-align: left;
    }

    .image-cell{
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .qty, .price, .sub-total{
        font-family: Poppins;
        font-size: ${theme.font.sizes.ll};
        font-weight: ${theme.font.weight.bold};
        line-height: 33px;
        text-align: center;
        color: ${theme.colors.green};
    }

    @media (max-width: 768px){
        .image-cell{
            flex-direction: column;
            align-items: flex-start;
        }
    }

    @media (max-width: 450px){
        padding: 2rem 1rem;
    }
`