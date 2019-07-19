import React from 'react'
import styled from 'styled-components'

function CharCard (props) {

    const Card = styled.div`
        background-color: rgba(255,255,255,.75);
        border-radius: .3rem;
        border: 1px solid #C8C8C8;
        box-shadow: 2px 2px 2px grey;
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
        margin: .5rem;
        border-radius: .3rem;
        border: 1px solid #C8C8C8;
        box-shadow: 2px 2px 10px #D3D3D3;
    `;

    const StatsDiv = styled.div`
        margin: 0;
        padding: 0;
    `;

    const Stat = styled.h4`
        margin: 0;
        line-height: auto;
        text-align: left;
    `;

    console.log(props.stats)
    let stats = props.stats;
    return (
        <Card>
            <CardImg src={stats.img}></CardImg>
            <h2>{stats.name}</h2>
            <StatsDiv>
                <Stat>Height: {stats.height}</Stat>
                <Stat>Mass: {stats.mass}</Stat>
                <Stat>Birth year: {stats.birth_year}</Stat>
                <Stat>Homeworld: {stats.homeworld}</Stat>
            </StatsDiv>
        </Card>
    )
}

export default CharCard;