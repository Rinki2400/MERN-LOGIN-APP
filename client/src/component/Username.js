import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Username() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file)); // Converts image for preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Username and Password are required.");
      return;
    }

    console.log(username, password, avatar);
    setError("");
  };

  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center vh-100 mx-auto">
        <div
          className="card p-4 shadow"
          style={{
            borderRadius: "20px",
            minWidth: "350px",
            background: "#fff",
            border: "none",
          }}
        >
          <div className="mb-4 text-center">
            <h2
              style={{
                fontWeight: "700",
                fontFamily: "'Poppins', sans-serif",
                textAlign: "center",
                letterSpacing: "1px",
                textShadow: "2px 2px 5px rgba(200, 203, 206, 0.3)",
              }}
            >
              Hello Again
            </h2>
            <p
              style={{
                color: "#6c757d",
                fontSize: "0.9rem",
                fontWeight: "500",
                marginTop: "5px",
                textAlign: "center",
              }}
            >
              Explore more by connecting with us
            </p>
          </div>

          {/* Avatar Upload Field with Image Preview */}
          <div className="text-center mb-4">
            <div className="position-relative d-flex justify-content-center">
              <div
                className="border border-secondary rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <input
                  type="file"
                  className="position-absolute w-100 h-100 opacity-0"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="Avatar"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <i className="fas fa-user-circle fa-6x text-primary"></i>
                  )}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {error && <p className="text-danger text-center">{error}</p>}

            {/* Username Field with Icon */}
            <div className="mb-3 position-relative">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
            </div>

            {/* Password Field with Icon */}
            <div className="mb-4 position-relative">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn w-100 p-2"
              style={{
                fontWeight: "600",
                fontSize: "1.1rem",
                borderRadius: "12px",
                background: "linear-gradient(90deg, #007bff 0%, #0056b3 100%)",
                color: "#fff",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 123, 255, 0.3)",
                transition: "all 0.3s ease",
              }}
            >
              Continue
            </button>
            <div className="text-center mt-3">
              <span style={{ fontSize: "0.95rem", color: "#6c757d" }}>
                Not a member?{" "}
                <a
                  href="/register"
                  className="text-primary"
                  style={{ fontWeight: "600", textDecoration: "none" }}
                >
                  Register here
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Username;
