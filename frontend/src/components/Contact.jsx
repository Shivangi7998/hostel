import React from "react";

const Contact = () => {
  return (
    <section className="contact-section px-6 py-12 bg-gray-50 transition duration-300 hover:bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4 transition duration-300 hover:text-indigo-700">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-8 transition duration-300 hover:text-gray-800">
        We'd love to hear from you! Whether you're planning your next Hostel or
        just want to say hi, drop us a message.
      </p>

      <form
        id="contactForm"
        action="https://api.web3forms.com/submit"
        method="POST"
        className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 
        transition duration-300 hover:shadow-xl hover:scale-105"
      >
        {/* Web3Forms Access Key */}
        <input
          type="hidden"
          name="access_key"
          value="4c31e106-ed27-43ec-9811-03a496832d22"
        />

        {/* Name */}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
          className="w-full border rounded-md px-3 py-2 transition duration-300 
          hover:border-indigo-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
          className="w-full border rounded-md px-3 py-2 transition duration-300 
          hover:border-indigo-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Message */}
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Your Message"
          className="w-full border rounded-md px-3 py-2 transition duration-300 
          hover:border-indigo-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium 
          transition duration-300 transform hover:bg-indigo-700 hover:scale-105"
        >
          Send Message
        </button>

        {/* Form Message */}
        <p
          id="form-message"
          className="form-message text-center text-green-600 transition duration-300"
        ></p>
      </form>
    </section>
  );
};

export default Contact;
