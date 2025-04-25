"use client";

import { TextField } from "@mui/material";
import { Button } from "../../../Components/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length >= 6);
  };

  const isFormValid = email !== "" && password !== "" && isPasswordValid;

  const handleLogin = () => {
    if (!isFormValid) {
      alert("Please fill all fields correctly.");
      return;
    }

    // Navigate to /account-settings
    router.push("/account-settings");
  };

  return (
    <div className="flex flex-col px-5 py-10 w-full justify-between">
      <div>
        <h1 className="max-w-[188px] text-[28px]/[36px] text-black">
          Create your PopX account
        </h1>
        <p className="max-w-[232px] text-black opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="mt-[30px]">
          <div className="mb-4 w-full">
            <TextField
              id="Email address"
              label="Email address"
              placeholder="Enter Email Address"
              value={email}
              onChange={handleEmailChange}
              inputProps={{ style: { padding: "10px" } }}
              InputLabelProps={{ shrink: true }}
              className="w-full p-0"
              sx={muiStyles}
            />
          </div>
          <div className="mb-4 w-full">
            <TextField
              id="Password"
              label="Password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
              inputProps={{ style: { padding: "10px" } }}
              InputLabelProps={{ shrink: true }}
              className="w-full p-0"
              sx={muiStyles}
              error={!isPasswordValid && password !== ""}
              helperText={
                !isPasswordValid && password !== ""
                  ? "Password must be at least 6 characters"
                  : ""
              }
            />
          </div>
        </div>

        <Button
          text="Login"
          variant="primary"
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}

// MUI input styles
const muiStyles = {
  "& label": {
    color: "#6C25FF",
  },
  "& label.Mui-focused": {
    color: "#000",
  },
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },
};
