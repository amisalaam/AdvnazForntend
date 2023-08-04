import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import ViewAllBookedSlots from '../../components/admin/ViewAllBookedSlots';

const ViewBookedSlots = () => {
    return (
        
            <div className="flex flex-wrap">
      <AdminSidebar className="w-full md:w-1/4 lg:w-1/5" /> 
      <ViewAllBookedSlots className="w-full md:w-3/4 lg:w-4/5" />
    </div>
        
    );
}

export default ViewBookedSlots;
