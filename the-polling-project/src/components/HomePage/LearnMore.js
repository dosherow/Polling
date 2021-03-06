import styled from 'styled-components';

export default styled.div`
    z-index: 5;
    position: relative;
    background-image: linear-gradient(#D63131 10vh, white 40vw);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.12);
    font-family: ${props => props.theme.font};
    font-weight: 600;
    top: 50vh;
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 15vw;
    height: 7vh;
    display: flex;
    justify-content: center;
    flex-direction: center;
    text-align: center;
    border-radius: .8vw;
    border-width: .2vw;
    padding: 1.5em;
    cursor: pointer;
    align-items: center;
    font-size: 1.2vw 1.2vh;
    letter-spacing: 0.15vw;
    @media (max-width: 768px) {
        width: 12vw;
        height: 6vh;
        font-size: 0.8rem;
        letter-spacing: 0.05vw;
    }
`