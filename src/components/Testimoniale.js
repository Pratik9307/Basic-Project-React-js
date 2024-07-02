import React, { useState } from 'react'
import { Card } from './Card'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';




export const Testimoniale = (props) => {
    let reviews=props.reviews;
    const[index,setIndex]=useState(0);
   
    function leftshiftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1)
        }
        else{
            setIndex(index-1)
        }

    }

    function RightshiftHandler(){
        if(index+1>reviews.length){
            setIndex(0)
        }
        else{
            setIndex(index+1)
        }
    }

    function Surprisehandler(){
      let randomindex=  Math.floor(Math.random()*reviews.length);
      setIndex(randomindex);

    }






  return (
    <div className='w-[85vw] md:w-[700px] bg-white  flex flex-col justify-center items-center mt-10  p-10 transition-all duration-700 hover:shadow-xl mx-auto '>
        
           <Card review={reviews[index]}></Card>

           <div className='flex text-3xl gap-3 text-violet-400 font-bold text-center mt-5 justify-center items-center' >
         
         <button onClick={leftshiftHandler} className='cursor-poiner hover:text-violet-500'>
           <FiChevronLeft></FiChevronLeft>
         </button>
         <button onClick={RightshiftHandler} className='cursor-poiner hover:text-violet-500'>
           <FiChevronRight></FiChevronRight>
         </button>
     
    </div>

         <div className='text-center mt-6'>
         <button onClick={Surprisehandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 curser-pointer px-10 py-2 rounded-md font-bold text-white text-large'>
            Surprice me
         </button>
         </div>
            
            
        
    </div>
  )
}
