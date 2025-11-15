import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    interestedIn: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        interestedIn: ''
      });
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <span className="text-2xl">✅</span>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Thank You!</h2>
              <p className="mb-6 text-gray-600">
                Your message has been received. Our sales team will contact you within 24 hours.
              </p>
              <div className="space-y-3">
                <Link
                  to="/"
                  className="inline-block w-full px-6 py-3 text-white transition-colors rounded-md sm:w-auto bg-primary hover:bg-primary-dark"
                >
                  Return to Home
                </Link>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-block w-full px-6 py-3 text-gray-700 transition-colors border border-gray-300 rounded-md sm:w-auto hover:bg-gray-50"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Contact Our Sales Team</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Ready to experience luxury driving? Our expert sales team is here to help you find the perfect vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="sticky p-6 bg-white rounded-lg shadow-md top-6">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Get In Touch</h2>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                      <span className="text-blue-600">📞</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+254 741 954 453</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 9AM-7PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                      <span className="text-green-600">✉️</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">sales@lewisautoworld.com</p>
                    <p className="text-sm text-gray-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full">
                      <span className="text-purple-600">🏢</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Visit Showroom</h3>
                    <p className="text-gray-600">Zimmer Avenue</p>
                    <p className="text-gray-600">Base Road, CA 90210</p>
                    <p className="text-sm text-gray-500">Mon-Sat: 10AM-8PM</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="pt-6 mt-8 border-t border-gray-200">
                <h3 className="mb-4 font-semibold text-gray-900">Why Choose LewisAutoWorld?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Expert sales consultants
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Flexible financing options
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Comprehensive test drives
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Premium after-sales service
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="interestedIn" className="block mb-2 text-sm font-medium text-gray-700">
                      Interested In
                    </label>
                    <select
                      id="interestedIn"
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a vehicle type</option>
                      <option value="suv">Luxury SUV</option>
                      <option value="sedan">Executive Sedan</option>
                      <option value="sports">Sports Car</option>
                      <option value="electric">Electric Vehicle</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Phone
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="both"
                        checked={formData.preferredContact === 'both'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Both
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 text-white transition-colors rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending Message...' : 'Send Message to Sales Team'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}