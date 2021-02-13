import styled from "styled-components"

export const NavWrapper = style.nav`
    grid-column: 2/span 12;
    grid-row: 1/2;
    display: flex;
    align-items: center;

    @media ${props => props.theme.breakpoints.tablet} {
        drid-column: 2/ span 6;
    }
`