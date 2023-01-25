import { useAppSelector } from "../../../redux/store/store";
import { toggling } from "../../../redux/reducers/theme";

const English = () => {
  const theme = useAppSelector(toggling);
  return (
    <div className="">
      <div className="text-teal-500 font-bold">
        <h2>SKILLS</h2>
      </div>
      <ol className="mt-10 ol">
        <li>
          <h2 className={`${theme === "dark" && "text-zinc-300"}`}>
            Social Skills
          </h2>
          <span>Friendly</span>
          <span>Active</span>
          <span>Patient</span>
          <span>Sociable</span>
        </li>
        <li>
          <h2 className={`${theme === "dark" && "text-zinc-300"}`}>
            English Skill | Upper Intermediate
          </h2>
          <span>Speaking</span>
          <span>Reading</span>
          <span>Writing</span>
          <span>Listening</span>
          <span>Thinking</span>
        </li>
        <li>
          <h2 className={`${theme === "dark" && "text-zinc-300"}`}>Teaching</h2>
          <span>Knowledge</span>
          <span>Teaching</span>
          <span>Method</span>
          <span>Explanation</span>
          <span>Communication</span>
        </li>
        <li>
          <h2 className={`${theme === "dark" && "text-zinc-300"}`}>
            Technology
          </h2>
          <span>Google Sheets</span>
          <span>Power Point</span>
          <span>Advenced Excel</span>
          <span>Zoom</span>
          <span>Google Classroom</span>
        </li>
      </ol>
    </div>
  );
};

export default English;
