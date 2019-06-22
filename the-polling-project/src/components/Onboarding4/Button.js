import styled from "styled-components";

export default styled.button`
   font-family: "Avenir Next";
   position: relative;
   top: -2vh;
   font-weight: 700;
   font-size: 1.8rem;
   letter-spacing: 0.1vw;
   color: white;
   flex-direction: center;
   text-align: center;
   align-items: center;
   justify-content: center;
   background-color: transparent;
   border: none;
   height: 11vh;
   width: 100%;
   cursor: pointer;
   @media (max-width: 768px) {
      font-size: 1.6rem;
      height: 8vh;
      top: -2.5vh;
  }
`