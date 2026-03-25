import './App.css'
import React from 'react'
import Badge from './components/Badge/Badge'

function App() {
  return (
    <>
      <Badge>Popular</Badge>
      <Badge type="square" color="grey">Popular</Badge>
      <Badge type="square" color="red">Popular</Badge>
      <Badge type="square" color="yellow">Popular</Badge>
      <Badge type="square" color="green">Popular</Badge>
      <Badge type="square" color="blue">Popular</Badge>
      <Badge type="square" color="indigo">Popular</Badge>
      <Badge type="square" color="purple">Popular</Badge>
      <Badge type="square" color="pink">Popular</Badge>

      <br/>
      <br/>
      <Badge>Popular</Badge>
      <Badge type="pill" color="grey">Popular</Badge>
      <Badge type="pill" color="red">Popular</Badge>
      <Badge type="pill" color="yellow">Popular</Badge>
      <Badge type="pill" color="green">Popular</Badge>
      <Badge type="pill" color="blue">Popular</Badge>
      <Badge type="pill" color="indigo">Popular</Badge>
      <Badge type="pill" color="purple">Popular</Badge>
      <Badge type="pill" color="pink">Popular</Badge>


    </>
  )
}

export default App
