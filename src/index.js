import React from 'react';
import ReactDom from 'react-dom';
import Solver from './components/Solver.js'



const Greeting =()=>{
  return (

    <d1>
      HELLO THIS IS A TEST
      <Solver/>
    </d1>
  )
}

ReactDom.render (<Greeting/>, document.getElementById('root'))
