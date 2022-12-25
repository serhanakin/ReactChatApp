import './style.scss';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes, Route, Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
  }

  console.log(currentUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
