"use client"; // Marking this component as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";

const OTPPage = () => {
    const [otp, setOtp] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
            setError("The code is incorrect or incomplete.");
            setLoading(false);
            return;
        }

        setTimeout(() => {
            if (otp === "123456") {
                router.push("/success");
            } else {
                setError("The code is incorrect. Please try again.");
            }
            setLoading(false);
        }, 1500);
    };

    const resendOtp = () => {
        alert("Resending OTP");
        // Implement OTP resend logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
                    Enter Verification Code
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter verification code"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                            maxLength={6}
                            required
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-all"
                        disabled={loading}
                    >
                        {loading ? "Verifying..." : "Verify"}
                    </button>
                </form>

                <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
                    Didn&apos;t receive the code? 
                    <button
                        className="text-primary hover:underline"
                        onClick={resendOtp} // Directly calling the function here
                    >
                        Resend Code
                    </button>
                </p>
            </div>
        </div>
    );
};

export default OTPPage;
