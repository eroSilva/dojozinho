import React from 'react'

const Button = ({ children, onClick, ...props }) => <button onClick={onClick} data-testid={props['data-testid']}>{children}</button>

export { Button }