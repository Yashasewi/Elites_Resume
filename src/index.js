import React from "react";
import ReactDOM from "react-dom/client";
import { Login, Register } from "./App";
import { initializeApp } from "firebase/app";
import FirebaseContext from "./contexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainApp from "./Main";
import CreateResume from "./CreateResume";

const firebaseConfig = {
  apiKey: "AIzaSyBPWmjLnN_o3_GRhsx6Z3j_oSPm4nDrjjI",
  authDomain: "elites-resume.firebaseapp.com",
  projectId: "elites-resume",
  storageBucket: "elites-resume.appspot.com",
  messagingSenderId: "1009074041447",
  appId: "1:1009074041447:web:a4055df519b32bc2471ac2",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateResume />}/>
        </Routes>
      </BrowserRouter>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
