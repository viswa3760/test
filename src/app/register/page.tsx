'use client';

import { TextField } from '@mui/material';
import { useState } from 'react';
import { Button } from '../../../Components/button';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();

  // Track input fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState('yes');

  const handleCreateAccount = () => {
    if (!fullName || !phone || !email || !password) {
      alert('Please fill in all required fields');
      return;
    }

    // All required fields filled — navigate
    router.push('/account-settings');
  };

  return (
    <div className="flex flex-col w-full px-5 py-10 justify-between">
      <div>
        <h1 className=" max-w-[188px] text-[28px]/[36px] text-black">
          Create your PopX account
        </h1>
        <div className="mt-[30px]">
          <div className="mb-4 w-full">
            <TextField
              required
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              inputProps={{ style: { padding: '10px' } }}
              InputLabelProps={{ shrink: true }}
              className="w-full p-0"
              sx={muiStyles}
            />
          </div>
          <div className="mb-4 w-full">
            <TextField
              required
              label="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              inputProps={{ style: { padding: '10px' } }}
              InputLabelProps={{ shrink: true }}
              className="w-full p-0"
              sx={muiStyles}
            />
          </div>
          <div className="mb-4 w-full">
            <TextField
              required
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{ style: { padding: '10px' } }}
              InputLabelProps={{ shrink: true }}
              className="w-full p-0"
              sx={muiStyles}
            />
          </div>
          <div className="mb-4 w-full">
            <TextField
              required
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{ style: { padding: '10px' } }}
              InputLabelProps={{ shrink: true }}
              className="w-full p-0"
              sx={muiStyles}
            />
          </div>
          <div className="mb-4 w-full">
            <TextField
              label="Company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              inputProps={{ style: { padding: '10px' } }}
              InputLabelProps={{ shrink: true }}
              className="w-full p-0"
              sx={muiStyles}
            />
          </div>
        </div>

        {/* Radio buttons */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Are you an Agency?<span className="text-purple-600">*</span>
          </p>
          <div className="flex gap-6">
            {['Yes', 'No'].map((option) => (
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

      <Button text="Create Account" variant="primary" onClick={handleCreateAccount} />
    </div>
  );
}

// MUI custom styles
const muiStyles = {
  '& label': {
    color: '#6C25FF',
  },
  '& label.Mui-focused': {
    color: '#000',
  },
  '& .MuiFormLabel-asterisk': {
    color: 'red',
  },
};
