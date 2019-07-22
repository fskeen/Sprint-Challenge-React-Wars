import React from 'react'
import styled from 'styled-components'


function Header () {

    const Header = styled.header`
        background-color: #0e0f11;
        background-image: url("https://i.imgur.com/WQx5L19.gif");
        background-size: 10rem;
        background-blend-mode: screen;
        height: 4rem;
        outline: 1px solid rgb(219, 180, 49);
        outline-offset: -3px;
        position: sticky;
        top: 0px;
        box-shadow: 0 0 5px #0e0f11;
        z-index: 2;

    `;
    const HeaderImg = styled.img`
        height: 100%;
    `;

    return (
        <Header>
            <HeaderImg src="https://i.imgur.com/jB29Qh9.gif"></HeaderImg>
        </Header>
    )
}

export default Header;