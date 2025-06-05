import React from "react";
import { useFormik } from "formik";
import { registeredvalidate } from "../helper/validate";
import toast, { Toaster } from "react-hot-toast";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Registered() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      avatar: null,
    },
    validate: registeredvalidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      if (!values.username) {
        toast.error("Username is required!");
      } else {
        toast.success(`Welcome, ${values.username}!`);
        console.log(values);
      }
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("avatar", URL.createObjectURL(file));
    }
  };

  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center vh-100 mx-auto p">
        <div
          className="card p-4 shadow"
          style={{
            borderRadius: "20px",
            minWidth: "350px",
            background: "#fff",
            border: "none",
          }}
        >
          {/* Toast Notification Setup */}
          <Toaster position="top-center" reverseOrder={false} />

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
              Registered
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
              Happy to join us!
            </p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            {/* Avatar Upload (Now inside form) */}
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
                    id="profile"
                  
                  />

                  
                  <div className="d-flex justify-content-center align-items-center w-100 h-100">
                    {formik.values.avatar ? (
                      <img
                        src={formik.values.avatar}
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
               <input type="file" id="profile"    onChange={handleImageChange} />
            </div>

         {/* username */}
                  <div className="mb-3 position-relative">
                    <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter username"
                      {...formik.getFieldProps("username")}
                    />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="mb-3 position-relative">
                    <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      {...formik.getFieldProps("password")}
                    />
                    </div>
                  </div>
                  {/* Email Field */}
              <div className="mb-3 position-relative">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    {...formik.getFieldProps("email")}
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
              onMouseEnter={(e) =>
                (e.target.style.background =
                  "linear-gradient(90deg, #0056b3 0%, #007bff 100%)")
              }
              onMouseLeave={(e) =>
                (e.target.style.background =
                  "linear-gradient(90deg, #007bff 0%, #0056b3 100%)")
              }
            >
              Continue
            </button>

            <div className="text-center mt-3">
              <span style={{ fontSize: "0.95rem", color: "#6c757d" }}>
                Not a member?{" "}
                <a
                  href="/username"
                  className="text-primary"
                  style={{ fontWeight: "600", textDecoration: "none" }}
                >
                  login here
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registered;
