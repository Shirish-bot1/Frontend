import { Contact } from "../../components/Contact";

function Mainft() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 w-full py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-between items-start gap-10">
          <div>
            <h2 className="text-2xl font-bold text-white border-b-2 border-blue-500 inline-block pb-1">Working Hours</h2>
            <div className="text-white mt-4">
              <p className="font-semibold underline">Day</p>
              <p>Sunday to Friday</p>
              <p className="font-semibold underline mt-4">Time</p>
              <p>10am to 4pm</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white border-b-2 border-blue-500 inline-block pb-1">Office</h2>
            <div className="text-white mt-4">
              <p className="font-semibold underline">Location</p>
              <p>Nepal, Kathmandu</p>
              <p>Lalitpur, Imadol</p>
              <p>Street-15</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainft;
