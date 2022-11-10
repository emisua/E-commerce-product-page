import { useState } from 'react'
import Slider from './Slider'
import useEcom from '../hooks/useEcom'

const Product = () => {
  const { cart, setCart, product } = useEcom()

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
      console.log('Si no está en el carrito, se agrega')
      setCart([...cart, productToCart])
    }
  }

  return (
    <section className='container max-w-screen-lg mx-auto product flex justify-center items-center px-12 py-20 gap-28'>
      <div className='slider flex flex-col w-5/12'>
        <Slider />
      </div>
      <div className='product-content w-5/12'>
        <header>
          <h4 className='text-orange-400 text-xs font-bold tracking-wider mb-4'>
            {category.toUpperCase()}
          </h4>
          <h1 className='text-4xl font-bold tracking-normal'>{name}</h1>
        </header>
        <main>
          <p className='text-gray-500 mt-8 text-[14px] leading-6'>{desc}</p>
          <p className='money text-[24px] font-bold flex gap-3 mb-0 mt-6'>
            <span>${price}.00</span>
            <span className='discount bg-orange-100 text-xs rounded-md font-bold text-orange-500 tracking-wide self-center py-[2px] px-[6px]'>
              {discount}%
            </span>
          </p>
          <del className='text-gray-300 text-[13px] font-bold'>
            ${olderPrice}.00
          </del>
        </main>
        <footer className='price flex flex-col'>
          <div className='buttons flex flex-row gap-3 max-w-[26rem] mt-6'>
            <div className='cantidad w-4/12 bg-slate-100 rounded-lg flex items-center justify-between'>
              <button
                className='font-bold text-xl leading-none text-orange-500 flex-1 h-full rounded-tl-lg rounded-bl-lg hover:bg-gray-200'
                onClick={handleCantidadMinus}
              >
                -
              </button>
              <span className='font-bold text-xs leading-none text-gray-900 flex-1 h-full rounded-lg flex justify-center items-center'>
                {cantidad}
              </span>
              <button
                className='font-bold text-xl leading-none text-orange-500 flex-1 h-full rounded-tr-lg rounded-br-lg hover:bg-gray-200'
                onClick={handleCantidadPlus}
              >
                +
              </button>
            </div>
            <div className='addtocart w-7/12'>
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
