import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/routes/home/Home";
import About from "./components/routes/about/About";
import Skills from "./components/routes/skills/Skills";
import Education from "./components/routes/education/Education";
import Contact from "./components/routes/contact/Contact";
import { useAppSelector } from "./redux/store/store";
import FOF from "./components/404_page/FOF";
import { toggling } from "./redux/reducers/theme";

const App = () => {
  const theme = useAppSelector(toggling);

  return (
    <div className={`${theme === "dark" && "bg-[#000000]"}`}>
      <div
        className={`max-w-6xl m-auto px-8 ${
          theme === "dark" && "bg-[#18181B]"
        }`}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="education" element={<Education />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<FOF />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;

// theme === "light" ? "bg-zinc-300" : "bg-zinc-700"
