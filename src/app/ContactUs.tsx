"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

interface ContactProps {
  contactInfo?: any;
  data?: {
    email?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
  brandName: string;
}

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact: React.FC<ContactProps> = ({ contactInfo, data, brandName }) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Handle input change
  };

  const clearState = () => {
    // Clear form state
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <div id="contact">
        <div>
          <div>
            <div>
              <h2>{brandName}</h2>
              <p>Contact us for more information.</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                </div>
              </div>
              <div>
                <textarea name="message" placeholder="Message" required onChange={handleChange}></textarea>
              </div>
              <div>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>

          <div>
            <div>
              <h3>Contact Info</h3>
              <div>
                <p>Email: {data?.email || "loading"}</p>
              </div>
            </div>

            <div>
              <ul>
                <li>
                  <a href={data?.facebook || "/"}>Facebook</a>
                </li>
                <li>
                  <a href={data?.twitter || "/"}>Twitter</a>
                </li>
                <li>
                  <a href={data?.youtube || "/"}>YouTube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <p>&copy; 2025 {brandName}</p>
      </div>
    </div>
  );
};
