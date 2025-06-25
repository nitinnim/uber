import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/users/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        // console.log("Logout successful:", response.data);
        localStorage.removeItem("token");
        navigate("/login");
      }
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default UserLogout;
