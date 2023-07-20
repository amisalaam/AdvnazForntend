import React, { useEffect, useState } from 'react';


const DoctorDashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/ws/doctor/${2}/`); // Replace with your backend WebSocket URL for NotificationConsumer

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
    
      console.log(message)
      setMessages((prevMessages) => [...prevMessages, message]);
     
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>DoctorDashboard</h1>
      <h2>Received Messages:</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorDashboard;
