import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store/store";
import { toggling } from "../../redux/reducers/theme";

const Footer = () => {
  const theme = useAppSelector(toggling);
  const date = new Date().getFullYear();

  return (
    <div className="mt-24 pb-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
        <ul
          className={`bar flex gap-6 text-sm font-semibold ${
            theme === "dark" ? "text-zinc-200" : "text-zinc-700"
          }`}
        >
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="skills">Skills</Link>
          </li>
          <li>
            <Link to="education">Education</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <p className="text-zinc-400 text-sm">
          &copy; {date} Ei Shwe Sin Myo. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
