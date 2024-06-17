import { useAppSelector } from "../../../redux/store/store";
import { toggling } from "../../../redux/reducers/theme";
import { motion } from "framer-motion";

const English = () => {
  const theme = useAppSelector(toggling);

  const skills = ["Communication", "Technology", "Active", "Patient"];

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
};

export default English;
