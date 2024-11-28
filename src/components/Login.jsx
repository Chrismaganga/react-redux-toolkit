import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import './styles/Login.css';  

const Login = () => {
  const users = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();

  const handleLogin = (userId) => {
    dispatch(login(userId));
  };

  return (
    <div className="login-container">
      <h1>Employee Polls</h1>
      <h2>Login</h2>
      <ul>
        {Object.values(users)
          .filter(user => user.isEligible) // Filter users based on eligibility
          .map((user) => (
            <li key={user.id}>
              <button onClick={() => handleLogin(user.id)}>{user.name}</button>
            </li>
          ))}
      </ul>
     
      ()
      
    </div>
  );
};

export default Login;
