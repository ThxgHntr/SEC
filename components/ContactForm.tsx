import React, { useState } from 'react';
import axios from 'axios';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        message: '',
        name: '',
        email: '',
        phone: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/send-email', formData);
            console.log('Email sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending email:', (error as Error).message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                    Your message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Leave a comment..."
                ></textarea>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your name
                </label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="name"
                    required
                ></input>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="name@flowbite.com"
                    required
                ></input>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0123456789"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    required
                ></input>
            </div>
            <div className="my-4 flex justify-end">
                <button
                    type="submit"
                    className="text-white bg-xanh-le hover:bg-xanh-dam rounded-lg text-sm w-44 p-2 text-center"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
