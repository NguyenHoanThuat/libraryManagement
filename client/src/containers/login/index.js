import React from "react";

import Input from "../../components/input/index";
import Button from "../../components/button/index";
import ImgLogin from "../../assets/img/imgLogin.svg";

export default function Login() {
  return (
    <div style={{ backgroundColor: '#fff', display: "flex", width: '1530px', height: '885px', margin: 'auto', borderRadius: 30}}>
      <div
        style={{
          background: "#D3EBFF ",
          display: "flex",
          flexDirection: "column",
          width: "565px",
          height: "627px",
          borderRadius: "15px",
          margin: 'auto',
          marginRight: "20px",
        }}
      >
        <h1>USER LOGIN</h1>
        <Input title="Username" />
        <Input title="Password" type="password" />
        <h2>Forgot password > </h2>
        <Button />
        <h2>
          Don't have an account? <span>Sign up here</span>
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "565px",
          height: "627px",
          borderRadius: "15px",
          margin: 'auto',
        }}
      >
        <img
          style={{
            width: "565px",
            height: "627px",
            borderRadius: "15px",
          }}
          src={ImgLogin}
          alt="ImageLogin"
        />
      </div>
    </div>
  );
}
