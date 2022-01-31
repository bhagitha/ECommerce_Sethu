
import './App.css';
import Login from './pages/Login';
import {LoginContext} from '../src/Context/LoginContext'
import { useState } from 'react';
function App() {
  const [Username, setUsername] = useState("");
  return (
    <div className="App">
  
     <LoginContext.Provider value={{Username,setUsername}}>
          <Login/>
     </LoginContext.Provider>
    </div>
  );
}

export default App;
