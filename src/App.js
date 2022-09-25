import { useContext, useRef } from "react";
import FirebaseContext from "./contexts";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const firebase = useContext(FirebaseContext);
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  function submitLogin() {
    signInWithEmailAndPassword(
      getAuth(firebase),
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  }

  return (
    <div className="App">
      <input ref={email} name="email" placeholder="E-mail Address" />
      <input
        ref={password}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button onClick={submitLogin}>Sign In</button>
    </div>
  );
}

function Register() {
  const firebase = useContext(FirebaseContext);
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  function submitRegister() {
    createUserWithEmailAndPassword(
      getAuth(firebase),
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  }

  return (
    <div className="App">
      <input
        ref={email}
        name="email"
        type="email"
        placeholder="E-mail Address"
      />
      <input
        ref={password}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button onClick={submitRegister}>Register</button>
    </div>
  );
}

export { Login, Register };
