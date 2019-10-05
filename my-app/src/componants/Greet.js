import React from 'react'

const Greet = (props) => 
{
    console.log(props)
    return <h1>Hello {props.name}<br/>
    <br/>  Your Fav Hero is {props.avenger} </h1>
}



export default Greet