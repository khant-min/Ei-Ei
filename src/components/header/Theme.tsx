import { theme, toggleLightDark, toggling } from "../../redux/reducers/theme";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import light from "../../assets/SUN-Black.svg";
import Svg from "../routes/about/Svg";

const Theme = () => {
  const dispatch = useAppDispatch();
  const toggleColors: theme = useAppSelector(toggling);

  const lightDark = () => {
    toggleColors === "light"
      ? dispatch(toggleLightDark("dark"))
      : dispatch(toggleLightDark("light"));
  };

  const light = (
    <svg className="w-full h-full stroke-teal-500 ">
      <path
        className=""
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );

  const dark = <i className="fa-regular fa-lightbulb"></i>;
  return (
    <div>
      <button
        className="px-3 py-2 shadow-md rounded-full hover:outline outline-1 outline-stone-400"
        onClick={lightDark}
      >
        <span className="grid place-content-center w-6 h-6">
          {toggleColors === "light" ? dark : light}
        </span>
      </button>
    </div>
  );
};

export default Theme;
