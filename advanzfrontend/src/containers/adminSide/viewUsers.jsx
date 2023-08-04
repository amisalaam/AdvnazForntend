import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';

import VIewAllUsers from '../../components/admin/VIewAllUsers';

const ViewUsers = () => {
    return (
        
            <div className="flex flex-wrap">
      <AdminSidebar className="w-full md:w-1/4 lg:w-1/5" /> 
      <VIewAllUsers className="w-full md:w-3/4 lg:w-4/5" />
    </div>
        
    );
}

export default ViewUsers;
