import { createContext } from 'react'
import { useState, useEffect } from 'react'
import data from '../data/data.json'

const EcomContext = createContext()

const EcomProvider = ({ children }) => {
  const product = data[0]
  const [mainImage, setMainImage] = useState(product.images[0])
  const [modal, setModal] = useState(false)
  const [cart, setCart] = useState([])

  return (
    <EcomContext.Provider
      value={{
        mainImage,
        setMainImage,
        data,
        modal,
        setModal,
        cart,
        setCart,
        product,
      }}
    >
      {children}
    </EcomContext.Provider>
  )
}

export { EcomProvider }
export default EcomContext
