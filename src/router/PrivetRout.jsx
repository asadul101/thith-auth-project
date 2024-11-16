import React, { useContext } from 'react';
import { AuthContex } from '../PriveatRoute/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRout = ({children}) => {
   const {user,loaing}=useContext(AuthContex)
   if(loaing){
      return <h1>loger.............</h1>
   }
   if(user&& user?.email){
     return children;
   }
   return  <Navigate to="/login"></Navigate>
};

export default PrivetRout;