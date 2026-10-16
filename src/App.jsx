
import React, { useRef, useState } from "react";

function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Login Form
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Enter your login details
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              ref={usernameRef}
              placeholder="Enter username"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter password"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {submittedData && (
          <div className="mt-6 p-5 bg-green-50 border border-green-300 rounded-lg">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              Submitted Information
            </h2>

            <p className="text-gray-700 mb-2">
              <strong>Username:</strong> {submittedData.username}
            </p>

            <p className="text-gray-700">
              <strong>Password:</strong> {submittedData.password}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
