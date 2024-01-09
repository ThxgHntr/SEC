import React, { useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    phone: "",
  });

  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("/api/send-email", formData);
    // Show success message for 2 seconds
    setSuccessMessageVisible(true);
    setFormData({
      message: "",
      name: "",
      email: "",
      phone: "",
    });
    setTimeout(() => {
      setSuccessMessageVisible(false);
    }, 2000);
  };

  console.log("Rendered with successMessageVisible:", successMessageVisible);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-2 bg-emerald-300 w-full">
      <div className="flex flex-col basis-1/2 text-justify text-xl p-8 gap-4">
        <p className="text-4xl text-center font-bold">SMILE EYES CHARITY</p>
        <p>
          Smile Eye Charity, is a non-profit organization. Smile Eye Charity
          connects domestic and foreign resources to organize practical training
          programs for people in difficult conditions or difficult areas. The
          programs help people produce food, improving their living standard.
          The programs also motivate and accompany people in exploring their
          potentials and inspiration to develop their skills and talents. All of
          the programs are conducted in a sustainable way.
        </p>
        <p className="font-bold">Contact for contribution:</p>
        <div className="flex flex-col gap-4 py-3">
          <p>
            <a className="font-bold">Organization license: </a>4001273487
          </p>
          <div className="w-fit">
            <div className="flex flex-col sm:flex-row gap-1">
              <a className="font-bold">Bank account: </a>
              <span>
                Techcombank, 22296699, Smile Eye Charity
                <br />
                MB bank, 020166669999, Smile Eye Charity
              </span>
            </div>
          </div>
          <p>
            <a className="font-bold">Swift code: </a>VTCBVNVX
          </p>
        </div>
        <div className="flex flex-col gap-4 py-3">
          <p>
            <a className="font-bold">Address: </a>Pà-căng village, Cà Dy
            commune, Nam Giang district, Quảng Nam province
          </p>
          <p>
            <a className="font-bold">Representative: </a>DINH THI DONG PHUONG
          </p>
          <p>
            <a className="font-bold">Phone: </a>
            <a className="text-blue-600" href="tel:0962414125">
              0962 414 125
            </a>
          </p>
          <p>
            <a className="font-bold">Email: </a>
            <a className="text-blue-600" href="mailto:dinhdongphuong@gmail.com">
              dinhdongphuong@gmail.com
            </a>
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="basis-2/5 p-4 bg-white rounded-3xl shadow-xl"
      >
        <p className="text-4xl text-center font-bold">
          Contact for contribution
        </p>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-md font-medium text-gray-900"
          >
            Content:
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-900">
            Your name<a className="text-red-500">*</a>:
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
            placeholder="name"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-900">
            Your email<a className="text-red-500">*</a>:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-900">
            Your phone:
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="0123456789"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
          ></input>
        </div>
        <div className="my-4 flex justify-end">
          {successMessageVisible && (
            <div className="text-green-500 text-left">
              Send successfully! Thank you for your sincere contribution. Smile
              Eye charity will contact you as soon as possible.
            </div>
          )}
          <button
            type="submit"
            className="text-white bg-xanh-dam hover:bg-xanh-le rounded-lg w-36 p-2 text-center"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
