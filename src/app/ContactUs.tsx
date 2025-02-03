"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactUsFormProps {
  brandName: string;
}

export const Contact = ({ brandName }: ContactUsFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-custom-gradient text-white p-6">
      {/* Brand Name at the Start */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mb-8"
      >
        {brandName}
      </motion.h1>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-lg backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg text-gray-200 p-6 rounded-2xl"
      >
        <h2 className="text-2xl font-semibold text-center">Get in Touch</h2>
        <p className="text-center text-gray-300 mb-6">
          We'd love to hear from you!
        </p>

        {submitted ? (
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="text-green-400 text-center font-semibold"
          >
            🎉 Thank you! Your message has been sent.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-transparent border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 text-white"
              />
              <label 
                className={`absolute left-3 top-3 transition-all ${
                  form.name ? "text-xs -top-2 text-indigo-300" : "text-gray-300"
                }`}
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-transparent border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 text-white"
              />
              <label 
                className={`absolute left-3 top-3 transition-all ${
                  form.email ? "text-xs -top-2 text-indigo-300" : "text-gray-300"
                }`}
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-transparent border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 text-white"
                rows={4}
              ></textarea>
              <label 
                className={`absolute left-3 top-3 transition-all ${
                  form.message ? "text-xs -top-2 text-indigo-300" : "text-gray-300"
                }`}
              >
                Message
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>

      {/* Brand Name at the End */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mt-8"
      >
      </motion.h1>
    </div>
  );
};
