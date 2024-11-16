import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../pages/ServicesCard';

const AllThitment = () => {
   const services = useLoaderData()
   return (
      <div className='grid grid-cols-4 gap-6 pt-6'>
         {
            services.map(service => <ServicesCard key={service.id} services={service}></ServicesCard>)
         }
      </div>
   );
};

export default AllThitment;