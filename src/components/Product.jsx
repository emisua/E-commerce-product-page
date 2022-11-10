import { useState } from 'react'
import Slider from './Slider'
import useEcom from '../hooks/useEcom'

const Product = () => {
  const { cart, setCart, product, setActiveCart } = useEcom()

  const { category, name, price, discount, olderPrice, desc } = product

  const [cantidad, setCantidad] = useState(1)
  let stock = 9
  const handleCantidadPlus = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    } else {
      setCantidad(stock)
    }
  }
  const handleCantidadMinus = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    } else {
      setCantidad(1)
    }
  }

  const handleAddToCart = (productToCart) => {
    productToCart.quantity = cantidad
    const searchProductInCart = cart.some(
      (prodInCart) => prodInCart.id === productToCart.id
    )
    if (searchProductInCart) {
      // Si ya está en el carrito, se actualiza la cantidad
      const updateProductCart = cart.map((prodInCart) =>
        prodInCart.id === productToCart.id ? productToCart : prodInCart
      )
      setCart([...cart])
    } else {
      // Si no está en el carrito, se agrega
      setCart([...cart, productToCart])
    }
    setActiveCart(true)
  }

  return (
    <section className='container max-w-screen-lg mx-auto product flex justify-center items-center px-0 md:px-12 py-0 md:py-20 gap-6 md:gap-28 md:flex-row flex-col'>
      <div className='slider flex flex-col md:w-5/12'>
        <Slider />
      </div>
      <div className='product-content md:w-5/12 px-6 md:px-0'>
        <header>
          <h4 className='text-orange-400 text-xs font-bold tracking-wider mb-4'>
            {category.toUpperCase()}
          </h4>
          <h1 className='text-4xl font-bold tracking-normal'>{name}</h1>
        </header>
        <main>
          <p className='text-gray-500 mt-4 md:mt-8 text-[14px] leading-6'>
            {desc}
          </p>
          <div className='prices flex flex-row items-center justify-between md:mt-6 mt-4 md:flex-col md:justify-start md:items-start'>
            <p className='money md:text-[24px] text-4xl font-bold flex gap-3 mb-0'>
              <span>${price}.00</span>
              <span className='discount bg-orange-100 md:text-xs text-sm rounded-md font-bold text-orange-500 tracking-wide self-center py-[2px] px-[6px]'>
                {discount}%
              </span>
            </p>
            <del className='text-gray-300 md:text-[13px] text-md font-bold'>
              ${olderPrice}.00
            </del>
          </div>
        </main>
        <footer className='price flex flex-col pb-12 md:pb-0'>
          <div className='buttons flex md:flex-row flex-col gap-4 max-w-full mt-6'>
            <div className='cantidad md:w-4/12 w-full bg-slate-100 rounded-lg flex items-center justify-between'>
              <button
                className='font-bold text-xl leading-none text-orange-500 flex-1 h-full rounded-tl-lg rounded-bl-lg hover:bg-gray-200 py-4 md:py-0'
                onClick={handleCantidadMinus}
              >
                -
              </button>
              <span className='font-bold md:text-xs text-md leading-none text-gray-900 flex-1 h-full rounded-lg flex justify-center items-center'>
                {cantidad}
              </span>
              <button
                className='font-bold text-xl leading-none text-orange-500 flex-1 h-full rounded-tr-lg rounded-br-lg hover:bg-gray-200 py-4 md:py-0'
                onClick={handleCantidadPlus}
              >
                +
              </button>
            </div>
            <div className='addtocart md:w-7/12 w-full'>
              <button
                className='flex bg-orange-500 hover:bg-orange-400 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500 justify-center items-center py-4 rounded-lg text-white text-sm w-full gap-3 shadow-orange-200 shadow-xl font-bold'
                onClick={() => handleAddToCart(product)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='white'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
export default Product
