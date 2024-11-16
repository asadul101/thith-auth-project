import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
   return (
      <div >
         <header className='px-20 pt-10 pb-6'>
         <Navbar></Navbar>
         </header>
         <main className='max-w-7xl mx-auto'>
            <Outlet></Outlet>
         </main>
         <footer></footer>
      </div>
   );
};

export default MainLayout;