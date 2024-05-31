import React from 'react'
import Logo from './Logo'
import { ModeToggle } from './mode-toggle'

const Navbar = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center h-[56px] z-50 bg-white">
        <Logo />
        <div className="flex flex-row items-center gap-4">
            <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar