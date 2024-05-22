import { Contact } from "../../components/Contact";


function Mainft() {
    return (
      <>
        <div className="bg-cover bg-center bg-gray-900 w-full h-64 mt-1 px-8 py-8"> 
          <div className="flex items-center justify-start gap-10">
            <div>
              <h2 className="text-xl font-bold text-white">Working Hours</h2>
              <div className="text-white px-8 py-8">
                <p className="font-semibold underline">Day</p>
                <p>Sunday to Friday</p>
                <p className="font-semibold underline">Time</p>
                <p>10am to 4pm</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Office</h2>
              <div className="text-white px-8 py-8">
                <p className="font-semibold underline">Location</p>
                <p>Nepal, Kathmandu</p>
                <p>Lalitpur, Imadol</p>
                <p>Street-15</p>
              </div>
            </div>
             <div className="flex flex-col gap-4">
            <button className="font-bold text-white bg-blue-500 hover:bg-blue-600 border rounded-full px-4 py-2 focus:outline-none">
              About us
            </button>
             <Contact/>
            </div>

          </div>
        </div>
      </>
    );
  }
  
  export default Mainft;
  