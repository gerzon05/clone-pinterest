import React from "react";
export const Button = ({click,style,imgf,placeholder}) => {
  return (
    <button onClick={click} className={style}>{imgf}{placeholder}</button>
  )
}
