import React, { useState, useEffect } from "react";
import axios from "axios";

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
   
    const script = document.createElement("script");
    script.src = "https://khalti.s3.ap-south-1.amazonaws.com/KPG/dist/2020.12.17.0.0.0/khalti-checkout.iffe.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  

  const handleDonate = async (e) => {
    e.preventDefault();

    const payload = {
      return_url: import.meta.env.VITE_SUCCESS_URL,
      website_url: import.meta.env.VITE_WEBSITE_URL,
      amount: parseInt(amount) * 100, // Convert amount to paisa
      purchase_order_id: "test12",
      purchase_order_name: "Donation",
      customer_info: { name, email, phone },
      merchant_extra: "Thank you for your donation!",
    };
    console.log("payload",payload)

    try {
      const response = await axios.post("http://localhost:5000/api/v7/khalti-api", payload);
      if (response.data.payment_url) {
        window.location.href = response.data.payment_url; 
      }
    } catch (error) {
      console.error("Error initiating donation:", error);
    }
  };

  useEffect(() => {
   
    const params = new URLSearchParams(window.location.search);
    if (params.get("status") === "success") {
      window.location.href = "http://localhost:3000/Donation"; 
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Donate to Our Cause</h1>
      <form onSubmit={handleDonate} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="px-4 py-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Amount (in NPR)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
        >
          Donate with Khalti
        </button>
      </form>
    </div>
  );
};

export default Donate;
