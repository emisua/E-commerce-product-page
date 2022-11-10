import { useState } from 'react'
import Avatar from './Avatar'
import MobileMenu from './MobileMenu'
import NavCart from './NavCart'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = [
    {
      label: 'Collections',
      link: '#',
    },
    {
      label: 'Men',
      link: '#',
    },
    {
      label: 'Women',
      link: '#',
    },
    {
      label: 'About',
      link: '#',
    },
    {
      label: 'Contact',
      link: '#',
    },
  ]
  return (
    <div className='container md:max-w-screen-lg mx-auto menu p-0'>
      <nav className='nav flex border-b gap-4 md:gap-8 text-gray-400 items-center h-16 md:h-24 px-4'>
        <div className='mobile block md:hidden cursor-pointer select-none'>
          <svg
            width='16'
            height='15'
            xmlns='http://www.w3.org/2000/svg'
            className=''
            onClick={() => setIsMenuOpen(true)}
          >
            <path
              d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'
              fill='#69707D'
              fillRule='evenodd'
            />
          </svg>
          {isMenuOpen && (
            <MobileMenu
              links={links}
              setIsMenuOpen={setIsMenuOpen}
            />
          )}
        </div>
        <a href='/'>
          <img
            src='/logo.svg'
            alt='Logo'
            className='mr-4'
          />
        </a>
        <ul className='list-none md:flex-row md:gap-8 md:h-full hidden md:flex'>
          {links.map((link) => {
            return (
              <li
                className='hover:text-gray-900 hover:border-b-orange-400 border-y-transparent border-y-4 h-full flex items-center'
                key={link.label}
              >
                <a
                  href={link.link}
                  className='h-full flex items-center'
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className='ml-auto flex gap-4 items-center'>
          <NavCart />
          <Avatar />
        </div>
      </nav>
    </div>
  )
}
export default Navbar
