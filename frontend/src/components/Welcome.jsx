import React from 'react'
import styled from 'styled-components'
import Robot from "../assets/robot.gif"



const Welcome = ({currentUser}) => {
    // console.log(currentUser)
  return (
    <Container>
        <img src={Robot} alt="Robot" />
        <h1>
            Welcome, <span>{currentUser?.username}!</span>
        </h1>
        <h3>Select chat to start messaging</h3>
    </Container>
  )
}

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
img{
    height: 20rem;
}
span{
    color: #00ff88;
}

`;

export default Welcome