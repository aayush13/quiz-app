import "./index.css";
import React from "react";
import { Card } from "@mui/material";
import InputField from "../../components/InputField";
import InputButton from "../../components/Button";
import background from "../../assets/2.jpg";
import {CardMedia} from "@mui/material";

function LoginPage() {
  return (
    <div className="container">
      <div className="flex-container">
        <div className="login-container">
          <Card
            variant="outlined"
            sx={{
              width: "100%",
              border: "0px"
            }}
          >
            <CardMedia
              sx={{ width:"100%", height: "50%" }}
              image={background}
              title="green iguana"
            />
            <div className="input-contianer">
              <InputField
                variant="standard"
                id="login-email"
                label="Username/Email"
              />
              <InputField variant="standard" id="password" label="Password" />
            </div>
            <div className="forgot-password">
              <a  href="/register">Forgot Password?</a>
            </div>
            <div className="button-container">
              <InputButton variant="contained" title="Login" />
            </div>
            <div className="new-account">
              <a href="/register">Create account</a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
