import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddDepartmentModal = React.memo(({ isOpen, onClose,onDepartmentAdded }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [department, setDepartment] = useState({
    department_name: "",
    description: "",
    department_image: null,
  });

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    setDepartment((prevDepartment) => ({
      ...prevDepartment,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleAddDepartment = async () => {
    const formData = new FormData();
    formData.append("department_name", department.department_name);
    formData.append("description", department.description);
    formData.append("department_image", department.department_image);

    try {
      const response = await axios.post(
        `${API_URL}/myadmin/api/department/create/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        toast.success("Department added successfully!");
        onDepartmentAdded(response.data);
        // You can perform additional actions here, such as refreshing the department list
        onClose();
      } else {
        toast.error("Error adding department. Please try again.");
      }
    } catch (error) {
        console.log(error)
        toast.error("Error adding department. Please try again.");
      onClose();
    }
  };

  return (
    <div
      className={`fixed bg-black bg-opacity-75 inset-0 flex justify-center items-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white w-96 md:w-[40rem] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Add New Department</h2>
        <label htmlFor="name" className="block font-semibold mb-2">
          Department Name:
        </label>
        <input
          type="text"
          required
          name="department_name"
          
          placeholder="Doctor Name"
          onChange={handleInputChange}
          className="border border-primaryBlue border-solid focus:outline-none px-4 py-2 mb-4 w-full rounded-lg"
        />

        <label htmlFor="retypePassword" className="block font-semibold mb-2">
          Descritption:
        </label>
        <input
          type="text"
          name="description"
          placeholder="Descritption"
          className="border border-primaryBlue border-solid focus:outline-none px-4 py-2 mb-4 w-full rounded-lg"
          required
          onChange={handleInputChange}
        />

        <label htmlFor="imageFile" className="block font-semibold mb-2">
          Select Doctor Image:
        </label>
        <input
          type="file"
          required
          name="department_image"
          accept="image/*"
          className="mb-4"
          onChange={handleInputChange}
        />

        <div className="flex justify-end">
          <button
            onClick={handleAddDepartment}
            className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none"
          >
            Add
          </button>
          <button
            className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
});

export default AddDepartmentModal;
