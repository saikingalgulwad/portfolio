import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold text-[#ff715b]">
          Sai.dev
        </div>

        {/* Navigation */}
        <div className="space-x-8 text-sm font-medium">

          <Link href="/" className="hover:text-[#ff715b] transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#ff715b] transition">
            About
          </Link>

          <Link href="/projects" className="hover:text-[#ff715b] transition">
            Projects
          </Link>

          <Link href="/contacts" className="hover:text-[#ff715b] transition">
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
}
