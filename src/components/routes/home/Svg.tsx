import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const Svg = () => {
  return (
    <ul className="flex gap-6 items-center">
      <li>
        <a href="mailto:eishwesinmyo2004@gmail.com">
          <MdEmail className="text-2xl text-gray-500" />
        </a>
      </li>
      <li>
        <a href="tel:+951746594">
          <FaPhone className="text-xl text-gray-500" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://instagram.com/dandelion_will_be_yours">
          <AiFillInstagram className="text-2xl text-gray-500" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://t.me/Dandelion_will_be_dandelion">
          <FaTelegramPlane className="text-xl text-gray-500" />
        </a>
      </li>
    </ul>
  );
};

export default Svg;
