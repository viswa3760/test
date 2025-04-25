// ✅ src/components/PathBasedHeader.tsx
'use client';

import { usePathname } from 'next/navigation';

const PathBasedHeader = () => {
  const pathname = usePathname();

  if (pathname !== '/account-settings') return null;

  return (
    <div className="px-4 py-5 bg-white text-black min-w-[377px] block">
      <p>Account Settings</p>
    </div>
  );
};

export default PathBasedHeader;
