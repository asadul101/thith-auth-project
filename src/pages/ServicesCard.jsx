import React from 'react';
import { NavLink } from 'react-router-dom';

const ServicesCard = ({ services }) => {
   const { image, treatment, description, cost,id } = services;
   return (
      <div className="card bg-base-100 shadow-xl">
         <figure>
            <img
               src={image}
               alt="Shoes" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">
               {treatment}
               <div className="badge badge-primary font-semibold">${cost}</div>
            </h2>
            <p title={description}>{description.slice(0, 180)} ....</p>
            <div className="card-actions justify-end">
               <NavLink to={`/detalis/${id}`}>
                  <button className="badge badge-outline bg-primary text-white p-4 font-semibold">Chook out</button>
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default ServicesCard;