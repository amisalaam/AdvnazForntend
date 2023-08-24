import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import DepartmentTable from '../../components/admin/departmentTable';

const ViewDepartments = () => {
    return (
        <div className="flex ">
      <AdminSidebar className="w-full md:w-1/4 lg:w-1/5" /> 
      <DepartmentTable className="w-full md:w-3/4 lg:w-4/5" />
    </div>
    );
}

export default ViewDepartments;
