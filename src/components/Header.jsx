import React from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { logo, sticker } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute flex justify-between items-center w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <div>
        <img className="sm:w-44 w-24 sm:ml-8" src={logo} alt="logo" />
      </div>
      {user && (
        <div className="flex z-30 mr-6 text-xs sm:text-base">
          <img
            className="w-5 h-5 sm:w-8 sm:h-8 rounded-md"
            src={sticker}
            alt="sticker"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white flex "
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
