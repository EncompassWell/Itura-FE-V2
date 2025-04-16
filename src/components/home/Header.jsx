import React from 'react'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { Button } from '../shared/Reuse'
import ToggleButton from '../shared/ToggleButton'

const Header = () => {
  return (
    <header className='flex items-center'>
        <div className='flex justify-between w-[50%] bg-white/5'>
        <img src={logo} alt="Itura logo" />
        <nav>
        <NavLink to="">Features</NavLink>
        <NavLink to="">How it Works</NavLink>
        <NavLink to="">Forum</NavLink>
        <NavLink to="">Blog</NavLink>
        <NavLink to="">Contact</NavLink>
        </nav>
        <Button className="bg-linear-to-r from-orange to-lightOrange rounded-2xl ">Launch the app</Button>
        </div>
        <ToggleButton />
    </header>
  )
}

export default Header