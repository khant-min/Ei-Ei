// import Ei from "../../../assets/320524975_1218384652089657_5450799927955766085_n (1).jpg";
import Ei from "../../../assets/eiei.jpg";
import Svg from "./Svg";
import { useAppSelector } from "../../../redux/store/store";
import { toggling } from "../../../redux/reducers/theme";
import { motion } from "framer-motion";

const About = () => {
  const theme = useAppSelector(toggling);

  return (
    <div className="mt-20 md:mt-32">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div>
          <Svg styles={"flex md:hidden"} />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:w-[40%]"
        >
          <div className="mt-10 md:mt-0">
            <img className="w-[90%] rounded-md" src={Ei} />
          </div>
          <div>
            <Svg styles={`hidden md:flex`} />
          </div>
        </motion.div>
        <div className="max-w-[80%] md:max-w-[50%] mt-20 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl sm:text-5xl font-bold ${
              theme === "dark" && "text-zinc-300"
            }`}
          >
            I'm Ei Shwe Sin Myo, a sociable and dedicated teacher, who can
            handle students of various age groups
          </motion.h1>
          <div
            className={`mt-10 flex flex-col gap-6 ${
              theme === "dark" && "text-zinc-300"
            }`}
          >
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Dedicated and experienced teacher with over 4 years of experience
              in English teaching and 1 year in IELTS teaching.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              Committed to fostering a positive learning environment and
              promoting student success through innovative teaching strategies
              and a deep understand of educational best practices.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Proven track record of enhancing student achievement, integrating
              technology into the classroom, and adapting lesson plans to meet
              diverse student needs.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5 }}
            >
              Adept at collaborating with colleagues, parents, and
              administrators to support the holistic development of students.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5 }}
            >
              Passionate about lifelong learning and continuous professional
              development.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
