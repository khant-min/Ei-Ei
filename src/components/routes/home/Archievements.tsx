import { useAppSelector } from "../../../redux/store/store";
import {
  archievements,
  InitialStateTypes,
} from "../../../redux/reducers/archievements";
import { Link } from "react-router-dom";
import { toggling } from "../../../redux/reducers/theme";

interface ArchievementsProps {
  styles: string;
}

const Archievements = ({ styles }: ArchievementsProps) => {
  const arch = useAppSelector(archievements);
  const theme = useAppSelector(toggling);

  return (
    <div className="mt-10 flex flex-col gap-8">
      {arch.map((cur: InitialStateTypes) => (
        <article key={cur.id}>
          <div className="flex items-center">
            <span className="h-4 w-0.5 rounded-full bg-zinc-400 mr-2"></span>
            <span
              className={`${
                theme === "light" ? "text-black" : "text-zinc-400"
              }`}
            >
              {cur.date}
            </span>
          </div>
          <div className="flex items-start lg:items-center gap-2">
            <div className="pt-4 lg:pt-0 text-lg text-teal-700">
              <i className="fa-solid fa-trophy"></i>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h3
                className={`font-bold ${
                  theme === "light" ? "text-black" : "text-zinc-300"
                }`}
              >
                {cur.header}
              </h3>
              <p
                className={`${
                  theme === "light" ? "text-black" : "text-zinc-400"
                }`}
              >
                {cur.content}
              </p>
            </div>
          </div>
          <Link to="skills">
            <div
              className={`${styles} transition-all hover:text-teal-600 font-semibold`}
            >
              <p>More Skills</p>
              <span>
                <i className="fa-solid fa-chevron-right text-[.75rem]"></i>
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Archievements;
