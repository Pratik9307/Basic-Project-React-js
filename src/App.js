import React from "react";
import { Testimoniale } from "./components/Testimoniale";
import reviews from "./data";

const App = () => {
 return(
  <div className="flex flex-col w-[100vw] h-[100vh] justify-center item-center bg-gray-200">

     <div className="text-center ">

          <h2 className="text-4xl font-bold"> Our Testimonials</h2>

          <div className="bg-violet-400 h-[4px] w-[150px] flex justify-center items-center mt-1 mx-auto"></div>

          <Testimoniale reviews={reviews}/>
     </div>
  </div>
 )
};

export default App;
