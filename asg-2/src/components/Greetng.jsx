import React, { useState } from 'react'

const Greetng = ({name,timeOfday}) => {
 

  return (
    <div>
        <h1>Greeting</h1>
        <h2>Good {timeOfday}, {name}</h2>

    </div>
  )
}

export default Greetng