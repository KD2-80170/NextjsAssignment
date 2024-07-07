"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from '@/app/styles/swiper-module.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Home from "./Home"
// import required modules
import { Pagination } from "swiper";

const Sliding= () => {
  return (
    <>
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="Sliding"
    >
      <SwiperSlide>{<Home/>}</SwiperSlide>
      <SwiperSlide>{<Home/>}</SwiperSlide>
      <SwiperSlide>{<Home/>}</SwiperSlide>
      <SwiperSlide>{<Home/>}</SwiperSlide>
      
    </Swiper>
  </>
  );
};

export default Sliding;