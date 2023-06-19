import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

function App() {
  return (
      <Routes>
            <Route path="/profile" element={ <Profile /> }></Route>
            <Route path="/dashboard" element={ <Dashboard /> }></Route>
      </Routes>
  );
}

export default App;
