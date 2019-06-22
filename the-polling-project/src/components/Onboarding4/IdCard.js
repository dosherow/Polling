import styled from 'styled-components';
import card from './curriculum.svg';

export default styled.div`
    margin: auto;
    justify-self: center;
    align-items: center;
    background-image: url(${card});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: -5vh;
    width: 10em;
    height: 15em;
    position: relative;
    @media (max-width: 768px) {
        top: -1.5vh;
    }
` 