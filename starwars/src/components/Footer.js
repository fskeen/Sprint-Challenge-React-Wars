import React from 'react';
import styled from 'styled-components'


function Footer () {

    const Footer = styled.footer`
        background-image: url("https://i.imgur.com/WQx5L19.gif");
        background-size: 10rem;
        background-color: #0e0f11;
        background-blend-mode: screen;
        box-shadow: 0 0 5px #0e0f11;
        height: 1rem;
        padding: 1rem;
        outline: 1px solid rgb(219, 180, 49);
        outline-offset: -4px;
    `;

    const FooterP = styled.p`
        font-family: "Squada One";
        font-weight: 400;
        color: rgb(219, 180, 49);
        margin: 0;
    `;

    return (
        <Footer>
            <FooterP>Thanks for checking out React Wars!</FooterP>
        </Footer>
    )
}

export default Footer;