'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>

      <div>
        <button className="rounded bg-black px-4 py-2 text-white">
          Sign In
        </button>
      </div>
    </nav>
  );
}