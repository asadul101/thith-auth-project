import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import About from "../components/About";
import AllThitment from "./AllThitment";
import Profile from "../pages/Profile";
import MyAppoienment from "../pages/MyAppoienment";
import DetlaisPs from "../pages/DetlaisPs";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivetRout from "./PrivetRout";


const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: async () => {
               const servicesRes = await fetch('./service.json')
               const services = await servicesRes.json()

               const feedBackRes = await fetch('./happyclients.json')
               const feedData = await feedBackRes.json()

               return { services, feedData }
            }
         },
         {
            path: '/allthitment',
            element: <AllThitment></AllThitment>,
            loader: () => fetch('./service.json')
         },
         {
            path: '/myappoienment',
            element: <MyAppoienment></MyAppoienment>
         },
         {
            path: '/profile',
            element: <Profile></Profile>
         },
         {
            path: '/detalis/:id',
            element: 
              <PrivetRout>
                 <DetlaisPs></DetlaisPs>
              </PrivetRout>
               ,
            
            loader: async ({ params }) => {
               const singleD = await fetch('../service.json')
               const data = await singleD.json()
               const singleData = data.find(d => d.id == params.id)
               return singleData
            }
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         }
      ]
   }
])

export default router;