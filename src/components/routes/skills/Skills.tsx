import Archievements from "../home/Archievements";
import English from "./English";
import Experiences from "./Experiences";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="mt-20 md:mt-28 w-[80%] flex flex-col relative overflow-hidden"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <English />

        <div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          // transition={{ duration: 1 }}
          // variants={{
          //   visible: { opacity: 1, y: 0 },
          //   hidden: { opacity: 0, y: -200 },
          // }}
          className="mt-20"
        >
          <div className="text-teal-500 font-bold">
            <h2>EXPERIENCES</h2>
          </div>
          <Experiences />
        </div>

        <div className="mt-20">
          <div className="text-teal-500 font-bold">
            <h2>ARCHIEVEMENTS</h2>
          </div>
          <Archievements styles={"hidden"} />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

// English - Upper Intermediate
