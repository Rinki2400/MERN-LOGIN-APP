import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Username from './component/Username';
import Registered from './component/Registered';
import PageNotFound from './component/PageNotFound';
import Reset from './component/Reset';
import Profile from './component/Profile';
import Password from './component/Password';
import Recovery from './component/Recovery';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Username />} />
        <Route path="/register" element={< Registered />} />
        <Route path="/reset" element={< Reset />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/password" element={< Password />} />
        <Route path="/recovery" element={< Recovery />} />
        <Route path="*" element={< PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
