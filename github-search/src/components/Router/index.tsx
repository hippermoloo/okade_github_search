import React, { Suspense } from 'react';
import Loading from "./loading";
import HomeComponent from "../../pages/home/home";
import { Route, Routes } from 'react-router-dom';


const Routers = () => {
    return (
      <>
        <Suspense fallback={<Loading />}>
          <Routes>
    
            <Route path="/" element={<HomeComponent />}>
              <Route path="home" element={<HomeComponent />} />
              <Route path="*" element={<HomeComponent />} />
            </Route>
  
          </Routes>
        </Suspense>
      </>
    );
  };
  
  export default Routers;