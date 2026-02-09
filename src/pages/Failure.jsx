import React from "react";
import { useNavigate } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

const Failure = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 text-center">
        
        <div className="flex justify-center mb-4">
          <MdErrorOutline className="text-red-600" size={80} />
        </div>

        <h1 className="text-2xl font-semibold text-red-600 mb-2">
          Payment Failed
        </h1>

        <p className="text-gray-700 mb-1">
          Your payment via <span className="font-medium">eSewa</span> was not successful.
        </p>

        <p className="text-sm text-gray-500 mb-6">
          This may happen due to cancellation, timeout, or network issues.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Try Again
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Failure;
