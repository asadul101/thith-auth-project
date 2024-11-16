import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modle from '../components/Modle';

const DetlaisPs = () => {
   const singleData = useLoaderData();
   const{image,treatment,description}=singleData

   return (
     <div
         className="hero min-h-screen rounded-lg"
         style={{
            backgroundImage: `url(${image})`,
         }}>
         <div className="hero-overlay bg-opacity-60  rounded-lg"></div>
         <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
               <p className="mb-5">
                  {description}
               </p>
               <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Book appioment</button>
            </div>
         </div>
         <Modle></Modle>
      </div>
   );
};

export default DetlaisPs;