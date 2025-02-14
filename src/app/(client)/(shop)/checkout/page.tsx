"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaApple, FaGoogle, FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

const CheckoutPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const router = useRouter();

  const handleCheckout = (method: string) => {
    setIsProcessing(true);
    setPaymentMethod(method);

    setTimeout(() => {
      setIsProcessing(false);
      alert(`Payment successful using: ${method}`);
      router.push("/thankyou");
    }, 3000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
        Checkout
      </h2>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg mx-auto">
        <p className="text-gray-800 dark:text-gray-200 mb-4 text-center">
          Choose a payment method to complete your purchase.
        </p>

        <div className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <button
              onClick={() => handleCheckout("Apple Pay")}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
              disabled={isProcessing}
            >
              <FaApple /> {isProcessing && paymentMethod === "Apple Pay" ? "Processing..." : "Pay with Apple Pay"}
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <button
              onClick={() => handleCheckout("Google Pay")}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
              disabled={isProcessing}
            >
              <FaGoogle /> {isProcessing && paymentMethod === "Google Pay" ? "Processing..." : "Pay with Google Pay"}
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <button
              onClick={() => handleCheckout("Credit Card")}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-all flex items-center justify-center gap-2"
              disabled={isProcessing}
            >
              <FaCreditCard /> {isProcessing && paymentMethod === "Credit Card" ? "Processing..." : "Pay with Credit Card"}
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <button
              onClick={() => handleCheckout("Cash on Delivery")}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2"
              disabled={isProcessing}
            >
              <FaMoneyBillWave /> {isProcessing && paymentMethod === "Cash on Delivery" ? "Processing..." : "Cash on Delivery"}
            </button>
          </motion.div>
        </div>

        {paymentMethod === "Credit Card" && !isProcessing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-6">
            <h3 className="text-xl text-gray-800 dark:text-gray-200 mb-4">Credit Card Details</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Card Number" className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-3 rounded-lg" />
              <input type="text" placeholder="Expiration Date" className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-3 rounded-lg" />
              <input type="text" placeholder="CVV" className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-3 rounded-lg" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CheckoutPage;
