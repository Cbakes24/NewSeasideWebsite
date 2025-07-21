
import Image from "next/image";


export default function BookingPage() {
  return (
    <main className="min-h-screen bg-teal text-gray-800 px-4 py-10">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-teal mb-6 text-center">
          Book Your Experience
        </h1>
<div className="relative w-[300px] h-[300px] mx-auto">
  <Image
    src="/verticalSunset.jpeg"
    alt="Sunset"
    fill
    className="object-cover rounded-lg shadow-md p-5 bg-offwhite rotate-5"
  />
    <Image
    src="/verticalSunset.jpeg"
    alt="Sunset"
    fill
    className="object-cover rounded-lg shadow-md p-5 bg-offwhite rotate-20"
  />
</div>




        <form className="space-y-6">
          {/* Customer Info */}
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input type="text" className="w-full p-2 border-b-2 rounded" required />
          </div>

          <div>
            <label className="block font-medium mb-1">How did you hear about us?</label>
            <input type="text" className="w-full p-2 border-b-2 rounded" />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border-b-2 rounded" required />
          </div>

          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input type="tel" className="w-full p-2 border-b-2 rounded" />
          </div>
       { /* Type Of Phone */}
        <div>
          <label className="block font-medium mb-1">Type Of Phone</label>
          <select name="type" className="w-full p-2 border-b-2 rounded">
            <option value="">Select phone type</option>
            <option value="iphone">iPhone</option>
            <option value="android">Android</option>
          </select> 
        </div>

          {/* Event Details */}
          <div>
            <label className="block font-medium mb-1">Preferred Date</label>
            <input type="date" className="w-full p-2 border-b-2 rounded" />
          </div>

          <div>
            <label className="block font-medium mb-1">Start Time</label>
            <input type="time" className="w-full p-2 border-b-2 rounded" />
          </div>

          <div>
            <label className="block font-medium mb-1">Guest Count</label>
            <input type="number" className="w-full p-2 border-b-2 rounded" />
          </div>

          <div>
            <label className="block font-medium mb-1">Style</label>
            <select className="w-full p-2 border-b-2 rounded">
              <option>Classic</option>
              <option>Bali</option>
              <option>Picnic</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Occasion Type</label>
            <input
              type="text"
              placeholder="Date Night, Birthday, Proposal..."
              className="w-full p-2 border-b-2 rounded"
            />
          </div>

          {/* Add-ons */}
          <fieldset>
            <legend className="block font-medium mb-2">Add-ons</legend>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Extra Blankets</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Charcuterie Board</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Tiki Torches</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Extra Hour</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Projector + Movie Setup</span>
              </label>
            </div>
          </fieldset>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-peach text-white font-semibold py-3 rounded hover:bg-orange transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </main>
  );
}
