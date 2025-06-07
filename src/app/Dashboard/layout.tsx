"use client";
import Navbar from '@/Component/Navbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
   <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow pt-20 grid-background'>{children}</main>
   </div>
  );
}
