import { useAppSelector } from "../../../redux/store/store";
import { toggling } from "../../../redux/reducers/theme";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

interface SvgProps {
  styles: string;
}

const Svg = ({ styles }: SvgProps) => {
  const theme = useAppSelector(toggling);
  return (
    <motion.ul
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className={`about-ul ${styles} ${theme === "dark" && "text-zinc-300"}`}
    >
      <li>
        <a href="mailto:eishwesinmyo2004@gmail.com">
          <MdEmail className="text-2xl" />
          eishwesinmyo2004@gmail.com
        </a>
      </li>
      <li>
        <a href="tel:+951746594">
          <FaPhone className="text-xl" />
          09-951746594
        </a>
      </li>
      <li>
        <a target="_blank" href="https://instagram.com/dandelion_will_be_yours">
          <AiFillInstagram className="text-2xl" />
          Connect on Instagram
        </a>
      </li>
      <li>
        <a target="_blank" href="https://t.me/Dandelion_will_be_dandelion">
          <FaTelegramPlane className="text-xl" />
          Connect on Telegram
        </a>
      </li>
    </motion.ul>
  );
};

export default Svg;
