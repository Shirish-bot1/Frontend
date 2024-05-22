import { useState } from "react";
import Donft from "./Donft";

function Donate() {
    const [definedDonation, setDefinedDonation] = useState("");
    const [customDonation, setCustomDonation] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    const definedAmounts = [500, 1000, 5000, 10000];

    const handleDefinedDonation = (amount) => {
        setDefinedDonation(amount);
        setCustomDonation("");
    };

    const handleCustomDonation = (e) => {
        setCustomDonation(e.target.value);
        setDefinedDonation("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Donation Details:");
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Phone Number:", phoneNumber);
        console.log("Address:", address);
        console.log("Donation Amount:", definedDonation || customDonation);
       
    };

    return (
        <>
            <div className="bg-orange-50 min-h-screen flex items-center justify-center">
                <div className="bg-white h-auto w-96 flex flex-col items-center shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-semibold text-center mb-6">Make a Donation</h2>
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-6">
                            <p className="font-semibold mb-2">Choose an Amount:</p>
                            <div className="flex flex-wrap">
                                {definedAmounts.map((amount, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => handleDefinedDonation(amount)}
                                        className={`bg-orange-400 text-white font-semibold px-4 py-2 rounded-md mr-2 mb-2 focus:outline-none ${definedDonation === amount ? 'bg-gray-600' : 'bg-orange-500 hover:bg-orange-600'}`}
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-6">
                            <p className="font-semibold mb-2">Or Enter Custom Amount:</p>
                            <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
                                <input
                                    type="number"
                                    id="customAmount"
                                    placeholder="Enter custom amount"
                                    value={customDonation}
                                    onChange={handleCustomDonation}
                                    className="w-full focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none mb-2"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none mb-2"
                            />
                            <input
                                type="tel"
                                placeholder="Your Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none mb-2"
                            />
                            <textarea
                                placeholder="Your Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none mb-2"
                                rows="3"
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-orange-400 text-white font-semibold px-6 py-3 rounded-md w-full focus:outline-none hover:bg-orange-500 transition duration-300">Donate</button>
                    </form>
                </div>
            </div>
            <Donft />
        </>
    );
}

export default Donate;
