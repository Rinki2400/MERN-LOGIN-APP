
import { toast} from "react-hot-toast";

export async function usenamevalidate(values){
    const  errors = uservarify({}, values)
     return errors
}



   function uservarify(errors={}, username) {
    if (!username ) {
        errors.username = toast.error("Username is required!");
    } else if (username.length < 3) {
        // Check if username is too short
        errors.username = toast.error("Username must be at least 3 characters long");   
    } else if (username.length > 20) {
        // Check if username is too long
        errors.username = "Username must not exceed 20 characters";
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        // Check for invalid characters
        errors.username = toast.error("Username can only contain letters, numbers, and underscores");   
    }
    
    return errors;
}
