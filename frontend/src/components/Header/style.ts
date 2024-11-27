import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: #f7cd33;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
`;

export const Logo = styled.div`
    color: #141414;
    font-size: 2rem;
    font-weight: bold;
`;

export const NavContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Nav = styled.nav`
    a {
    margin: 0 1rem;
    text-decoration: none;
    color: #141414;
    font-weight: 500;

        &:hover {
            color: #555;
        }
    }
`;