import React from 'react'
import styled from 'styled-components'

function CharCard (props) {

    const Card = styled.div`
        background-color: rgba(255,255,255,.25);
        border-radius: .3rem;
        border: 1px solid #C8C8C8;
        box-shadow: 2px 2px 2px black;
        padding: 1rem;
        padding-right: 2rem;
        max-width: 30rem;
        width: 40%;
        margin: 1rem;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
    `;
    const CardImg = styled.img`
        width: 100%;
        height: auto;
        margin: .5rem;
        border-radius: .3rem;
        border: 1px solid #C8C8C8;
        box-shadow: 2px 2px 10px grey;
        object-fit: cover;
        background-color: #272B30;
    `;

    const StatsDiv = styled.div`
        margin: 0;
        padding: 0;
    `;

    const Name = styled.h2`
        font-family: "Squada One";
        color: white;
        font-size: 2rem;
        font-weight: 300;
    `;

    const Stat = styled.h4`
        margin: 0;
        line-height: auto;
        text-align: left;
        color: white;
        font-family: "Source Sans Pro";
        font-weight: 400;
    `;

    let stats = props.stats;
    return (
        <Card>
            <CardImg src={stats.img}></CardImg>
            <Name>{stats.name}</Name>
            <StatsDiv>
                <Stat>Height: {stats.height}</Stat>
                <Stat>Mass: {stats.mass}</Stat>
                <Stat>Birth year: {stats.birth_year}</Stat>
                <Stat>Homeworld: {stats.homeworld === "https://swapi.co/api/planets/1/" ? "Tatooine" :
                stats.homeworld === "https://swapi.co/api/planets/8/" ? "Naboo" :    
                stats.homeworld === "https://swapi.co/api/planets/2/" ? "Alderaan" : "Stewjon"} </Stat>
            </StatsDiv>
        </Card>
    )
}

export default CharCard;