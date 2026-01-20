import { NetflixLogo } from "../utility/LoginImg";
import { signOut } from "firebase/auth";
import { auth } from "../utility/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utility/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { toggleSearch } from "../utility/aiSlice";

const Header = () => {
   const dispatch = useDispatch();
  const handleAiReccomendation = () => {
      dispatch(toggleSearch());
  };
  const navigate = useNavigate();
  const User = useSelector((store) => {
    return store.user;
  });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between flex-col md:flex-row items-center md:items-start">
      <img
        className="w-44 mx-auto md:mx-0"
        src={NetflixLogo}
        alt="Netflix-Logo"
      />

      {User && (
        <div className="flex p-2 items-center gap-2">
          <button
            className="bg-white text-black px-6 py-2 rounded font-bold hover:bg-opacity-80 transition duration-200 cursor-pointer"
            onClick={handleAiReccomendation}
          >
            Ai Recommendation
          </button>
          <img
            className="hidden md:block w-10 h-10 rounded-sm"
            alt="Profile-icon"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          />
          <button
            className="font-bold text-white cursor-pointer hover:underline text-sm md:text-base"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  // Sign-out successful.
                })
                .catch((error) => {
                  console.log("Sign out error");
                });
            }}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
