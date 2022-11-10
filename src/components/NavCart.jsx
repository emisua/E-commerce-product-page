import { useState, useEffect } from 'react'
import useEcom from '../hooks/useEcom'

const NavCart = () => {
  const [activeCart, setActiveCart] = useState(false)
  const { cart, setCart } = useEcom()

  console.log(cart)

  // Calcular ancho del navbar
  const calcularAncho = () => {
    const menu = document.querySelector('.menu')
    console.log(menu)
    let navWidth = menu.clientWidth
    let windowWidth = window.innerWidth
    console.log(navWidth, windowWidth)
    if (windowWidth > navWidth) {
      return 'translate-x-1/2'
    } else {
      return 'translate-x-6'
    }
  }

  const handleDeleteProductCart = (producto) => {
    const newCart = cart.filter((product) => {
      product.id !== producto.id
    })
    setCart(newCart)
  }

  return (
    <div className='nav-cart relative'>
      <svg
        width='22'
        height='20'
        xmlns='http://www.w3.org/2000/svg'
        onClick={() => setActiveCart(!activeCart)}
        className='cursor-pointer fill-slate-600 hover:fill-black'
      >
        <path
          d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
          fillRule='nonzero'
          className='h-5'
        />
      </svg>

      {activeCart && (
        <div
          className={`cart-content bg-white rounded-md shadow-2xl shadow-zinc-400 absolute top-10 w-72 right-0 ${calcularAncho()}`}
        >
          <div className='title text-xs text-gray-800 font-semibold px-4 py-3 border-b'>
            Cart
          </div>
          <div className='content text-xs text-slate-600 font-semibold p-4 text-center'>
            {cart.length < 1 ? (
              <p>Tu carrito está vacío</p>
            ) : (
              <>
                <ul className='flex flex-col gap-4'>
                  {cart.map((producto) => {
                    return (
                      <li
                        key={producto.images.imgid}
                        className='flex gap-3 justify-stretch items-center text-left h-full flex-row'
                      >
                        <img
                          src={producto.images[0].imgurl}
                          alt={producto.name}
                          className='rounded-md max-w-[40px]'
                        />
                        <div className='product-data text-slate-400 font-normal flex flex-col justify-between items h-full gap-1 text-[12px]'>
                          <p>{producto.name}</p>
                          <p>
                            ${producto.price}.00 x {producto.quantity}
                            <span className='ml-2 text-slate-900 font-semibold'>
                              ${producto.quantity * producto.price}.00
                            </span>
                          </p>
                        </div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          className='w-5 h-5 stroke-slate-400 cursor-pointer'
                          onClick={() => handleDeleteProductCart(producto)}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                          />
                        </svg>
                      </li>
                    )
                  })}
                </ul>
                <button className='bg-orange-500 hover:bg-orange-300 w-full mt-6 rounded-lg py-4 text-white'>
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
export default NavCart
