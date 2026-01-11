import { NetflixLogo } from "../utility/LoginImg";
import { signOut } from "firebase/auth";
import { auth } from "../utility/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utility/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((store) => {return store.user})
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
      <img
        className="w-44 mx-auto md:mx-0"
        src={NetflixLogo}
        alt="Netflix-Logo"
      />

      {User && <div className="flex p-2 items-center">
        <img
          className="w-12 h-12 rounded-sm"
          alt="Profile-icon"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
        />
        <button
          className="font-bold text-white cursor-pointer ml-2"
          onClick={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
                dispatch(removeUser());
                navigate("/");
              })
              .catch((error) => {
                console.log("Sign out error");
              });
          }}
        >
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
