import Archievements from "./Archievements";
import Svg from "./Svg";
import Volunteer from "./Volunteer";
import { toggling } from "../../../redux/reducers/theme";
import { useAppSelector } from "../../../redux/store/store";
import cv from "../../../assets/cv form.pdf";

const Home = () => {
  const theme = useAppSelector(toggling);
  return (
    <div className="mt-10">
      <div>
        <div className="max-w-2xl">
          <h1
            className={`text-4xl sm:text-5xl font-bold ${
              theme === "light" ? "text-balck" : "text-zinc-200"
            }`}
          >
            Enthusiastic and active person who is able to teach and communicate
            with students
          </h1>
          <p
            className={`pt-6 text-md ${
              theme === "light" ? "text-black" : "text-zinc-400"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            molestias quidem voluptatibus inventore eum repellat temporibus
            vero, dolorem deserunt, in voluptas assumenda quibusdam explicabo at
            hic earum, obcaecati voluptatum consequuntur blanditiis veritatis
            tempore eos vel nisi velit. Corporis in ullam recusandae suscipit
            minus modi nemo eaque doloribus reprehenderit exercitationem dolore
            obcaecati nihil accusamus aliquam laborum sint dicta impedit
            nesciunt vitae saepe placeat, ratione aut animi! Dolores explicabo
            dignissimos qui numquam officiis ut odit, commodi animi sit quae,
            nihil nulla iure est perspiciatis dolor repellat dicta mollitia
            veniam. Eius sint molestias numquam asperiores, facilis, natus quis
            et nostrum ad eum ex!
          </p>
          <div className="mt-6">
            <Svg />
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col lg:flex-row  lg:items-start justify-between gap-20 lg:gap-0">
            <div className="w-[80%]">
              <div className="text-teal-500 font-bold">
                <h2>ARCHIEVEMENTS</h2>
              </div>
              <Archievements styles={"text-teal-500 flex gap-2"} />
            </div>

            <div>
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
                  <div className="mt-6">
                    <Volunteer />
                  </div>
                </div>
                <a
                  href={cv}
                  target="_blank"
                  className={`flex justify-center items-center p-1.5 rounded-md hover:cursor-pointer ${
                    theme === "light"
                      ? "bg-zinc-200 text-black"
                      : "bg-zinc-800 text-zinc-200"
                  }`}
                >
                  Resume
                  <i className="fa-solid fa-arrow-right pl-2 text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
