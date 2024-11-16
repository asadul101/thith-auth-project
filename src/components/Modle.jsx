import React from 'react';

const Modle = () => {
   const handleSunmit=e=>{
      e.preventDefault()
   }
   return (
      <div>
         {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
         <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
               <div>
                  <form onSubmit={handleSunmit} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name='Fname' placeholder="First Name" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name='Lname' placeholder="Last Name" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name='phone' placeholder="phone number" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Appioment date</span>
                        </label>
                        <input type="date" name='date' placeholder="date" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Address</span>
                        </label>
                        <input type="name" name='address' placeholder="address" className="input input-bordered" required />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                     </div>
                  </form>
               </div>
               <div className="modal-action">
                  <form method="dialog">
                     <button className="btn">Close</button>
                  </form>
               </div>
            </div>
         </dialog>
      </div>
   );
};

export default Modle;