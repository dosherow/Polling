import styled from "styled-components";

export default styled.div`
    border-radius: 0 2vw 2vw 0;
    grid-column-start: col3;
    grid-column-end: span 4;
    grid-row-start: row1;
    grid-row-end: span 9;
    overflow: hidden;
    @media (max-width: 1224px) {
        grid-row-start: row1;
        grid-row-end: span 8;
    }
`