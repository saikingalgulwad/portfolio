import Link from "next/link";
import Navbar from "../components/Navbar";

export default function ContactsPage() {
  return (<>
  <Navbar></Navbar>
    <div className="min-h-screen bg-gray-950 text-white py-12 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b-4 border-indigo-500 inline-block pb-2">
          Contact Me
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          I’m open to freelance work, collaborations, or just a friendly tech chat. Feel free to connect with me!
        </p>

        <div className="space-y-4">

          {/* Email */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              alt="Email"
              className="w-5 h-5 invert"
            />
            <a
              href="mailto:saiprasadalgulwad.gmail.com"
              className="hover:text-indigo-400 text-sm"
            >
              saiprasadalgulwad.gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
              alt="GitHub"
              className="w-5 h-5 invert"
            />
            <a
              href="https://github.com/saikingalgulwad"
              target="_blank"
              className="hover:text-indigo-400 text-sm"
            >
              github.com/saikingalgulwad
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
              alt="WhatsApp"
              className="w-5 h-5 invert"
            />
            <a
              href="https://wa.me/918530507285"
              target="_blank"
              className="hover:text-indigo-400 text-sm"
            >
              +91 85305 07285
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlemaps.svg"
              alt="Location"
              className="w-5 h-5 invert"
            />
            <p className="text-sm text-gray-300">Nanded, Maharashtra, India</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-10">
          Thank you for visiting my portfolio.
        </p>
      </div>
    </div>
    </>
  );
}
