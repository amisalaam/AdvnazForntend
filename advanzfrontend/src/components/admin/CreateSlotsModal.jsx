import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

const CreateSlotsModal = ({ isOpen, onClose, onCreatedSlots }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    doctor: "",
    start_time: "",
    end_time: "",
    slot_duration: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/myadmin/api/get/slots/all/doctor/`
        );
        setDoctors(response.data);
        console.log(response.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Data:", formData); // Log the formData to check its values

      // Create the payload for the POST request
      const payload = {
        date: formData.date,
        start_time: formData.start_time,
        end_time: formData.end_time,
        slot_duration: formData.slot_duration,
        doctor: formData.doctor, // Use formData.doctor_name here
      };

      // Send the POST request
      const response = await axios.post(
        `${API_URL}/doctor/api/create/slots/`,
        payload
      );

      console.log(response.data);
      onClose();
      onCreatedSlots();

      toast.success("Slot created successfully ");
    } catch (error) {
      toast.error("Slot creation failed ");

      console.error("Error creating slots:", error);
    }
  };
  return (
    <div
      className={`modal ${
        isOpen
          ? "modal-open fixed inset-0 flex justify-center items-center bg-black bg-opacity-75"
          : "hidden"
      }`}
    >
      <div className="modal-overlay"></div>
      <div className="modal-container bg-white rounded-lg shadow-lg w-[30rem]">
        <div className="modal-header bg-gradient-to-r from-blue-900 to-blue-300 p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Create Slots</h3>
          <button
            className="modal-close text-gray-300 hover:text-gray-400"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="modal-content p-4">
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Doctor Name
              </label>
              <select
                name="doctor"
                value={formData.doctor_name}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="">Select a doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.user_id} value={doctor.user_id}>
                    {doctor.doctor_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Start Time
              </label>
              <input
                type="time"
                name="start_time"
                value={formData.start_time}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                End Time
              </label>
              <input
                type="time"
                name="end_time"
                value={formData.end_time}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Slot Duration
              </label>
              <input
                type="number"
                name="slot_duration"
                value={formData.slot_duration}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="button"
                className="modal-close-button mr-2 text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSlotsModal;
