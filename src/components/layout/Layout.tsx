import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Bar from "../header/Bar";
import Profile from "../header/Profile";
import Theme from "../header/Theme";
import Menu from "../menu/Menu";

const Layout = () => {
  return (
    <div className="pt-10">
      <header className="flex items-center justify-between">
        <Profile />
        <Bar />
        <Theme />
      </header>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
