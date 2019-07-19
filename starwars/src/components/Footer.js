import React from 'react';
import styled from 'styled-components'


function Footer () {

    const Footer = styled.footer`
        background-image: url("https://i.imgur.com/WQx5L19.gif");
        background-size: 10rem;
        height: 1rem;
        padding: 1rem;
        outline: 1px solid yellow;
        outline-offset: -4px;
    `;

    const FooterP = styled.p`
        font-family: "Squada One";
        font-weight: 400;
        color: yellow;
        margin: 0;
    `;

    return (
        <Footer>
            <FooterP>Thanks for checking out React Wars!</FooterP>
        </Footer>
    )
}

export default Footer;