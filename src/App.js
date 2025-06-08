import './styles/App.css';
import WeatherDashboard from "./components/WeatherDashboard";
// import { useState } from "react";
// import { LoginComponent } from './components/CONDITIONAL/LoginComponent';
// import WelcomeComponent from './components/CONDITIONAL/WelcomeComponent';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
            <h1>Weather Dashboard</h1>
            {/* <WeatherDashboard /> */}
            {/* Conditional rendering */}
            {/* {isLoggedIn ? <WelcomeComponent /> : <LoginComponent />}
            <button style={{ padding: '10px', backgroundColor: 'blue', color: 'white', margin: '10px', border: 'none',  }} onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? 'Logout' : 'Login'}

            </button> */}
            {/* End conditional Rendering */}
            <WeatherDashboard />
            
    </div>
  );
}

export default App;
