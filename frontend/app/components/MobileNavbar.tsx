// MobileNavbar.tsx

import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem'
import { FaBars } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

const menuItems = [
  { href: '/about', label: 'About Jada' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/booking', label: 'Book Jada' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='md:hidden bg-jada-cyan px-4 flex items-center justify-between h-20'>
      <Logo src='/Logo-item.png' alt='logo' />

      <div
        className={`absolute ${
          isMenuOpen ? 'top-[7%]' : ''
        } transition-top duration-500 ease-in-out px-3 py-3  w-full left-0 min-h-[25vh] top-[-100%] bg-jada-cyan`}
      >
        <ul className='flex flex-col gap-10 text-jada-purple'>
          {menuItems.map((item) => (
            <li key={item.href} onClick={closeMenu}>
              <MenuItem href={item.href} label={item.label} />
            </li>
          ))}
        </ul>
      </div>

      <div className='z-50'>
        <button className='text-jada-purple'>
          {isMenuOpen ? (
            <IoCloseOutline
              className='cursor-pointer  md:hidden'
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className=' cursor-pointer md:hidden'
              onClick={toggleMenu}
            />
          )}
        </button>
      </div>
    </nav>
  )
}

export default MobileNavbar
