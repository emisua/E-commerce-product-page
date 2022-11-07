import { useState, useEffect } from 'react'
import Modal from './Modal'
import useEcom from '../hooks/useEcom'

const Slider = () => {
  const { mainImage, setMainImage, data, modal, setModal } = useEcom()

  return (
    <div>
      <div className='main-img flex justify-center items-center'>
        <img
          src={mainImage.imgurl}
          alt='mainImage'
          className='rounded-2xl cursor-zoom-in'
          onClick={() => setModal(true)}
        />
      </div>
      <div className='thumbs flex flex-row justify-between items-center mt-6 w-full'>
        {data.map((thumb) => {
          const { imgid, imgurl, imgthumb } = thumb
          return (
            <div
              className={`thumb rounded-lg overflow-hidden ${
                mainImage.imgid === imgid &&
                'outline outline-3 outline-orange-500'
              }`}
              key={imgid}
            >
              <img
                src={imgurl}
                width={80}
                className={`hover:opacity-50 cursor-pointer ${
                  mainImage.imgid === imgid && 'opacity-50'
                }`}
                onClick={() => setMainImage(thumb)}
              />
            </div>
          )
        })}
      </div>
      {modal && <Modal data={data} />}
    </div>
  )
}
export default Slider
