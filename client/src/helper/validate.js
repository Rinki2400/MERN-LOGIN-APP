import { toast } from "react-hot-toast";

export async function usenamevalidate(values) {
  const errors = userverification({}, values);
  return errors;
}
export async function passwordvalidate(values) {
  const errors = passvalidate({}, values);
  return errors;
}

export async function resetpassvalidate (values) {
  const errors = resetvalidate({}, values);
  return errors;
}

function passvalidate(errors = {}, values) {
  if (!values.password) {
    errors.password = "Password is required!";
    toast.error("❌ Password is required!");
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
    toast.error("⚠️ Too short! Min: 8 characters.");
  } else if (!/[A-Z/.test(values.password) || !/[0-9]/.test(values.password)) {
    errors.password =
      "Password must contain at least one uppercase letter and one number.";
    toast.error(
      "🔡 Must include an uppercase letter (A-Z) and a number (0-9)."
    );
  }

  return errors;
}

// username verificaion
function userverification(errors = {}, username) {
  if (!username) {
    errors.username = toast.error("Username is required!");
  } else if (username.length < 3) {
    // Check if username is too short
    errors.username = toast.error(
      "Username must be at least 3 characters long"
    );
  } else if (username.length > 20) {
    // Check if username is too long
    errors.username = "Username must not exceed 20 characters";
  } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    // Check for invalid characters
    errors.username = toast.error(
      "Username can only contain letters, numbers, and underscores"
    );
  }

  return errors;
}

// reset password validation

function resetvalidate(errors = {}, values) {
  if (!values.password) {
    errors.password = "Password is required!";
    toast.error("❌ Password is required!");
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
    toast.error("⚠️ Too short! Min: 8 characters.");
  } else if (!/[A-Z]/.test(values.password) || !/[0-9]/.test(values.password)) {
    errors.password =
      "Password must contain at least one uppercase letter and one number.";
    toast.error(
      "🔡 Must include an uppercase letter (A-Z) and a number (0-9)."
    );
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required!";
    toast.error("❌ Confirm Password is required!");
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match!";
    toast.error("❌ Passwords do not match!");
  }

  return errors;
}