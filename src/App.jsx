import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import NewPoll from './pages/NewPoll';
import './App.css';
import PollDetails from './pages/pollDetails';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';  // Make sure the path is correct

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute element={Home} />} />
            <Route path="/leaderboard" element={<PrivateRoute element={Leaderboard} />} />
            <Route path="/questions/:questionId" element={<PrivateRoute element={PollDetails} />} />
            <Route path="/add" element={<PrivateRoute element={NewPoll} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
