import React from 'react'

function Btn( {BtnName, BtnAction, type}) {
  return (
    <button onClick={BtnAction} type={type}>{BtnName}</button>
  )
}

export default Btn