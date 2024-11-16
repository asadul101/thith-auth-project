import React from 'react';

const FeedBack = ({ feedData }) => {
   return (
      <div className='grid grid-cols-3 gap-6 pt-10 '>
         {
            feedData.map(feed =>
               <div key={feed.reviewId} className="card border card-compact bg-base-100 shadow-xl">
                  <div className='flex ml-2 justify-around items-center pt-2'>
                     <div className='flex items-center gap-4'>
                        <figure>
                           <img className='w-12 h-12 rounded-full'
                              src={feed.userImg}
                              alt="Shoes" />
                        </figure>
                        <h2 className="card-title">{feed.name}</h2>
                     </div>
                     <p>{new Date().toLocaleDateString()}</p>
                  </div>
                  <div className="card-body">
                     <p>{feed.review}</p>
                  </div>
               </div>)
         }
      </div>
   );
};

export default FeedBack;