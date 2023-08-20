import React, { memo, useState } from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

type Props = {
  images: [];
};

const CardImageSlider = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlider = currentIndex === 0;
    const newIndex = isFirstSlider ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlider = currentIndex === images.length - 1;
    const newIndex = isLastSlider ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const setIndexValue = (value: number) => {
    setCurrentIndex(value);
  };
  return (
    <>
      <div className=" relative h-[186px] w-full ">
        <img
          src={images[currentIndex]}
          width={252}
          className="  h-full rounded-tl-md rounded-tr-md transition-all ease-out object-cover"
          alt=""
        />
        <div className=" absolute top-2 left-0 text-textColor bg-red h-[21px] text-[12px] w-[132px] ">
          <div className="flex h-full w-full  justify-between items-center px-2 hover:fill-white">
            <div className=" text-white">
              <IoDiamondOutline size={14} />
            </div>
            <p className=" text-white text-[12px] font-semibold">24% off</p>
            <div className=" flex justify-center items-center">
              <button className=" bg-white text-[12px] px-1 text-red rounded-sm border-1 font-semibold">
                Deal!!
              </button>
            </div>
          </div>
        </div>
        <div className=" absolute top-2 right-2">
          <AiOutlineHeart
            size={20}
            className=" text-white  hover:text-textColor hover:fill-bodyBg cursor-pointer"
          />
        </div>
        {/* left slider */}
        <div className=" absolute top-[47%] left-1 cursor-pointer ">
          <div
            className=" flex justify-center hover:bg-white items-center bg-bodyBg rounded-full h-[20px] w-[20px] "
            onClick={prevSlide}
          >
            <IoIosArrowBack size={16} color="black" />
          </div>
        </div>
        {/* right slider */}
        <div className=" absolute top-[47%] right-1 cursor-pointer">
          <div
            className=" flex justify-center hover:bg-white items-center bg-bodyBg rounded-full h-[20px] w-[20px] "
            onClick={nextSlide}
          >
            <IoIosArrowForward size={16} color="black" />
          </div>
        </div>
        {/* bottom slider */}
        <div className=" absolute bottom-2 left-[35%]">
          <div className=" flex gap-x-[1px]">
            {images.slice(0, 5).map((item: any, index: number) => (
              <div
                key={index}
                onClick={() => setIndexValue(index)}
                className=" cursor-pointer text-white"
              >
                <RxDotFilled size={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CardImageSlider);
