"use client"; // Marking the component as a client component

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-600 dark:text-green-400 mb-6">
          Verified Successfully
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          The OTP has been successfully verified. You can now proceed with registration or login.
        </p>
        <button
          onClick={() => (window.location.href = "/login")} // Redirect user to the login page
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-all"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
