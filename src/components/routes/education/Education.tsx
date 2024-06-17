import { useAppSelector } from "../../../redux/store/store";
import { toggling } from "../../../redux/reducers/theme";
import { motion } from "framer-motion";

const Education = () => {
  const theme = useAppSelector(toggling);

  return (
    <div className="my-32 flex flex-col gap-10 max-w-[80%]">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="leading-8"
      >
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
          Family Private Hight School | 2018-2020, Magway
        </span>
        <p className={`${theme === "dark" && "text-zinc-300"}`}>
          I've finished matriculation examination with 525 marks out of 600.
          I've got distinction in english and 78 marks
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="leading-8"
      >
        <h2
          className={`font-bold text-lg ${
            theme === "light" ? "text-teal-700" : "text-teal-500"
          }`}
        >
          IELTS EXAMINATION RESULT
        </h2>
        <span
          className={`"pl-4 opacity-75 ml-3 ${
            theme === "light" ? "opacity-75" : "text-zinc-300"
          }`}
        >
          Cambridge IELTS Test Centre | 11/2022, Yangon
        </span>
        <p className={`${theme === "dark" && "text-zinc-300"}`}>
          My overall band is 7/9.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="leading-8"
      >
        <h2
          className={`font-bold text-lg ${
            theme === "light" ? "text-teal-700" : "text-teal-500"
          }`}
        >
          CERTIFIED FOR HAVING ADVANCED LEVEL C1 IN ENGLISH
        </h2>
        <span
          className={`"pl-4 opacity-75 ml-3 ${
            theme === "light" ? "opacity-75" : "text-zinc-300"
          }`}
        >
          British council English Score | 09/2022 - Present,
        </span>
        <p className={`${theme === "dark" && "text-zinc-300"}`}>
          I'm fluent in English
        </p>
      </motion.div>
    </div>
  );
};

export default Education;
