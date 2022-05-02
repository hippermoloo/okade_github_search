import React, { Suspense } from 'react';
import Loading from "./loading";
import HomeComponent from "../../pages/home/home";
import { Route, Routes } from 'react-router-dom';
import UserDetailsComponent from 'src/pages/Users/userDetails';
import OrganizationDetailsComponent from 'src/pages/Organization/organizationDetails';
import PageNotFoundComponent from 'src/pages/home/pageNotFound';


const Routers = () => {
    return (
      <>
        <Suspense fallback={<Loading />}>
          <Routes>
    
            <Route path="/" element={<HomeComponent />} />
            <Route path="/user-details" element={<UserDetailsComponent />} />
            <Route path="/organization-details" element={<OrganizationDetailsComponent />} />
            <Route path="/page-not-found" element={<PageNotFoundComponent />} />
            <Route path="*" element={<HomeComponent />} />
  
          </Routes>
        </Suspense>
      </>
    );
  };
  
  export default Routers;