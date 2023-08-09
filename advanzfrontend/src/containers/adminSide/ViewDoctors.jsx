import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';

import ViewAllDoctors from '../../components/admin/ViewAllDoctorsTable';



const ViewDoctors = () => {





  return (
    <div className="flex ">
      <AdminSidebar className="w-full md:w-1/4 lg:w-1/5" /> 
      <ViewAllDoctors className="w-full md:w-3/4 lg:w-4/5" />
    </div>
  );
};


export default ViewDoctors;
