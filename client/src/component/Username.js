import React, { useState } from "react";

function Username() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Username and Password are required.");
      return;
    }

    if (username.length < 4) {
      setError("Username must be at least 4 characters long.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!/\d/.test(password)) {
      setError("Password must contain at least one number.");
      return;
    }

    console.log(username, password);
    setError("");
  };

  return (
    <div className="container" style={{ background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)", minHeight: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center vh-100 mx-auto">
        <div className="card p-4 shadow" style={{ borderRadius: "20px", minWidth: "350px", background: "#fff", border: "none" }}>
          <div className="mb-4 text-center">
            <h2 className="title" style={{ fontWeight: "700", color: "#2d3a4b", letterSpacing: "1px" }}>Hello Again</h2>
            <p style={{ color: "#6c757d", fontSize: "1.1rem" }}>Explore more by Connecting with us</p>
          </div>
          
          {/* Circular photo field */}
          <div className="text-center mb-4">
            <label htmlFor="avatar" className="form-label">Upload Avatar</label>
            <div className="d-flex justify-content-center">
              <div className="border border-secondary rounded-circle" style={{ width: "100px", height: "100px", overflow: "hidden" }}>
                <input
                  type="file"
                  className="position-absolute w-100 h-100 opacity-0"
                  id="avatar"
                  accept="image/*"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {error && <p className="text-danger text-center mb-3" style={{ fontWeight: "500" }}>{error}</p>}

            <div className="mb-3">
              <label htmlFor="username" className="form-label" style={{ fontWeight: "600", color: "#495057" }}>
                Username
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="username"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                style={{
                  fontSize: "1.25rem",
                  height: "50px",
                  borderRadius: "12px",
                  border: "1px solid #bfc9d1",
                  background: "#f7fafc"
                }}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label" style={{ fontWeight: "600", color: "#495057" }}>
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={{
                  fontSize: "1.25rem",
                  height: "50px",
                  borderRadius: "12px",
                  border: "1px solid #bfc9d1",
                  background: "#f7fafc"
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 p-2" style={{
              fontWeight: "600",
              fontSize: "1.15rem",
              borderRadius: "12px",
              background: "linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)",
              border: "none",
              boxShadow: "0 4px 14px rgba(78,84,200,0.15)"
            }}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Username;