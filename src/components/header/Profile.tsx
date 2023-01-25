import Ei from "../../assets/ProfilePictureMaker.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-8 h-8">
      <Link to="/">
        <img className="w-full h-full" src={Ei} />
      </Link>
    </div>
  );
};

export default Profile;
