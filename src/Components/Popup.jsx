import { motion } from "framer-motion";
import React from "react";

const Popup = ({ close, el }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-20 bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white drop-shadow-md rounded-md p-4 w-mid max-w-lg mx-auto"
      >
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Contact Details</h2>
          <button
            className="text-gray-100 px-2 rounded-md bg-pink-500 hover:text-gray-800 hover:bg-pink-700 transition duration-300"
            onClick={() => close()}
          >
            Close
          </button>
        </div>
        <div
          key={el.id}
          className="bg-gray-300 m-4 p-4 text-black rounded-md shadow-inner"
        >
          <div className="w-3/4 m-auto">
            <img
              className="w-full rounded-full shadow-lg"
              src="/assets/images/contact-image.jpg" // Replace this with the path to your local image
              alt="Contact"
            />

            <div className="p-4"></div>
          </div>
          <div className="text-left">
            <p>First Name: {el.first_name}</p>
            <p>Last Name: {el.last_name}</p>
            <p>Mobile: {el.mob}</p>
            <p>Status: {el.status === "active" ? "Active" : "Inactive"}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Popup;
