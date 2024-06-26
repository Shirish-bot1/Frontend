import React, { useState, useEffect } from "react";
import axios from "axios";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const donationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d{10}$/, { message: "Phone number must be in number and 10 digits" }),
  amount: z.number().min(1, { message: "Amount must be at least 1 NPR" }).max(5000, { message: "Amount must be at most 5000 NPR" })
});

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});

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

    const formData = {
      name,
      email,
      phone,
      amount: parseFloat(amount)
    };

    const validation = donationSchema.safeParse(formData);
    if (!validation.success) {
      const errorMessages = validation.error.format();
      setErrors(errorMessages);
      return;
    }

    const payload = {
      return_url: `${window.location.origin}/payment-success`,
      website_url: `${window.location.origin}`,
      amount: parseFloat(amount) * 100, // Convert amount to paisa
      purchase_order_id: `order_${Date.now()}`,
      purchase_order_name: "Donation",
      customer_info: { name, email, phone },
      merchant_extra: "Thank you for your donation!"
    };

    try {
      const response = await axios.post("http://localhost:5000/api/v7/khalti-api", payload);
      if (response.data.payment_url) {
        toast.success("Welcome to the payment page. Redirecting...");
        window.location.href = response.data.payment_url;
      } else {
        toast.error("No payment URL received from Khalti");
      }
    } catch (error) {
      toast.error("Error initiating donation: Please check your credentials");
      console.error("Error initiating donation:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6 text-center">Donate to Our Cause</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleDonate} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name._errors[0]}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email._errors[0]}</p>}
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone._errors[0]}</p>}
          <input
            type="number"
            placeholder="Amount (in NPR)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.amount && <p className="text-red-500 text-sm">{errors.amount._errors[0]}</p>}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Donate with Khalti
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
