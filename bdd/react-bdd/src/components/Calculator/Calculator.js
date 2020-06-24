import React, { useState } from 'react'
import { Button } from './Button'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(0);

  const behaviorClick = value => setDisplayValue(value) 

  return (
    <>
      <input type="text" data-testid="display" value={displayValue}/>
      <Button data-testid="button1" onClick={() => behaviorClick(1)}>1</Button>
    </>
  )
}

export { Calculator }