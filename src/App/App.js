import { useState, useEffect } from "react";
import './App.css';

function App() {

  const [user, setUserInfo] = useState();

  useEffect(
    () => {
      (async () => {
        const response = await fetch('/user');
        const userInfo = await response.json();
        setUserInfo(userInfo);
      })()
    },
    []
  )

  return (
    <div className="App">
      {
        user && (
          <div>
            <div>
              {user.username}
            </div>
            <div>
              {user.email}
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
