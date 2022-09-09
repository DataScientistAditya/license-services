import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardScreen from './Screens/DashboardScreen/DashboardScreen';
import ScrutityDashScreen from './Screens/DashboardScreen/ScrutinyFormScreen/Scrutinyform';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <Routes>
        <Route path="/dashboard" element={<DashboardScreen />}></Route>
        <Route path="/department-dashboard" element={<ScrutityDashScreen />}></Route>
      </Routes>
    
    
  );
}

export default App;
