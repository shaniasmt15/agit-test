import { Alert } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const setToken = (value) => {
  localStorage.setItem("token", value);
  return;
};

export function Login() {
  const navigate = useNavigate();
  const [isShowAlert, showAlert] = useState(false);

  const onFinish = (value) => {
    const { username, password } = values;
    if (username === "shania" && password === "12345") {
      setToken("token_access");
      return navigate("/home");
    } else showAlert(true);
  };

  const RenderAlert = () => {
    setTimeout(() => {
      showAlert(false);
    }, 1000);

    return (
      <div className="alert">
        <Alert></Alert>
      </div>
    );
  };
}
