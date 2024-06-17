import { motion } from "framer-motion";
import { useAppSelector } from "../../../redux/store/store";
import { toggling } from "../../../redux/reducers/theme";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const theme = useAppSelector(toggling);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phNo, setPhNo] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const form = useRef<HTMLFormElement>(null!);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qheni8h",
        "template_lmdy6iv",
        form.current,
        "xbZzt6V4t69qmvYff"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhNo("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`p-8 rounded-lg w-[70%] ${theme === "dark" && "text-white"}`}
      >
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex justify-between">
            <div className="mb-4 w-[45%]">
              <label
                className="block text-teal-500 font-semibold mb-2"
                htmlFor="name"
              >
                Your Frist Name
              </label>
              <input
                required
                type="text"
                id="firstName"
                name="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Ei Shwe Sin"
              />
            </div>
            <div className="mb-4 w-[45%]">
              <label
                className="block text-teal-500 font-semibold mb-2"
                htmlFor="name"
              >
                Your Last Name
              </label>
              <input
                required
                type="text"
                id="lastName"
                name="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Myo"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="mb-4 w-[45%]">
              <label className="block text-teal-500 mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="eishwesinmyo2004@gmail.com"
                className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4 w-[45%]">
              <label className="block text-teal-500 mb-2" htmlFor="phone">
                Your Phone
              </label>
              <input
                required
                type="number"
                id="phone"
                name="phone"
                value={phNo}
                onChange={(e) => setPhNo(e.target.value)}
                placeholder="09-951746594"
                className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-teal-500 mb-2" htmlFor="description">
              Your Description
            </label>
            <textarea
              required
              id="description"
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows={4}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Some messagees..."
            ></textarea>
          </div>
          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-32 bg-teal-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Send
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
