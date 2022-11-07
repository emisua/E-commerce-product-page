import { useState, useEffect } from 'react'
const NavCart = () => {
  const [activeCart, setActiveCart] = useState(false)
  // Calcular ancho del navbar

  const calcularAncho = () => {
    const menu = document.querySelector('.menu')
    let navWidth = menu.clientWidth
    let windowWidth = window.innerWidth
    if (windowWidth > navWidth) {
      return 'translate-x-1/2'
    } else {
      return 'translate-x-6'
    }
  }

  useEffect(() => {
    window.addEventListener('resize', function () {
      const menu = document.querySelector('nav')
      setNavWidth(menu.clientWidth)
      setWindowWidth(window.innerWidth)
    })
  }, [window.innerWidth])
  return (
    <div className='nav-cart relative'>
      <svg
        width='22'
        height='20'
        xmlns='http://www.w3.org/2000/svg'
        onClick={() => setActiveCart(!activeCart)}
        className='cursor-pointer'
      >
        <path
          d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
          fill='#69707D'
          fillRule='nonzero'
          className='h-5 fill-gray-600 hover:fill-black'
        />
      </svg>

      {activeCart && (
        <div
          className={`cart-content bg-white rounded-md shadow-lg shadow-gray-300 absolute top-10 w-48 right-0 ${calcularAncho()}`}
        >
          <div className='title text-xs text-gray-800 font-semibold px-4 py-3 border-b'>
            Cart
          </div>
          <div className='content text-xs text-gray-600 font-semibold px-4 py-10 text-center'>
            Your cart is empty
          </div>
        </div>
      )}
    </div>
  )
}
export default NavCart
