import React from "react";
import Button from "../Button";

type Props = {};

function HeaderMiddle({}: Props) {
  return (
    <div className=" mt-4 w-full flex justify-between  items-center text-base16 text-txt-secondary bg-btn-secondary h-[52px] rounded-[70px]">
      <button className=" pl-8 pr-12 ">Where are we go?</button>
      <div className="h-[35px] w-[1px] bg-bg-primary "></div>
      <button className="px-24">Check In</button>
      <div className="h-[35px] w-[1px] bg-bg-primary "></div>
      <button className=" px-24">Check Out</button>
      <div className="h-[35px] w-[1px] bg-bg-primary "></div>
      <button className=" px-24">Guest</button>
    </div>
  );
}

export default HeaderMiddle;
