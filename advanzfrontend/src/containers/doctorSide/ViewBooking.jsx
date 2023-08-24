import React from 'react';
import DoctorSidebar from '../../components/Doctor/DoctorSidebar';
import DoctorViewAllBooking from '../../components/Doctor/DoctorViewAllBooking';

const ViewBooking= () => {
    return (
        
            <div className="flex ">
      <DoctorSidebar className="w-full md:w-1/4 lg:w-1/5" /> 
      <DoctorViewAllBooking className="w-full md:w-3/4 lg:w-4/5" />
    </div>
        
    );
}

export default ViewBooking;
