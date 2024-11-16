import React, { useContext } from 'react';
import { AuthContex } from '../PriveatRoute/AuthProvider';
import { NavLink } from 'react-router-dom';

const Login = () => {
   const { handleGoogle, handleLogin } = useContext(AuthContex)
   const handleSubmit = e => {
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      handleLogin(email, password)
   }
   return (

      <div>
         <div className="hero bg-base-300 min-h-[650px] rounded-xl">
            <div className="hero-content flex-col">
               <h1 className="text-5xl font-bold pb-6">Login Now</h1>
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form onSubmit={handleSubmit} className="card-body">
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
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                     </div>
                  </form>
                  <p className='text-center py-3'>Nwe Create account?<NavLink className='text-blue-400' to='/register'>Register</NavLink></p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;