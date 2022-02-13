import axios from "axios";
const BASE_URI = "http://localhost:3000";
export const REGISTER = async (data) => {
  try {
    const formData = new FormData();
    for (let key in data) formData.append(key, data[key]);
    const response = await fetch(`${BASE_URI}/auth/register`, {
      body: formData,
      method: "POST",
    });
    const register = await response.json();

    if (register.status === "error") throw register;
    return register;
  } catch (error) {
    console.error("query error", error);
    return error;
  }
};

export const LOGIN = async (data) => {
  try {
    const response = await fetch(`${BASE_URI}/auth/login`, {
      headers: {
        "Content-Type": "Application/JSON",
      },
      method: "POST",
      body: JSON.stringify(data),
      withCredentials: true,
      credentials: "include",
    });
    const login = await response.json();
    if (login.status === "error") throw login;
    return login;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const GET_USER = async () => {
  try {
    const response = await fetch(`${BASE_URI}/user/profile`, {
      headers: {
        "Content-Type": "Application/JSON",
      },
      withCredentials: true,
      credentials: "include",
    });
    const user = await response.json();
    if (user.status === "error") throw user;
    return user;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const ENROLL_USER_COURSE = async (data) => {
  try {
    const response = await fetch(`${BASE_URI}/user/enroll`, {
      headers: {
        "Content-Type": "Application/JSON",
      },
      withCredentials: true,
      credentials: "include",
      method: "POST",
      body: JSON.stringify(data),
    });
    const enroll = await response.json();
    if (enroll.status === "error") throw enroll;
    return enroll;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const GET_USER_PACKAGES = async (data) => {
  try {
    const response = await fetch(`${BASE_URI}/user/package`, {
      headers: {
        "Content-Type": "Application/JSON",
      },
      withCredentials: true,
      credentials: "include",
      method: "GET",
      body: JSON.stringify(data),
    });
    const pkgs = await response.json();
    if (pkgs.status === "error") throw pkgs;
    return pkgs;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const GET_PACKAGES = async () => {
  try {
    const response = await fetch(`${BASE_URI}/package`);
    const packages = await response.json();
    if (packages.status === "error") throw packages;
    return packages;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const GET_SINGLE_PACKAGES = async (id) => {
  try {
    const response = await fetch(`${BASE_URI}/package/${id}`, {
      headers: {
        "Content-Type": "Application/JSON",
      },
      method: "GET",
    });
    const pkg = await response.json();
    if (pkg.status === "error") throw pkg;
    return pkg;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const LOGOUT = async () => {
  try {
    const response = await fetch(`${BASE_URI}/auth/logout`, {
      headers: {
        "Content-Type": "Application/JSON",
      },
      withCredentials: true,
      credentials: "include",
      method: "GET",
    });
    const logout = await response.json();
    console.log(response, logout);
    if (logout.status === "error") throw logout;
    return logout;
  } catch (error) {
    console.error(error);
    return error;
  }
};
