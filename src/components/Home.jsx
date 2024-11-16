import Banner from './Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServicesCard from '../pages/ServicesCard';
import FeedBack from '../pages/FeedBack';

const Home = () => {
   const servicesData=useLoaderData()
  const {services,feedData}=servicesData
   return (
      <div>
         <Banner></Banner>
         <div className='grid grid-cols-4 gap-4 pt-6 pb-2'>
            {
               services.slice(0,4).map(service=><ServicesCard key={service.id} services={service}></ServicesCard>)
            }
         </div>
         <button className='btn mx-auto  bg-primary block text-white font-semibold'>
            <NavLink to="/allthitment">Show more</NavLink>
         </button>
         <div>
            <FeedBack feedData={feedData}></FeedBack>
         </div>
      </div>
   );
};

export default Home;