import React from 'react';
import imag from '../assets/banner.png'

const Banner = () => {
   return (
      <div className='pt-6'>
         <div className="hero bg-base-300 min-h-[500px] rounded-lg ">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <img
                  src={imag}
                  className="max-w-lg rounded-lg shadow-2xl" />
               <div>
                  <h1 className="text-5xl font-bold">Box Office News!</h1>
                  <p className="py-6">
                     Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                     quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Book Now</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;