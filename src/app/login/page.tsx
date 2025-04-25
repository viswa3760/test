"use client";
import { TextField } from "@mui/material";
import { Button } from "../../../Components/button";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  // Handle change for email and password
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    // Check if password length is valid
    setIsPasswordValid(value.length >= 6);
  };

  // Enable button when both fields are filled and password is valid
  const isFormValid = email !== "" && password !== "" && isPasswordValid;

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
          {[
            { label: "Email address", placeholder: "Enter Email Address" },
            {
              label: "Password",
              type: "password",
              placeholder: "Enter Password",
            },
          ].map(({ label, type = "text", placeholder }) => (
            <div key={label} className="mb-4 w-full">
              <TextField
                id={label}
                label={label}
                type={type}
                placeholder={placeholder}
                value={label === "Email address" ? email : password}
                onChange={
                  label === "Email address"
                    ? handleEmailChange
                    : handlePasswordChange
                }
                inputProps={{
                  style: {
                    padding: "10px", // Add padding inside the input field
                  },
                }}
                InputLabelProps={{ shrink: true }}
                className="w-full p-0"
                sx={{
                  "& label": {
                    color: "#6C25FF",
                  },
                  "& label.Mui-focused": {
                    color: "#000",
                  },
                  "& .MuiFormLabel-asterisk": {
                    color: "red", // change asterisk color here
                  },
                }}
              />
            </div>
          ))}
        </div>
        <Button text="Login" variant="primary" disabled={!isFormValid} />
      </div>
    </div>
  );
}
