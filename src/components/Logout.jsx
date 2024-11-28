import { useDispatch } from 'react-redux';
import { logout } from '../redux/features/authSlice';
import './styles/Logout.css';  // Import the CSS file

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <button className="logout-button" onClick={() => dispatch(logout())}>
      Logout
    </button>
  );
};

export default Logout;
