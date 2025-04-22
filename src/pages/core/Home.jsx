import React, { useContext } from 'react'
import Header from '../../components/home/Header'
import Footer from '../../components/home/Footer'
import { ThemeContext } from '../../context/ThemeProvider'
import Hero from '../../components/home/Hero'

const Home = () => {
  const {theme } = useContext(ThemeContext)

  const isDark = theme === "dark"
  return (
    <main className='relative'>
        <Header />
        {isDark && <div className='w-[500px] h-[500px] bg-linear-to-b from-gradientYellow to-gradientRed blur-[315px] rounded-full absolute left-1/2 top-[-270.5px] transform -translate-x-1/2 z-0'>
        </div>}
        <Hero />
        <Footer />
    </main>
  )
}

export default Home