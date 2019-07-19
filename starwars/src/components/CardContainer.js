import React from 'react';
import CharCard from "./CharCard";
import styled from 'styled-components'

function CardContainer (props) {
    const Container = styled.div`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        min-height: 50rem;
    `;

    const LoadingImg = styled.img`
        height: 3rem;
        margin: 3rem;
    `;  

    const imgs = [
        {
            name: "Luke Skywalker",
            src: "https://i.imgur.com/8gQeSrL.jpg"
        },{
            name: "C-3PO",
            src: "https://i.imgur.com/MA1aFTQ.jpg"
        }, {
            name: "R2-D2",
            src: "https://i.imgur.com/csBF0nA.jpg"
        }, {
            name: "Darth Vader",
            src: "https://i.imgur.com/dWp5tFq.jpg"
        }, {
            name: "Leia Organa",
            src: "https://i.imgur.com/GGvchvr.jpg"
        }, {
            name: "Owen Lars",
            src: "https://i.imgur.com/XCanCnw.jpg"
        }, {
            name: "Beru Whitesun lars",
            src: "https://i.imgur.com/EX66MNf.jpg"
        }, {
            name: "R5-D4",
            src: "https://i.imgur.com/fbDsSF5.jpg"
        }, {
            name: "Biggs Darklighter",
            src: "https://i.imgur.com/fIjkGP4.jpg"
        }, {
            name: "Obi-Wan Kenobi",
            src: "https://i.imgur.com/jYbliOJ.jpg"
        }, {
            name: "Anakin Skywalker",
            src: "https://i.imgur.com/3kd8S69.jpg"
        }, {
            name: "Wilhuff Tarkin",
            src: "https://i.imgur.com/bZ4IaO3.jpg"
        }, {
            name: "Chewbacca",
            src: "https://i.imgur.com/ISrc1ex.jpg"
        }, {
            name: "Han Solo",
            src: "https://i.imgur.com/c0ytZDu.jpg"
        }, {
            name: "Greedo",
            src: "https://i.imgur.com/yaEdHU0.jpg"
        }, {
            name: "Jabba Desilijic Tiure",
            src: "https://i.imgur.com/lfa9EFN.jpg"
        }, {
            name: "Wedge Antilles",
            src: "https://i.imgur.com/7pcBgoH.jpg"
        }, {
            name: "Jek Tono Porkins",
            src: "https://i.imgur.com/IqAOJGh.jpg"
        }, {
            name: "Yoda",
            src: "https://i.imgur.com/WwdmrkW.jpg"
        }, {
            name: "Palpatine",
            src: "https://i.imgur.com/Zkhmc5E.jpg"
        }, {
            name: "Boba Fett",
            src: "https://i.imgur.com/nlzt44w.jpg"
        }, {
            name: "IG-88",
            src: "https://i.imgur.com/G2McpK1.jpg"
        }, {
            name: "Bossk",
            src: "https://i.imgur.com/p7RXLWB.jpg"
        }, {
            name: "Lando Calrissian",
            src: "https://i.imgur.com/Wbkykuf.jpg"
        }, {
            name: "Lobot",
            src: "https://i.imgur.com/W2qR7pV.jpg"
        }, {
            name: "Ackbar",
            src: "https://i.imgur.com/vqsH6TZ.jpg"
        }, {
            name: "Mon Mothma",
            src: "https://i.imgur.com/E0ZKr7V.jpg"
        }, {
            name: "Arvel Crynyd",
            src: "https://i.imgur.com/xt7LcRr.jpg"
        }, {
            name: "Wicket Systri Warrick",
            src: "https://i.imgur.com/3JcPbef.jpg"
        }, {
            name: "Nien Nunb",
            src: "https://i.imgur.com/IizDxka.jpg"
        }
    ]

    const array = props.charArray.results;
    return (
        <Container>
        {array ?            
            array.map((a) => {
                {   a.name === imgs[0].name ? a.img = imgs[0].src :
                    a.name === imgs[1].name ? a.img = imgs[1].src :
                    a.name === imgs[2].name ? a.img = imgs[2].src :
                    a.name === imgs[3].name ? a.img = imgs[3].src :
                    a.name === imgs[4].name ? a.img = imgs[4].src :
                    a.name === imgs[5].name ? a.img = imgs[5].src :
                    a.name === imgs[6].name ? a.img = imgs[6].src :
                    a.name === imgs[7].name ? a.img = imgs[7].src :
                    a.name === imgs[8].name ? a.img = imgs[8].src : 
                    a.name === imgs[9].name ? a.img = imgs[9].src :
                    a.name === imgs[10].name ? a.img = imgs[10].src :
                    a.name === imgs[11].name ? a.img = imgs[11].src :
                    a.name === imgs[12].name ? a.img = imgs[12].src :
                    a.name === imgs[13].name ? a.img = imgs[13].src :
                    a.name === imgs[14].name ? a.img = imgs[14].src :
                    a.name === imgs[15].name ? a.img = imgs[15].src :
                    a.name === imgs[16].name ? a.img = imgs[16].src :
                    a.name === imgs[17].name ? a.img = imgs[17].src :
                    a.name === imgs[18].name ? a.img = imgs[18].src :
                    a.name === imgs[19].name ? a.img = imgs[19].src :
                    a.name === imgs[20].name ? a.img = imgs[20].src :
                    a.name === imgs[21].name ? a.img = imgs[21].src :
                    a.name === imgs[22].name ? a.img = imgs[22].src :
                    a.name === imgs[23].name ? a.img = imgs[23].src :
                    a.name === imgs[24].name ? a.img = imgs[24].src :
                    a.name === imgs[25].name ? a.img = imgs[25].src :
                    a.name === imgs[26].name ? a.img = imgs[26].src :
                    a.name === imgs[27].name ? a.img = imgs[27].src :
                    a.name === imgs[28].name ? a.img = imgs[28].src :
                     a.img = imgs[29].src
                
                }

            return <CharCard key={a.name} stats={a}/>
        })
        : <LoadingImg src="https://imgur.com/aDTbGQ6.gif"></LoadingImg>}
        </Container>
    )
}

export default CardContainer;


