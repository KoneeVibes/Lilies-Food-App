import styled from "styled-components"

export const Flex = styled.div`
    display: flex;
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    align-items: ${(props) => props.alignItems || 'normal'};
    gap: ${(props) => props.gap || 2}rem;
    padding: ${(props) => props.padding || 0}rem;
    border-bottom: ${(props) => props.borderBottom || 'none'};
    width: ${(props) => props.width || 'auto'};
    flex-wrap: ${(props) => props.flexWrap || "wrap"};
`
export const Row = styled(Flex)`
    flex-direction: row;

    @media screen and (max-width: 1024px){
        flex-direction: ${(props) => props.toColumn && 'column'};
    }
`
export const Column = styled(Flex)`
    flex-direction: column;
    
    @media screen and (max-width: 1024px){
        flex-direction: ${(props) => props.toRow && 'row'};
    }
`