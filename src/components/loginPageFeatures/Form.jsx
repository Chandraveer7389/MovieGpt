import { useState, useRef } from "react";
import { Validate } from "../../utility/Validate";
import { useDispatch } from "react-redux";
import { addUser } from "../../utility/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utility/firebase";

const Form = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorSignIn, setErrorSignIn] = useState(null);
  const email = useRef();
  const password = useRef();
  const name1 = useRef();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    let errorValidate = Validate(email.current.value, password.current.value);
    setErrorSignIn(errorValidate);
    if (errorValidate) return;
    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorSignIn(errorCode + " " + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name1.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
      
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              console.log(error);
            });
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorSignIn(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <form
      className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="font-bold text-3xl py-4">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>

      {!isSignInForm && (
        <input
          ref={name1}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
      )}

      <input
        ref={email}
        type="text"
        placeholder="Email "
        className="p-4 my-4 w-full bg-gray-700 rounded-lg"
      />

      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-700 rounded-lg"
      />

      <p className="text-red-500 font-bold text-lg py-2">{errorSignIn}</p>

      <button
        className="p-4 my-6 bg-red-700 w-full rounded-lg font-bold cursor-pointer"
        onClick={handleButtonClick}
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>

      <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? (
          <>
            <span className="text-gray-400">New to Netflix? </span>
            <span className="hover:underline font-bold">Sign up now.</span>
          </>
        ) : (
          <>
            <span className="text-gray-400">Already registered? </span>
            <span className="hover:underline font-bold">Sign In now.</span>
          </>
        )}
      </p>
    </form>
  );
};

export default Form;
