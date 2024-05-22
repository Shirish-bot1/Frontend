import { useState } from "react";

export const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePop = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form is submitted");
    };

    return (
        <div>
            <button onClick={togglePop} className="font-bold text-white bg-blue-500 hover:bg-blue-600 border rounded-full px-4 py-2 focus:outline-none">
                Contact us
            </button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={togglePop}>&times;</span>
                        <h2>Form</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
