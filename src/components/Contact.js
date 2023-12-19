import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [note, setNote] = useState({ name: "", email: "", message: "" });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      if (response.ok) {
        console.log("Contact information saved successfully!");
        setNote({ name: "", email: "", message: "" });
        setIsSuccess(true);

        // Reset success state after 2 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      } else {
        console.error("Failed to save contact information");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex bg-blue-500 w-screen">
      <motion.div
        variants={{
          hidden: { y: 30, opacity: 0 },
          show: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.7 }}
        className="p-8 rounded shadow-md md:w-2/3 sm:w-full mx-auto my-32 mt-10 md:ml-64 bg-none shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

        {isSuccess && (
          <p className="text-green-900 font-semibold mb-4">
            Your message was sent successfully!
          </p>
        )}

        <form onSubmit={handleClick}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-black text-sm font-medium mb-2"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={note.name}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-black text-sm font-medium mb-2"
            >
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={note.email}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-black text-sm font-medium mb-2"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={note.message}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mx-auto block"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;

