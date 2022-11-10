import useEcom from '../hooks/useEcom'
import NavCart from './NavCart'

const Navbar = () => {
  return (
    <div className='container max-w-screen-lg mx-auto menu p-0'>
      <nav className='nav flex border-b gap-8 text-gray-400 items-center h-24 px-4'>
        <a href='/'>
          <img
            src='/logo.svg'
            alt='Logo'
            className='mr-4'
          />
        </a>
        <a
          className='hover:text-gray-900 hover:border-b-orange-400 border-b-transparent border-b-4 h-full flex items-center'
          href='#'
        >
          Collections
        </a>
        <a
          className='hover:text-gray-900 hover:border-b-orange-400 border-b-transparent border-b-4 h-full flex items-center'
          href='#'
        >
          Men
        </a>
        <a
          className='hover:text-gray-900 hover:border-b-orange-400 border-b-transparent border-b-4 h-full flex items-center'
          href='#'
        >
          Women
        </a>
        <a
          className='hover:text-gray-900 hover:border-b-orange-400 border-b-transparent border-b-4 h-full flex items-center'
          href='#'
        >
          About
        </a>
        <a
          className='hover:text-gray-900 hover:border-b-orange-400 border-b-transparent border-b-4 h-full flex items-center'
          href='#'
        >
          Contact
        </a>
        <div className='ml-auto flex gap-4 items-center'>
          <NavCart />
          <img
            src='./image-avatar.png'
            alt='avatar'
            width={46}
            className='border-2 border-transparent hover:border-2 hover:border-orange-400 rounded-full cursor-pointer ml-8'
          />
        </div>
      </nav>
    </div>
  )
}
export default Navbar
