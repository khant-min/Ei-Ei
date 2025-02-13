import { useContext } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store/store";
import { toggling } from "../../redux/reducers/theme";

const Menu = () => {
  const { menu, setMenu } = useContext(Context);
  const menuFun = () => setMenu(false);
  const theme = useAppSelector(toggling);

  return (
    <div
      className={`md:hidden fixed backdrop-blur-sm inset-0 z-10 ${
        !menu && "hidden"
      }`}
    >
      <div
        className={`max-w-[90%] m-auto mt-8 p-6 rounded-3xl ${
          theme === "light" ? "bg-slate-200" : "bg-zinc-800 text-zinc-300"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-sm ">Navigation</h2>
          <button onClick={menuFun}>
            <i className="fa-solid fa-xmark p-1 text-lg"></i>
          </button>
        </div>
        <nav className="menu font-semibold">
          <ul>
            <li>
              <Link onClick={menuFun} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={menuFun} to="about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={menuFun} to="skills">
                Experience
              </Link>
            </li>
            <li>
              <Link onClick={menuFun} to="education">
                Education
              </Link>
            </li>
            <li>
              <Link onClick={menuFun} to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
