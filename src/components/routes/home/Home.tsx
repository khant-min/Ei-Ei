import Archievements from "./Archievements";
import Svg from "./Svg";
import Volunteer from "./Volunteer";
import { toggling } from "../../../redux/reducers/theme";
import { useAppSelector } from "../../../redux/store/store";
import cv from "../../../assets/resume_2.pdf";
import { motion } from "framer-motion";

const Home = () => {
  const theme = useAppSelector(toggling);
  return (
    <div className="mt-10">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1
            className={`text-2xl sm:text-4xl font-bold ${
              theme === "light" ? "text-balck" : "text-zinc-200"
            }`}
          >
            A teacher who comitted to inspiring to achieve their full potential
            and develop a love for English language
          </h1>
          <p
            className={`pt-6 text-md ${
              theme === "light" ? "text-black" : "text-zinc-400"
            }`}
          >
            Passionate and dedicated English teacher with three years of
            experience across multiple schools, fostering a dynamic and
            student-centered learning environment. Skilled in designing
            interactive speaking activities, adapting lessons to diverse
            learning needs, and integrating technology to enhance engagement.
            Known for creating a supportive atmosphere that builds students'
            confidence in communication while effectively developing their
            language skills. Committed to continuous professional growth and
            innovative teaching approaches to inspire learners.
          </p>
          <div className="mt-6">
            <Svg />
          </div>
        </motion.div>

        <div className="mt-20">
          <div className="flex flex-col lg:flex-row  lg:items-start justify-between gap-20 lg:gap-0">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[80%]"
            >
              <div className="text-teal-500 font-bold">
                <h2>ARCHIEVEMENTS</h2>
              </div>
              <Archievements styles={"text-teal-500 flex gap-2"} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="border border-gray-200 p-4 rounded-xl lg:mr-20">
                <div className="flex items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-8 w-8"
                  >
                    <path
                      d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                      className="fill-zinc-100 stroke-zinc-400"
                    ></path>
                    <path
                      d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                      className="stroke-zinc-400"
                    ></path>
                  </svg>
                  <h2
                    className={`font-semibold ${
                      theme === "light" ? "text-black" : "text-zinc-400"
                    }`}
                  >
                    Volunteer Work
                  </h2>
                </div>
                <div className="max-w-md">
                  <div className="my-6">
                    <Volunteer />
                  </div>
                </div>
                <a
                  href={cv}
                  target="_blank"
                  className={`flex justify-center items-center p-1.5 rounded-md hover:cursor-pointer transition-all ${
                    theme === "light"
                      ? "bg-zinc-200 text-black hover:bg-zinc-300"
                      : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                  }`}
                >
                  Resume
                  <i className="fa-solid fa-arrow-right pl-2 text-sm"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
