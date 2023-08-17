import React from 'react'

type Props = {
    buttonStyle: string,
    buttonTitlte: string
}

const Button = ({buttonStyle, buttonTitlte}: Props) => {
    console.log(buttonStyle)
  return (
    <div className={`${buttonStyle}`}>{buttonTitlte}</div>
  )
}

export default Button