const MobileMenu = ({ links, setIsMenuOpen }) => {
  return (
    <nav className='mobile-menu fixed top-0 left-0 bottom-0 right-0 z-10 bg-black bg-opacity-80'>
      <ul className='list-none max-w-[65vw] bottom-0 bg-white flex flex-col z-20 h-screen p-5'>
        <li>
          <div
            className='close cursor-pointer mb-12 stroke-gray-900 hover:stroke-orange-500'
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={3}
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
        </li>
        {links.map((link) => {
          return (
            <li
              className='text-gray-900 font-bold flex items-center mb-5 hover:text-orange-500'
              key={link.label}
            >
              <a
                href={link.link}
                className='h-full flex items-center text-xl'
              >
                {link.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default MobileMenu
