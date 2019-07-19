import React from 'react';
import CharCard from "./CharCard";
import styled from 'styled-components'

function CardContainer (props) {
    const Container = styled.div`
        display: flex;
        flex-flow: row wrap;
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
        }
    ]

    const array = props.charArray.results;
    return (
        <Container>
        {array ?            
            array.map((a) => {
                console.log(a)
                {   a.name === imgs[0].name ? a.img = imgs[0].src :
                    a.name === imgs[1].name ? a.img = imgs[1].src :
                    a.name === imgs[2].name ? a.img = imgs[2].src :
                    a.name === imgs[3].name ? a.img = imgs[3].src :
                    a.name === imgs[4].name ? a.img = imgs[4].src :
                    a.name === imgs[5].name ? a.img = imgs[5].src :
                    a.name === imgs[6].name ? a.img = imgs[6].src :
                    a.name === imgs[7].name ? a.img = imgs[7].src :
                    a.name === imgs[8].name ? a.img = imgs[8].src : a.img = imgs[9].src }
                    
            return <CharCard key={a.name} stats={a}/>
        })
        : <p>Loading...</p>}
        </Container>
    )
}

export default CardContainer;


