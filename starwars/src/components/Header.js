import React from 'react'
import styled from 'styled-components'


function Header () {

    const Header = styled.header`
        background-color: black;
        background-image: url("https://i.imgur.com/WQx5L19.gif");
        background-size: 10rem;
        height: 4rem;
        outline: 1px solid yellow;
        outline-offset: -3px;
        position: sticky;
        top: 0px;
        box-shadow: 0 0 5px black;

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