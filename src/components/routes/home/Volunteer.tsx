import { vol } from "../../../redux/reducers/volunteer";
import { useAppSelector } from "../../../redux/store/store";
import { InitialStateTypes } from "../../../redux/reducers/volunteer";
import { toggling } from "../../../redux/reducers/theme";

const Volunteer = () => {
  const theme = useAppSelector(toggling);
  const volunteer = useAppSelector(vol);
  return (
    <ol className="flex flex-col gap-5">
      {volunteer.map((cur: InitialStateTypes) => (
        <li key={cur.id}>
          <h3
            className={`font-semibold ${
              theme === "light" ? "text-black" : "text-zinc-300"
            }`}
          >
            {cur.header}
          </h3>
          <span
            className={`font-semibold text-sm  ${
              theme === "light" ? "text-black" : "text-teal-500"
            }`}
          >
            {cur.organization} | {cur.date}
          </span>
          <p
            className={`opacity-80 ${
              theme === "light" ? "text-black" : "text-zinc-400"
            }`}
          >
            {cur.activity}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Volunteer;
