import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    background-color: #f4f3ee; 
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
        justify-content: flex-end;
        background: #f4f3ee;
    }

    .link_styles {
        padding: 0.5rem 0.8rem;
        color: #00a896;
        text-decoration: none;
    }
`;

