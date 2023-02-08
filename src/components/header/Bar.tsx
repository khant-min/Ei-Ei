import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../../context/Context";
import { useAppSelector } from "../../redux/store/store";
import { toggling } from "../../redux/reducers/theme";

const Bar = () => {
  const { setMenu } = useContext(Context);
  const theme = useAppSelector(toggling);
  return (
    <>
      <nav
        className={`bar hidden md:block p-2 rounded-full shadow-md text-sm px-4 py-3 font-bold  ${
          theme === "dark" && "bg-[#252529]"
        }`}
      >
        <ul className={`flex gap-8 ${theme === "dark" && "text-zinc-200"}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
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
      </nav>
      <div className="md:hidden w-[80%] flex justify-end">
        <div
          className={`py-2 px-3 bg-slate-200 rounded-full hover:outline outline-1 outline-stone-400 shadow-md ${
            theme === "light" ? "bg-slate-200" : "bg-zinc-800 text-slate-300"
          }`}
        >
          <button onClick={() => setMenu(true)}>
            Menu <i className="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Bar;
