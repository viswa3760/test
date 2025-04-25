'use client';

import { Button } from "../Components/button";
import { useRouter } from 'next/navigation';

export default function HomePage() {
    const router = useRouter();
    const handleRigisterClick = () => {
        router.push('/register'); // Replace with your desired route
      };
    
      const handleLoginClick = () => {
        router.push('/login'); // Replace with your desired route
      };
  return (
    <div className="flex flex-col w-full justify-end">
      <h2 className="text-[28px]/[17px] text-black font-semibold">
        Welcome To PopX
      </h2>

      <p className="max-w-[232px] text-black mt-[10px] opacity-60 font-normal text-[18px]/[26px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className="flex flex-col gap-y-3 mt-6">
      <Button text="Create Account" variant="primary" onClick={handleRigisterClick}  />
      <Button text="Already Registered? Login" variant="secondary" onClick={handleLoginClick} />
      </div>
    </div>
  );
}
