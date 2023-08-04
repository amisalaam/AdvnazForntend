import React, { useEffect, useState } from "react";
import axios from "axios";

const AddDoctorModal = React.memo(({ isOpen, onClose, onDoctorAdded }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [department, setDepartment] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    password: "",
    retypePassword: "", // Corrected name attribute for retype password field
    imageFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      imageFile: e.target.files[0],
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/myadmin/api/get/all/department/`
        );
        setDepartment(response.data);
      } catch (err) {
        console.error("Error fetching departments:", err);
      }
    };
    fetchData();
  }, []);

  const handleAddDoctor = async () => {
    try {
      // Perform validation on the fields, e.g., check if they are not empty, etc.

      if (formData.password !== formData.retypePassword) {
        console.error("Passwords do not match");
      } else {
        const newFormData = new FormData();
        newFormData.append("name", formData.name);
        newFormData.append("email", formData.email);
        newFormData.append("department_id", formData.department); // Use department_id instead of department
        newFormData.append("doctor_profile_image", formData.imageFile); // Use doctor_profile_image instead of imageFile
        newFormData.append("password", formData.password);

        const response = await axios.post(
          `${API_URL}/myadmin/api/doctors/create/`,
          newFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Notify the parent component that a new doctor has been added
        onDoctorAdded(response.data);

        // Reset the form data after successful creation
        setFormData({
          name: "",
          email: "",
          department: "",
          password: "",
          retypePassword: "",
          imageFile: null,
        });
      }
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error("Error adding a new doctor:", error);
    }
  };

  return (
    <div
      className={`fixed bg-black bg-opacity-75 inset-0 flex justify-center items-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white w-96 md:w-[40rem] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Add New Doctor</h2>
        <label htmlFor="name" className="block font-semibold mb-2">
          Doctor Name:
        </label>
        <input
          type="text"
          required
          name="name"
          placeholder="Doctor Name"
          className="border border-primaryBlue border-solid focus:outline-none px-4 py-2 mb-4 w-full rounded-lg"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="email" className="block font-semibold mb-2">
          Doctor Email:
        </label>
        <input
          type="text"
          name="email"
          required
          placeholder="Doctor Email"
          className="border border-primaryBlue border-solid focus:outline-none px-4 py-2 mb-4 w-full rounded-lg"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="password" className="block font-semibold mb-2">
          Password:
        </label>
        <input
          type="password"
          required
          name="password"
          placeholder="Enter Password"
          className="border border-primaryBlue border-solid focus:outline-none px-4 py-2 mb-4 w-full rounded-lg"
          value={formData.password}
          onChange={handleInputChange}
        />

        <label htmlFor="retypePassword" className="block font-semibold mb-2">
          Confirm Password:
        </label>
        <input
          type="password"
          name="retypePassword"
          placeholder="Re-type Password"
          className="border border-primaryBlue border-solid focus:outline-none px-4 py-2 mb-4 w-full rounded-lg"
          value={formData.retypePassword}
          required
          onChange={handleInputChange}
        />

        <label htmlFor="department" className="block font-semibold mb-2">
          Department:
        </label>
        <select
          name="department"
          value={formData.department}
          required
          onChange={handleInputChange}
          className="border border-primaryBlue border-solid focus:outline-none px-4 py-2 mb-4 w-full rounded-lg"
        >
          <option value="">Select Department</option>
          {department.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.department_name}
            </option>
          ))}
        </select>

        <label htmlFor="imageFile" className="block font-semibold mb-2">
          Select Doctor Image:
        </label>
        <input
          type="file"
          required
          name="imageFile"
          accept="image/*"
          className="mb-4"
          onChange={handleImageChange}
        />

        <div className="flex justify-end">
          <button
            className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none"
            onClick={handleAddDoctor}
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

export default AddDoctorModal;
