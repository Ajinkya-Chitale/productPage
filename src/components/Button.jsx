import React from 'react'

const Button = ({name, primary}) => {
  return (
    <button type='button' className={`font-semibold text-1xl lg:text-2xl ${primary ? "py-1 px-3 bg-red-600 text-white" : "py-1 px-3 bg-white border-2 border-black"}`}>{name}</button>
  )
}

export default Button
