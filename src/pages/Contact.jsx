import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">
          Get in <span className="text-pink-500">Touch</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-center text-gray-300">
          Let’s connect for collaborations, freelance projects, or tech talks!
        </p>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800/60 p-6 rounded-lg shadow-lg hover:shadow-pink-500/40 transition">
            <h2 className="text-lg font-semibold text-pink-400">Email</h2>
            <a
              href="mailto:midhun@example.com"
              className="mt-2 block text-gray-300 hover:text-pink-400 underline"
            >
              midhun@gmail.com
            </a>
          </div>

          <div className="bg-gray-800/60 p-6 rounded-lg shadow-lg hover:shadow-pink-500/40 transition">
            <h2 className="text-lg font-semibold text-pink-400">Instagram</h2>
            <a
              href="https://instagram.com/mike.devjourney"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-gray-300 hover:text-pink-400 underline"
            >
              @mike.devjourney
            </a>
          </div>

          <div className="bg-gray-800/60 p-6 rounded-lg shadow-lg hover:shadow-pink-500/40 transition">
            <h2 className="text-lg font-semibold text-pink-400">LinkedIn</h2>
            <a
              href="https://linkedin.com/in/midhun-nk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-gray-300 hover:text-pink-400 underline"
            >
              linkedin.com/in/midhun-nk
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-gray-800/60 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-pink-400 mb-6">
            Send Me a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Midhun Nk"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 outline-none text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="midhun@gmail.com"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 outline-none text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 outline-none text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-pink-500 hover:bg-pink-600 rounded-lg font-medium shadow-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
