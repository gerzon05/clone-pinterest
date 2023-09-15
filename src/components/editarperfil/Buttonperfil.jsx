import React from 'react'

export const Buttonperfil = ({value}) => {
  return (
    <button className='p-2 w-fit text-start text-xs md:text-lg font-semibold relative hover:bg-slate-200 rounded-xl after:content-[""] after:absolute after:h-[3px] after:rounded-full focus:after:bg-black after:bg-white after:bottom-0 after:w-10/12 after:left-0 after:translate-x-[10%]'>{value}</button>
  )
}
