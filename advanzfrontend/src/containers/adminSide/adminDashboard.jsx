import React, { useEffect, useState } from 'react';


const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws/superuser-notifications/'); // Replace with your backend WebSocket URL for NotificationConsumer

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
      <h1>AdminDashboard</h1>
      <h2>Received Messages:</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
