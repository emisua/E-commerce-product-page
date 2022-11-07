import data from '../data/data.json'
import { useState, useEffect } from 'react'

const Slider = () => {
  const [mainImage, setMainImage] = useState(data[0])
  console.log(mainImage)
  return (
    <>
      <div className='main-img flex justify-center items-center max-w-[400px] mx-auto'>
        <img
          src={mainImage.imgurl}
          alt='mainImage'
          className='rounded-2xl'
        />
      </div>
      <div className='thumbs flex flex-row justify-between max-w-[400px] mx-auto items-center mt-8'>
        {data.map((thumb) => {
          const { imgid, imgurl, imgthumb } = thumb
          console.log(mainImage.imgid, imgid)
          return (
            <div
              className={`thumb rounded-lg overflow-hidden ${
                mainImage.imgid === imgid
                  ? 'outline outline-3 outline-orange-500'
                  : ''
              }`}
              key={imgid}
            >
              <img
                src={imgurl}
                width={80}
                className={`hover:opacity-50 cursor-pointer ${
                  mainImage.imgid === imgid ? 'opacity-50' : ''
                }`}
                onClick={() => setMainImage(thumb)}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Slider
