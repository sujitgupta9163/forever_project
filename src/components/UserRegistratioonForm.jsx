// UserRegistrationForm.js
import React, { useState } from 'react';

function UserRegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered:\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-200 to-pink-500">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold mb-6 text-center text-pink-600">User Registration</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button type="submit" className="w-full bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700 transition duration-200">
          Register
        </button>
      </form>
    </div>
  );
}

export default UserRegistrationForm;
