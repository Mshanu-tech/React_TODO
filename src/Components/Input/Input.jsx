import React from 'react'

function Input({value}) {

  return (
    <>
    <input onChange={value} type="text" name="userInput" id=""  required/>
    </>
  )
}

export default Input
