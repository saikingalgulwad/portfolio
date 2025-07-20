import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-indigo-400">Saiprasad</div>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link href="/about" className="hover:text-indigo-400 transition">About</Link>
          <Link href="/projects" className="hover:text-indigo-400 transition">Projects</Link>
          <Link href="/contacts" className="hover:text-indigo-400 transition">Contacts</Link>
        </div>
      </div>
    </nav>
  );
}
