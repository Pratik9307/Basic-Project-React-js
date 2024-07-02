import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';


export const Card = (props) => {
    let review=props.review;
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' 
            src={review.image}></img>
            <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]' ></div>
        </div>

        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
        </div>

        <div className='text-center mt--1'>
            <p className='text-violet-300 uppercase text-5m'>{review.job}</p>
        </div>

        <div className='flex justify-center items-center text-violet-600 mt-4'>
            <FaQuoteLeft></FaQuoteLeft>
        </div>

        <div className=' text-center mt-4 text-slate-500'>
            {review.text}
        </div>

        <div className='flex justify-center items-center text-violet-600 mt-4'>
            <FaQuoteRight></FaQuoteRight>
        </div>

         
         
       
         
       
    </div>
  )
}
