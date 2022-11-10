import Modal from './Modal'
import useEcom from '../hooks/useEcom'

const Slider = () => {
  const { mainImage, setMainImage, data, modal, setModal, product } = useEcom()
  const mainImageIndex = product.images.indexOf(mainImage, 0)

  const nextImage = () => {
    if (mainImageIndex < product.images.length - 1) {
      setMainImage(product.images[mainImageIndex + 1])
    } else {
      setMainImage(product.images[0])
    }
  }

  const prevImage = () => {
    if (mainImageIndex > 0) {
      setMainImage(product.images[mainImageIndex - 1])
    } else {
      setMainImage(product.images[product.images.length - 1])
    }
  }

  const handleModal = () => {
    window.innerWidth > 768 ? setModal(true) : setModal(false)
  }

  return (
    <div>
      <div className='main-img flex justify-center items-center'>
        <img
          src={mainImage.imgurl}
          alt='mainImage'
          className='md:rounded-2xl md:cursor-zoom-in select-none'
          onClick={handleModal}
        />
        <div className='arrows absolute flex justify-between w-full md:hidden'>
          <span
            className='bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center stroke-gray-900 hover:stroke-orange-500 cursor-pointer ml-4'
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
            className='bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer relative stroke-gray-900 hover:stroke-orange-500 mr-4'
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

      <div className='thumbs flex-row justify-between items-center mt-6 w-full hidden md:flex'>
        {data.map((thumb) => {
          return thumb.images.map((image) => {
            const { imgid, imgthumb } = image
            return (
              <div
                className={`thumb rounded-lg overflow-hidden max-w-[22%] ${
                  mainImage.imgid === imgid &&
                  'outline outline-3 outline-orange-500'
                }`}
                key={imgid}
              >
                <img
                  src={imgthumb}
                  width={80}
                  className={`hover:opacity-50 cursor-pointer  ${
                    mainImage.imgid === imgid && 'opacity-50'
                  }`}
                  onClick={() => setMainImage(image)}
                />
              </div>
            )
          })
        })}
      </div>
      {modal && <Modal product={product} />}
    </div>
  )
}
export default Slider
