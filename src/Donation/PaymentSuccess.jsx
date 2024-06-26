import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState("Processing");
  const [paymentResponse, setPaymentResponse] = useState(null);

  useEffect(() => {
    const verifyPayment = async () => {
      const pidx = new URLSearchParams(window.location.search).get("pidx");

      try {
        const response = await axios.post(
          "http://localhost:5000/api/v7/khalti-verify",
          { pidx },
          {
            headers: {
              Authorization: `Key 835c918972134793a26c82a417b49b1d`,
            },
          }
        );

        console.log("Payment Verification Response:", response.data);

        if (response.data.status === "Completed") {
          console.log("Payment verification successful");
          setVerificationStatus("Success");
        } else {
          console.error("Payment verification failed");
          setVerificationStatus("Failed");
        }

        setPaymentResponse(response.data); 
      } catch (error) {
        console.error("Error verifying payment:", error);
        setVerificationStatus("Failed");
      }
    };

    verifyPayment();
  }, []);

  const handleNavigateToDonation = () => {
    navigate("/Donation");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {verificationStatus === "Processing"
          ? "Processing Payment..."
          : verificationStatus === "Success"
          ? "Payment Successful!"
          : "Payment Verification Failed"}
      </h1>
      {paymentResponse && (
        <div className="my-4 p-4 bg-white rounded shadow-md">
          <h2 className="text-lg font-bold mb-2">Payment Verification Details:</h2>
          <p>
            Transaction ID: {paymentResponse.transaction_id}
            <br />
            Status: {paymentResponse.status}
            <br />
            Total Amount: {(paymentResponse.total_amount / 100).toFixed(2)} NPR
            <br />
            Fee: {paymentResponse.fee}
          </p>
        </div>
      )}
      {verificationStatus === "Success" && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleNavigateToDonation}
        >
          Go to Donation Page
        </button>
      )}
    </div>
  );
};
