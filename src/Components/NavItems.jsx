import React from 'react'

function NavItems({name, Icon ,index}) {
    
  return (
    <div className='flex items-center gap-2 cursor-pointer hover:underline underline-offset-8 select-none' >
        <Icon />
        <h2>{name}</h2>
    </div>
  )
}

export default NavItems