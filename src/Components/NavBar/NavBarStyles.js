import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    background-color: blue; 
    position: fixed;
    top: 10vh;
    right: ${props => (props.open ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    transition: right 0.3s linear;

    @media only screen and (min-width: 624px) {
        flex-direction: row; 
        position: initial;
        height: auto;
        justify-content: center;
        background: white;
    }

    .link_styles {
        padding: 0.5rem 0.8rem;
        color: gray;
        text-decoration: none;
    }
`;

