import { getAuth } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext, { UserContext } from "./contexts";

function MainApp() {
  const [selected, setSelected] = useState(null);
  const templates = ["Template 1", "Template 2"];
  const firebase = useContext(FirebaseContext);
  const navigate = useNavigate();

  function logOut() {
    getAuth(firebase)
      .signOut()
      .then(() => {
        navigate("/login");
      });
  }

  return (
    <div>
      <button onClick={logOut}>Log out</button>
      {templates.map((template) => {
        return (
          <button
            key={template}
            onClick={() => {
              setSelected(template);
              
            }}
          >
            {template}
          </button>
        );
      })}
    </div>
  );
}

export default MainApp;
