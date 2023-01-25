import Ei from "../../../assets/320524975_1218384652089657_5450799927955766085_n (1).jpg";
import Svg from "./Svg";
import { useAppSelector } from "../../../redux/store/store";
import { toggling } from "../../../redux/reducers/theme";

const About = () => {
  const theme = useAppSelector(toggling);

  return (
    <div className="mt-20 md:mt-32">
      <div className="flex flex-col md:flex-row justify-between items-center flex-col-reverse">
        <div>
          <Svg styles={"flex md:hidden"} />
        </div>
        <div className="max-w-[80%] md:max-w-[50%] mt-20 md:mt-0">
          <h1
            className={`text-4xl sm:text-5xl font-bold ${
              theme === "dark" && "text-zinc-300"
            }`}
          >
            I'm Ei Shwe Sin Myo, sociable and well qualified teacher who can
            take handle of students
          </h1>
          <div
            className={`mt-10 flex flex-col gap-6 ${
              theme === "dark" && "text-zinc-300"
            }`}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sint veritatis labore ducimus architecto neque facere ipsa
              corporis voluptates error.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sint veritatis labore ducimus architecto neque facere ipsa
              corporis voluptates error.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sint veritatis labore ducimus architecto neque facere ipsa
              corporis voluptates error.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sint veritatis labore ducimus architecto neque facere ipsa
              corporis voluptates error.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-[40%]">
          <div className="">
            <img
              className="h-96 w-96 overflow-hidden rounded-2xl rotate-3"
              src={Ei}
            />
          </div>
          <div>
            <Svg styles={`hidden md:flex`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
