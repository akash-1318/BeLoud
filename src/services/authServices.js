import axios from "axios";

export const signupService = (firstname, lastname, username, password) => {
    return axios.post("/api/auth/signup", {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
      });
}

export const signinService = (username, password) => {
    return axios.post("/api/auth/login", {
        username:username,
        password: password,
      });
}