import React from 'react'

const Second = () => {
  return (
    <section className='min-h-96 flex p-20 justify-around'>
        <div>  <div className="relative w-120 h-200  overflow-hidden">
      
      {/* Google Map iframe */}
      <iframe
        title="google-map"
        src="https://www.google.com/maps?q=New%20Baneshwor%20Kathmandu&z=16&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      />

      {/* Center Marker */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
        <img
          src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"
          alt="marker"
          className="w-10 h-10"
        />
        <div className="mt-1 rounded-md bg-violet-600 px-2 py-1 text-sm font-medium text-white shadow">
         
        </div>
      </div>

    </div></div>


          <div className="mx-auto mt-10 w-full max-w-2xl rounded-xl bg-white p-8 shadow-2xl">
      
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900">
        Contact <span className="text-orange-600">Us</span>
      </h1>
      <p className="mt-2 text-gray-500">
        If you have any queries, send us a message. Our friendly team would love to hear from you.
      </p>

      {/* Form */}
      <form className="mt-8 space-y-6">
        
        {/* Name */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Select */}
        <div>
          <label htmlFor="choice" className="block text-sm font-medium text-gray-700">
            What can we do for you?
          </label>
          <select
            id="choice"
            className="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option value="">Choose an option</option>
            <option value="momo">Momo</option>
            <option value="vegMomo">Veg Momo</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message here..."
            className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-full bg-teal-600 px-8 py-3 font-semibold text-white transition cursor-pointer hover:bg-teal-700"
        >
          Send Message
        </button>
      </form>
    </div>
    </section>
  )
}

export default Second