import { useContext } from 'react'
import EcomContext from '../context/ecomProvider'

const useEcom = () => useContext(EcomContext)

export default useEcom
