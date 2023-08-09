import React from 'react';
import UserSidebar from '../../../components/user/UserSidebar';
import UserViewBookingTable from '../../../components/user/UserViewBookingTable';

const UserViewBooking= () => {
    return (
        
            <div className="flex flex-wrap">
      <UserSidebar className="w-full md:w-1/4 lg:w-1/5" /> 
      <UserViewBookingTable className="w-full md:w-3/4 lg:w-4/5" />
    </div>
        
    );
}

export default UserViewBooking;
