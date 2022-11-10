import { useState } from 'react'
import useEcom from '../hooks/useEcom'
const Modal = ({ product }) => {
  const { data, setModal } = useEcom()

  const [modalMainImage, setModalMainImage] = useState(product.images[0])
  const mainImageIndex = product.images.indexOf(modalMainImage, 0)
  const nextImage = () => {
    if (mainImageIndex < product.images.length - 1) {
      setModalMainImage(product.images[mainImageIndex + 1])
    } else {
      setModalMainImage(product.images[0])
    }
  }

  const prevImage = () => {
    if (mainImageIndex > 0) {
      setModalMainImage(product.images[mainImageIndex - 1])
    } else {
      setModalMainImage(product.images[product.images.length - 1])
    }
  }

  return (
    <div className='modal absolute top-0 left-0 bottom-0 w-full min-h-screen h-fit bg-black bg-opacity-80 flex justify-center items-center select-none'>
      <div className='modal-content max-w-[50vw] mx-auto'>
        <div
          className='close cursor-pointer mb-4 flex justify-end stroke-gray-100 hover:stroke-orange-500'
          onClick={() => setModal(false)}
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
        <div className='main-img flex justify-center items-center relative shadow-2xl'>
          <img
            src={modalMainImage.imgurl}
            alt='modalMainImage'
            className='rounded-2xl'
          />
          <div className='arrows absolute flex justify-between w-full'>
            <span
              className='bg-white rounded-full w-[50px] h-[50px] -translate-x-1/2 flex justify-center items-center stroke-gray-900 hover:stroke-orange-500 cursor-pointer'
              onClick={prevImage}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            </span>
            <span
              className='bg-white rounded-full w-[50px] h-[50px] translate-x-1/2 flex justify-center items-center cursor-pointer relative stroke-gray-900 hover:stroke-orange-500'
              onClick={nextImage}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  className=''
                />
              </svg>
            </span>
          </div>
        </div>
        <div className='thumbs flex flex-row justify-between items-center mt-6 max-w-[400px] mx-auto'>
          {product.images.map((image) => {
            const { imgid, imgthumb } = image
            return (
              <div
                className={`thumb rounded-lg overflow-hidden bg-white  ${
                  modalMainImage.imgid === imgid &&
                  'outline outline-3 outline-orange-500'
                }`}
                key={imgid}
              >
                <img
                  src={imgthumb}
                  width={80}
                  className={`hover:opacity-50 cursor-pointer ${
                    modalMainImage.imgid === imgid && 'opacity-50'
                  }`}
                  onClick={() => setModalMainImage(image)}
                  alt='Product thumbnail'
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Modal
