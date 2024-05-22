
function Form() {
  return (
    <>
    <div className='flex flex-row bg-gray-50 p-4 '>
      <form className='w-max mx-auto'>
        <div className='text-3xl mb-4'>3.Accused person name and detail of complaint</div>
        
        <div className='mb-4 flex flex-row'>
          <div className='mr-4'>
            <label className='block text-sm font-semibold mb-1'>Full Name:</label>
            <input id="fullname3" type="text" className='border rounded-md px-3 py-2 w-full'/>
          </div>
          <div className='mr-4'>
            <label className='block text-sm font-semibold mb-1'>Phone number:</label>
            <input id="numb3" type="text" className='border rounded-md px-3 py-2 w-full'/>
          </div>
          
          <div className='mr-4'>
            <label className='block text-sm font-semibold mb-1'> Address:</label>
            <input id="Address2" type="text" className='border rounded-md px-3 py-2 w-full'/>
          </div>
          <div className='mr-4'>
            <label className='block text-sm font-semibold mb-1'> Date:</label>
            <input id="dateInput" type="date" className='border rounded-md px-3 py-2 w-full'/>
          </div>
          <div className='mr-4'>
            <label className='block text-sm font-semibold mb-1'> Time:</label>
            <input id="timeInput" type="time" className='border rounded-md px-3 py-2 w-full '/>
          </div>
          <div className='mr-4'>
                <label className='block text-sm font-semibold mb-1'>Complainant signature</label>
                <input id="sign" type="text" className='border rounded-md px-3 py-2 w-50'/>
                
            </div>
                
          
          
        </div>
        <div className='md-4 flex flex-row'>
            <div className='mr-4'>
                <label className='block text-sm font-semibold mb-1'>Detail information</label>
                <textarea id='textarea' type='text' cols='100' rows ='10'></textarea>
            </div>
        </div>
       
             <center><button type="button" id='but' className="border rounded-r-none px-3 py-2 w-auto">
                Submit
                </button></center>
         
         
       
          
       
      </form>
    </div>
    
   </>
  )
}

export default Form
