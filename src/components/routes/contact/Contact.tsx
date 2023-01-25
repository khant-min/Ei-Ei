import { useAppSelector } from "../../../redux/store/store";
import { toggling } from "../../../redux/reducers/theme";

const Contact = () => {
  const theme = useAppSelector(toggling);
  return (
    <div className="mt-20 max-w-[70%] m-auto mb-[20%]">
      <h2
        className={`font-semibold text-xl ${
          theme === "dark" && "text-zinc-300"
        }`}
      >
        Thanks for checking in ,
      </h2>
      <p
        className={`mt-8 leading-8 text-lg ${
          theme === "dark" && "text-zinc-400"
        }`}
      >
        I'm currently looking for new opportunities to work with talented people
        and companies. I'm highly adaptable and always willing to learn new
        technologies as required by the company. If you think I might be a good
        fit for your team or you just want to learn more about what I do, don't
        hesitate to reach out via email
        <a
          href="mailto: kmin01405@gmail.com"
          className="text-teal-500 hover:-translate-y-[3px] hover:-translate-x-[2px] transition-all mx-3 inline-block"
        >
          {` eishwesinmyo2004@gmail.com `}
        </a>
        or anywhere you feel comfortable to contact.
      </p>
    </div>
  );
};

export default Contact;
