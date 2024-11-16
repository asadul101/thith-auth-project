import React, { useContext, useState } from 'react';
import { AuthContex } from '../PriveatRoute/AuthProvider';

const Register = () => {
   const {handleCreate,profile}=useContext(AuthContex)
   const[error,setError]=useState('')
   const handleSubmit=e=>{
      e.preventDefault()
      setError('')
      const name=e.target.name.value;
      const photo=e.target.photo.value;
      const email=e.target.email.value;
      const password=e.target.password.value;
      const Conpassword=e.target.Conpassword.value;
      const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      if(!pass.test(password)){
         setError('Password not Valid mama?')
         return;
      }
      if(password !== Conpassword){
         setError('confrime password not valid')
         return;
      }
      handleCreate(email,password)
      .then(res=>{
         profile(name,photo)
      })
   }
   return (
      <div className="hero bg-base-300 min-h-[650px] rounded-xl">
         <div className="hero-content flex-col">
            <h1 className="text-5xl font-bold pb-6">Register Now</h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
               <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Photo</span>
                     </label>
                     <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Passwor</span>
                     </label>
                     <input type="text" name='password' placeholder="Password" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Confrom Passwor</span>
                     </label>
                     <input type="password" name='Conpassword' placeholder="Password" className="input input-bordered" required />
                  </div>
                  <div className="form-control mt-6">
                     <button className="btn btn-primary">Login</button>
                  </div>
                  <p className='text-red-500'>{error}</p>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Register;