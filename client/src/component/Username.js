import React, { useState } from 'react';

function Username() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Username and Password are required.");
      return;
    }

    console.log(username, password);
    setError(""); // Clear error on successful submission
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100 mx-auto">
        <div className="card p-4 shadow">
          <div className="mb-4 text-center">
            <h2 className="title">Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-danger text-center">{error}</p>}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="username"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                style={{ fontSize: '1.25rem', height: '50px' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={{ fontSize: '1.25rem', height: '50px' }}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 p-2">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Username;