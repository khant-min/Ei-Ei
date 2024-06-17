import Archievements from "../home/Archievements";
import English from "./English";
import Experiences from "./Experiences";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="mt-20 md:mt-28 w-[80%] flex flex-col ">
      <English />
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-20"
      >
        <div className="text-teal-500 font-bold">
          <h2>ARCHIEVEMENTS</h2>
        </div>
        <Archievements styles={"hidden"} />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -200 },
        }}
        className="mt-20"
      >
        <div className="text-teal-500 font-bold">
          <h2>EXPERIENCES</h2>
        </div>
        <Experiences />
      </motion.div>
    </div>
  );
};

export default Skills;

// English - Upper Intermediate
