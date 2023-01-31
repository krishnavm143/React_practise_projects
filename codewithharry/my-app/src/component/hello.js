import React, { useState } from 'react'

const Hello = () => {
   const[name,setName]=useState('')
  return (
    <>
    <div>{name}</div>
    <input type="text" onChange={(e)=>setName(e.target.value)}/>
    </>
  )
}

export default Hello