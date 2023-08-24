import React from 'react';
import DoctorSidebar from '../../components/Doctor/DoctorSidebar';
import ViewAllSlotsTable from '../../components/Doctor/DoctorViewAllSlotsTable';

const ViewSlots = () => {
    return (
        
            <div className="flex ">
      <DoctorSidebar className="w-full md:w-1/4 lg:w-1/5" /> 
      <ViewAllSlotsTable className="w-full md:w-3/4 lg:w-4/5" />
    </div>
        
    );
}

export default ViewSlots;
