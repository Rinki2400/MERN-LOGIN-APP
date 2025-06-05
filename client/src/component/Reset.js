import React from "react";
import { useFormik } from "formik";
import { resetpassvalidate } from "../helper/validate";
import toast, { Toaster } from "react-hot-toast";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: resetpassvalidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      if (!values.password) {
        toast.error("password is required!");
      } else {
        console.log(values.password, values.confirmPassword);
      }
    },
  });

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
              password Reset
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
              Please enter your new password to continue.
            </p>
          </div>

          {/* Formik Form */}
          <form onSubmit={formik.handleSubmit}>
            {/* password Field */}
            <div className="mb-3 position-relative">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" password"
                  {...formik.getFieldProps("password")}
                />
              </div>
            </div>
            <div className="mb-3 position-relative">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Confirm password"
                  {...formik.getFieldProps("confirmPassword")}
                />
              </div>
            </div>

            {/* Submit Button */}
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
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;
