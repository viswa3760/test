"use client";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "../../../Components/button";

export default function Register() {
  const [isAgency, setIsAgency] = useState("yes");

  return (
    <div className="flex flex-col w-full px-5 py-10 justify-between">
      <div>
        <h1 className=" max-w-[188px] text-[28px]/[36px] text-black">
          Create your PopX account
        </h1>
        <div className="mt-[30px]">
          {[
            { label: "Full Name", required: true },
            { label: "Phone number", required: true },
            { label: "Email address", required: true },
            { label: "Password", required: true, type: "password" },
            { label: "Company name" },
          ].map(({ label, required, type = "text" }) => (
            <div key={label} className="mb-4 w-full">
              <TextField
                required={required}
                id="outlined-required"
                type={type}
                label={label}
                inputProps={{
                  style: {
                    padding: "10px", // Add padding inside the input field
                  },
                }}
                InputLabelProps={{ shrink: true }}
                // defaultValue="Hello World"
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

        {/* Radio buttons */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Are you an Agency?<span className="text-purple-600">*</span>
          </p>
          <div className="flex gap-6">
            {["Yes", "No"].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="agency"
                  value={option.toLowerCase()}
                  checked={isAgency === option.toLowerCase()}
                  onChange={() => setIsAgency(option.toLowerCase())}
                  className="form-radio text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-800">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <Button text="Create Account" variant="primary" />
    </div>
  );
}
