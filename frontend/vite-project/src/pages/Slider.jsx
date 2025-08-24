import React from "react";
import { useState,useEffect } from "react";

function HeroSlider() {
  const slides =[
    {
      id:1,
      img:"https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=80",
      text:"Roundtrip booking offers! Up to ₹3,500 Of"
    },
     {
      id:2,
      img:"https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/5b309e98775e22e4.jpg?q=80",
      text:"Roundtrip booking offers! Up to ₹3,500 Of"
    },
     {
      id:3,
      img:"https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/076c4f2ee87225d7.jpg?q=80",
      text:"Roundtrip booking offers! Up to ₹3,500 Of"
    },
 

  ]
  const [current, setCurrent] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrent((prev)=>(prev+1)% slides.length);
    }, 3000);
    return () => clearInterval(interval);
  },[slides.length])



const nextSlide = () => {
  setCurrent((prev) => {
    if (prev !== 0) {
    return prev + 1; 
  }
});
  
};

const prevSlide = () => {
  setCurrent((prev) => {
    if (prev === 0) {
      return slides.length - 1;
    }
    return prev - 1; 
  });
};
  return (
    <div className="px-2 py-12">
    <div className="relative w-full mt-[50px] h-[250px] overflow-hidden shadow-md rounded-xl" >
      <img
        src={slides[current].img}
        alt="No Image"
        className=" w-full h-full object-cover "
      />
      <div className="absolute inset-1 flex items-center justify-between px-2 ">
        <button 
        className="bg-white px-2  rounded-3xl cursor-pointer"
        onClick={nextSlide}
        >
 left
        </button>
        <button className="bg-white px-2  rounded-2xl cursor-pointer"
        onClick={prevSlide}
        >
          right
        </button>
      </div>
    </div>
    </div>
  );
};

export default HeroSlider