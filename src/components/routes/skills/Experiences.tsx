import { useAppSelector } from "../../../redux/store/store";
import {
  experiences,
  ExpInitialStateTypes,
} from "../../../redux/reducers/experiences";
import { toggling } from "../../../redux/reducers/theme";

const Experiences = () => {
  const exp = useAppSelector(experiences);
  const theme = useAppSelector(toggling);

  return (
    <div className="mt-10 flex flex-col gap-8">
      {exp.map((cur: ExpInitialStateTypes) => {
        return (
          <div key={cur.id} className="flex flex-col gap-2">
            <h2
              className={`font-bold  ${
                theme === "light" ? "text-teal-700" : "text-teal-600"
              }`}
            >
              {cur.occupation}
            </h2>
            <span
              className={`pl-3 opacity-75 ${
                theme === "dark" && "text-zinc-300"
              }`}
            >
              {cur.at}
            </span>
            <p className={`${theme === "dark" && "text-zinc-300"}`}>
              {cur.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Experiences;
