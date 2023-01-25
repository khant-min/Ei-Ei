import Archievements from "../home/Archievements";
import English from "./English";
import Experiences from "./Experiences";

const Skills = () => {
  return (
    <div className="mt-20 md:mt-28 w-[80%] flex flex-col ">
      <English />
      <div className="mt-20">
        <div className="text-teal-500 font-bold">
          <h2>ARCHIEVEMENTS</h2>
        </div>
        <Archievements styles={"hidden"} />
      </div>
      <div className="mt-20">
        <div className="text-teal-500 font-bold">
          <h2>EXPERIENCES</h2>
        </div>
        <Experiences />
      </div>
    </div>
  );
};

export default Skills;

// English - Upper Intermediate
