import { useAppSelector } from "../../../redux/store/store";
import { toggling } from "../../../redux/reducers/theme";

const Education = () => {
  const theme = useAppSelector(toggling);

  return (
    <div className="my-32 flex flex-col gap-10 max-w-[80%]">
      <div className="leading-8">
        <h2
          className={`font-bold text-lg ${
            theme === "light" ? "text-teal-700" : "text-teal-500"
          }`}
        >
          PASSED MATRICULATION EXAMINATION
        </h2>
        <span
          className={`"pl-4 opacity-75 ml-3 ${
            theme === "light" ? "opacity-75" : "text-zinc-300"
          }`}
        >
          Family Private Hight School | 2019-20, Magway
        </span>
        <p className={`${theme === "dark" && "text-zinc-300"}`}>
          Started attending grade-9 in 2018 and finished in 2022. I've passed
          matriculation examination with distinctions and got 525 marks out of
          600.
        </p>
      </div>
      <div className="leading-8">
        <h2
          className={`font-bold text-lg ${
            theme === "light" ? "text-teal-700" : "text-teal-500"
          }`}
        >
          CERTIFICATE FOR HAVING INTERMEDIATE ENGLISH SKILLS
        </h2>
        <span
          className={`"pl-4 opacity-75 ml-3 ${
            theme === "light" ? "opacity-75" : "text-zinc-300"
          }`}
        >
          Teacher Moe Language acedamy | 2021, Yangon
        </span>
        <p className={`${theme === "dark" && "text-zinc-300"}`}>
          As I've finished an English course, I'm pretty sure I would be
          suitable for this job.
        </p>
      </div>
    </div>
  );
};

export default Education;
