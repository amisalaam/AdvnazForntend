import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classNames from "classnames";

const API_URL = import.meta.env.VITE_API_URL;

const UserPage = () => {
  const [doctor, setDoctor] = useState({});
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today;
  });
  const [availableSlots, setAvailableSlots] = useState([]);
  const [noSlotsAvailable, setNoSlotsAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  const currentDate = new Date();
  const [bookedSlot, setBookedSlot] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const [showSlots, setShowSlots] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getDoctor();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      getAvailableSlots();
    }
  }, [selectedDate]);

  async function getDoctor() {
    try {
      const response = await axios.get(
        `${API_URL}/doctor/api/get/single/doctor/${id}/`
      );
      setDoctor(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  async function getAvailableSlots() {
    try {
      const response = await axios.get(
        `${API_URL}/doctor/api/get/slots/${id}/`
      );

      const currentDateTime = new Date();
      const selectedDateStr = selectedDate.toDateString();
      const futureSlots = response.data.filter((slot) => {
        const slotDate = new Date(slot.date);
        const slotDateStr = slotDate.toDateString();
        return (
          slotDate > currentDateTime && slotDateStr === selectedDateStr
        );
      });

      setAvailableSlots(
        futureSlots.map((slot) => ({
          ...slot,
          selected: selectedSlot && selectedSlot.id === slot.id,
        }))
      );
      setNoSlotsAvailable(futureSlots.length === 0);
    } catch (e) {
      console.log(e);
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const selectedDateStr = selectedDate.toDateString();
      const currentDateStr = date.toDateString();

      return classNames({
        selected: selectedDateStr === currentDateStr,
        "bg-advanzRed": selectedDateStr === currentDateStr,
        "text-white": selectedDateStr === currentDateStr,
        "rounded-full": selectedDateStr === currentDateStr,
      });
    }

    return null;
  };

  const tileDisabled = ({ date }) => {
    return date < currentDate;
  };

  const handleSlotSelect = (id) => {
    const updatedSlots = availableSlots.map((slot) => {
      if (slot.id === id) {
        return {
          ...slot,
          selected: !slot.selected,
        };
      }
      return {
        ...slot,
        selected: false, // Deselect other slots
      };
    });

    setSelectedSlot(updatedSlots.find((slot) => slot.id === id));
    setAvailableSlots(updatedSlots);
  };

  const handleSubmit = async () => {
    if (selectedSlot) {
      try {
        await axios.put(
          `${API_URL}/doctor/api/update/slots/${selectedSlot.id}/`,
          {
            is_booked: true,
          }
        );
        console.log("Slot successfully booked!");
        setBookedSlot(selectedSlot);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="bg-cover bg-center bg-gradient-to-t from-white to-advanzBlue min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-screen-lg  mx-auto overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="p-5 md:p-8 md:flex md:flex-col md:items-center">
              <img
                src={`${API_URL}${doctor.doctor_profile_image}`}
                alt="Profile Picture"
                className="h-64 w-64 md:h-80 md:w-80 rounded-xl mb-4 border-4 border-white object-cover"
              />
              <section className="mt-8 text-center">
                <h2 className="mb-6 font-sans text-3xl md:text-3xl font-medium tracking-normal text-advanzBlue antialiased">
                  Dr: {doctor.name}
                </h2>
                <p className="mb-4 font-sans text-xl md:text-2xl font-semibold tracking-normal text-gray-400 antialiased">
                  Department: {doctor.department_name}
                </p>
                <p className="font-sans text-lg md:text-xl font-normal text-gray-600 antialiased">
                  About: I am a doctor
                </p>
              </section>
            </div>
            <div className="relative">
              <div className="mt-4 w-full max-w-lg">
                <Calendar
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="bg-white text-gray-700 p-2 rounded"
                  calendarClassName="w-full"
                  tileClassName={tileClassName}
                  tileContent={({ date }) =>
                    date.getTime() === selectedDate.getTime() ? (
                      <span
                        style={{ backgroundColor: "red", color: "black" }}
                      ></span>
                    ) : null
                  }
                  tileDisabled={tileDisabled}
                />
              </div>

              {showSlots && (
                <>
                  <div className="mt-4">
                    <p className="font-sans text-lg md:text-xl font-semibold tracking-normal text-gray-600 antialiased">
                      Available Slots
                    </p>
                    {noSlotsAvailable ? (
                      <p className="font-sans text-lg md:text-xl font-normal text-advanzRed antialiased py-2">
                        No slots available for the selected date.
                      </p>
                    ) : (
                      <div className="relative overflow-y-auto max-h-[109px] max-w-[25rem] scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-300">
                        {availableSlots.map((slot) => (
                          <button
                            key={slot.id}
                            className={classNames(
                              "font-semibold py-2 px-4 border-[3px] rounded-xl m-1",
                              {
                                "bg-blue-700 text-white border-blue-700":
                                  slot.selected,
                                "border-blue-700 text-blue-700":
                                  !slot.selected && !slot.is_booked,
                              }
                            )}
                            onClick={() => handleSlotSelect(slot.id)}
                            disabled={slot.is_booked}
                          >
                            {slot.start_time}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    className="mt-6 px-4 py-2 m-4 item-right rounded-xl bg-advanzBlue text-white hover:bg-blue-700 transition-colors duration-300"
                    disabled={!selectedSlot}
                    onClick={handleSubmit}
                  >
                    Book Now
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserPage;
