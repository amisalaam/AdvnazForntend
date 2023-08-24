import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorModal = ({ isOpen, onClose, doctor, setDoctor }) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [isEditMode, setIsEditMode] = useState(false);

  const [editedDoctor, setEditedDoctor] = useState(doctor);

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/myadmin/api/get/all/department/`
        );
        setDepartments(response.data);
      } catch (err) {
        console.error("Error fetching departments:", err);
      }
    };
    fetchData();
  }, []);

  const toggleEditMode = () => {
    setIsEditMode((prevEditMode) => !prevEditMode);
    setEditedDoctor(doctor);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = e.target.type === "file" ? e.target.files[0] : value;
  
    if (name === "id") {
      const selectedDepartment = departments.find(
        (department) => department.id === parseInt(newValue)
      );
      setEditedDoctor((prevDoctor) => ({
        ...prevDoctor,
        department: {
          id: newValue,
          department_name: selectedDepartment.department_name, // Update department name
        },
      }));
    } else if (name === "is_active") {
      setEditedDoctor((prevDoctor) => ({
        ...prevDoctor,
        user: {
          ...prevDoctor.user,
          is_active: newValue === "true", // Convert to boolean
        },
      }));
    } else {
      setEditedDoctor((prevDoctor) => ({
        ...prevDoctor,
        user: {
          ...prevDoctor.user,
          [name]: newValue,
        },
      }));
    }
  };
  

  const handleSave = async () => {
    const shouldSave = window.confirm("Are you sure you want to save changes?");
      
    if (!shouldSave) {
      return;
    }
  
    const hasChanges =
      JSON.stringify(editedDoctor.user) !== JSON.stringify(doctor.user) ||
      JSON.stringify(editedDoctor.department) !== JSON.stringify(doctor.department) ||
      editedDoctor.doctor_profile_image instanceof File;
  
    if (!hasChanges) {
      toast.info("No changes to save.");
      setIsEditMode(false);
      onClose();
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("name", editedDoctor.user.name);
      formData.append("is_active", editedDoctor.user.is_active);
      formData.append("department", editedDoctor.department.id);
  
      if (editedDoctor.doctor_profile_image instanceof File) {
        formData.append("doctor_profile_image", editedDoctor.doctor_profile_image);
      }
  
      const response = await axios.put(
        `${API_URL}/myadmin/api/edit/doctor/${doctor.user.id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      const updatedDoctor = {
        ...doctor,
        user: {
          ...doctor.user,
          name: editedDoctor.user.name,
          is_active: editedDoctor.user.is_active,
        },
        department: {
          ...doctor.department,
          id: editedDoctor.department.id,
        },
        // Include any other properties you want to update
        doctor_profile_image: editedDoctor.doctor_profile_image instanceof File
          ? editedDoctor.doctor_profile_image
          : doctor.doctor_profile_image,
      };
  
      setIsEditMode(false);
      onClose();
      toast.success("Doctor details saved successfully!");
      setDoctor((prevDoctorList) =>
        prevDoctorList.map((prevDoctor) =>
          prevDoctor.user.id === doctor.user.id ? updatedDoctor : prevDoctor
        )
      );
    } catch (error) {
      console.error("Error saving doctor:", error.response?.data || error.message);
      toast.error("Error saving doctor: See console for details.");
    }
  };
  

  // Function to handle deleting the doctor
  const handleDelete = async () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this doctor?"
    );

    if (shouldDelete) {
      try {
        await axios.delete(
          `${API_URL}/myadmin/api/delete/doctor/${doctor.user.id}/`
        );

        onClose();
        toast.success("Doctor deleted successfully!");
        setDoctor((prevDoctorList) =>
        prevDoctorList.filter((prevDoctor) => prevDoctor.user.id !== doctor.user.id)
      );
      } catch (error) {
        console.error("Error deleting doctor:", error);
        toast.error("Doctor deleted failed!");
      }
    }
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setEditedDoctor((prevDoctor) => ({
      ...prevDoctor,
      user: { ...doctor.user },
      department: { ...doctor.department },
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
      <div className="bg-white rounded-lg p-8 w-96">
        <div className="flex justify-end">
          {isEditMode ? (
            <>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4 hover:bg-blue-600 focus:outline-none shadow-md"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none shadow-md"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none shadow-md"
              >
                Delete
              </button>
              <button
                onClick={toggleEditMode}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none shadow-md"
              >
                Edit
              </button>
            </>
          )}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            Close
          </button>
        </div>
        <div className="flex flex-col items-center mt-6">
          <img
            src={
              isEditMode && editedDoctor.doctor_profile_image instanceof File
                ? URL.createObjectURL(editedDoctor.doctor_profile_image)
                : `${API_URL}${doctor.doctor_profile_image}`
            }
            alt="avatar"
            className="h-40 w-40 rounded-full object-cover object-center mb-4 shadow-lg"
          />
          {isEditMode ? (
            <input
              type="file"
              onChange={(e) =>
                setEditedDoctor((prevDoctor) => ({
                  ...prevDoctor,
                  doctor_profile_image: e.target.files[0], 
                }))
              }
              className="mb-4 border border-gray-300 p-2 w-60 rounded-lg focus:outline-none"
            />
          ) : null}
          <h2 className="font-bold text-2xl mb-2">
            {isEditMode ? (
              <input
                type="text"
                name="name"
                value={editedDoctor.user.name}
                onChange={handleChange}
                className="border-b border-gray-400 focus:outline-none text-xl"
              />
            ) : (
              doctor.user.name
            )}
          </h2>
          <p className="text-gray-500 mb-4">{doctor.user.email}</p>
          <p className="mb-2">
            <span className="font-medium text-lg">Department: </span>
            {isEditMode ? (
              <select
                name="id" 
                value={editedDoctor.department.id}
                onChange={handleChange}
                className="border border-gray-400 focus:outline-none rounded-md px-2 py-1 text-lg"
              >
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.department_name}
                  </option>
                ))}
              </select>
            ) : (
              doctor.department.department_name
            )}
          </p>
          <p>
            <span className="font-medium text-lg">Status: </span>
            {isEditMode ? (
              <select
                name="is_active"
                value={editedDoctor.user.is_active}
                onChange={handleChange}
                className="border border-gray-400 focus:outline-none rounded-md px-2 py-1 text-lg"
              >
                <option value={true}>Active</option>
                <option value={false}>Blocked</option>
              </select>
            ) : doctor.user.is_active ? (
              "Active"
            ) : (
              "Blocked"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorModal;
