import React from 'react'

function Input({ action, value }) {

  return (
    <>
      <input defaultValue={value} onChange={action} type="text" name="userInput" id="" required />
    </>
  )
}

export default Input
