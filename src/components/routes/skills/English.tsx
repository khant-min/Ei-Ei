import { useAppSelector } from "../../../redux/store/store";
import { toggling } from "../../../redux/reducers/theme";

const English = () => {
  const theme = useAppSelector(toggling);

  const skills = ["Communication", "Technology", "Active", "Patient"];

  return (
    <div>
      <div className="text-teal-500 font-bold">
        <h2>SKILLS</h2>
      </div>
      <ol className="mt-10 flex flex-wrap gap-10">
        {skills.map((skill) => (
          <li className="bg-teal-500 text-white p-2 rounded-md font-semibold">
            {skill}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default English;
