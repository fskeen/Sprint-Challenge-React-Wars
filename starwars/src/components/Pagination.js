import React from "react";
import styled from 'styled-components'


function Pagination (props) {

    const ButtonDiv = styled.div`
        display: flex;
        justify-content: center;
    `;

    const Button = styled.button`
        background-color: #272B30;
        box-shadow: 0 0 2px grey;
        border: none;
        color: white;
        margin: 1rem;
        padding: 0 1rem;
        border: 1px solid grey;
        border-radius: .3rem;
        font-size: 1.1rem;
        display: flex; 
        align-items: center;
        justify-content: center;
        width: 10rem;
        cursor: pointer;
        transition: transform .3s ease;


        &:hover {
            box-shadow: 0 0 3px white;
            color: rgb(219, 180, 49);
            background-color: black;
            transform: scale(1.03);
            transition: transform .2s ease;
        }
    `;

    return (
        <ButtonDiv>
        <Button onClick={props.prev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M14.91 6.71c-.39-.39-1.02-.39-1.41 0L8.91 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z"/></svg>
            Previous
        </Button>
        <Button onClick={props.next}>
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>
        </Button>
        </ButtonDiv>
    )
}

export default Pagination;