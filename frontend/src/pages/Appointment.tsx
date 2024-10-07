import axios from "axios";
import { useState } from "react";

const Appointment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const submitForm = async () => {
    const res = await axios.post("http://localhost:5000/appointment", {
      name: name,
      email: email,
      phone: phone,
      date: date,
      time: time,
      symptoms: symptoms,
      message: message,
    });
    setResponse(res.data.message);
  };

  return (
    <div className="my-16 px-8">
      <form className="px-4 mx-auto my-16 max-w-xl">
        <div className="pb-8 text-4xl font-bold w-full text-center">Book an Appointment</div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-deep-purple-accent-400 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-deep-purple-accent-400 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-deep-purple-accent-400 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Date</label>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-deep-purple-accent-400 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Time</label>
          <input
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-deep-purple-accent-400 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Symptoms (optional)</label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-deep-purple-accent-400 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Message (optional)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-deep-purple-accent-400 block w-full p-2.5"
          />
        </div>
        <button
          type="button"
          onClick={() => submitForm()}
          className="text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Submit
        </button>
        <p className="text-green-500">{response}</p>
      </form>
    </div>
  );
};

export default Appointment;
