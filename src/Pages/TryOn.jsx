import React, { useState, useEffect } from "react";
import axios from "axios";

const TryOn = () => {
  const [image, setImage] = useState(0);
  const [ans, setAns] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/predict", { temperature: image })
        .then((res) => {
          console.log(res);
        });
      console.log("Success");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  };
  return (
    <>
      <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="http://localhost:5000"
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">submit</button>
        <h1>{ans}</h1>
      </form>
    </>
  );
};

export default TryOn;
