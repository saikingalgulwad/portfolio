import Navbar from "../components/Navbar";

export default function ProjectsPage() {
  return (<>
  <Navbar></Navbar>
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b-4 border-indigo-500 inline-block pb-2">
          My Projects
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Manga Reading App */}
          <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-indigo-500/10 transition">
            <h2 className="text-xl font-semibold text-indigo-300">Manga Reading App</h2>
            <p className="text-sm text-gray-400 mt-2">
              A web application to browse and read manga online with a clean UI and responsive layout.
              Built using Next.js, Tailwind CSS, and deployed on Vercel.
            </p>
            <div className="flex gap-4 mt-4 text-sm text-indigo-400">
              <a href="https://manga-tau-nine.vercel.app/" target="_blank" className="hover:underline">
                Live Demo
              </a>
              <a href="https://github.com/saikingalgulwad/manga" target="_blank" className="hover:underline">
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Marathi Rap Website */}
          <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-indigo-500/10 transition">
            <h2 className="text-xl font-semibold text-indigo-300">Marathi Rap Website</h2>
            <p className="text-sm text-gray-400 mt-2">
              A music discovery platform showcasing underground Marathi rap culture. Includes embedded YouTube
              videos and artist profiles. Built with Next.js and styled using Tailwind CSS.
            </p>
            <div className="flex gap-4 mt-4 text-sm text-indigo-400">
              <a href="https://marathi-rap.vercel.app/" target="_blank" className="hover:underline">
                Live Demo
              </a>
              <a href="https://github.com/saikingalgulwad/newmarathi" target="_blank" className="hover:underline">
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Pinterest Clone */}
          <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-indigo-500/10 transition">
            <h2 className="text-xl font-semibold text-indigo-300">Pinterest Clone</h2>
            <p className="text-sm text-gray-400 mt-2">
              A modern Pinterest clone built using Next.js. It features dynamic image layout, responsive design,
              and sleek interactions, closely replicating the original Pinterest experience.
            </p>
            <div className="flex gap-4 mt-4 text-sm text-indigo-400">
              <a href="https://saikingnext.vercel.app/" target="_blank" className="hover:underline">
                Live Demo
              </a>
              <a href="https://github.com/saikingalgulwad/saikingnext" target="_blank" className="hover:underline">
                GitHub Repo
              </a>
            </div>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-indigo-500/10 transition">
            <h2 className="text-xl font-semibold text-indigo-300">Zoom Clone</h2>
            <p className="text-sm text-gray-400 mt-2">
              A modern Zoom clone built using Next.js. It features dynamic video call layout, responsive design,
              and sleek interactions, closely replicating the original Zoom experience.
            </p>
            <div className="flex gap-4 mt-4 text-sm text-indigo-400">
              <a href="https://video-call-zeta-nine.vercel.app/" target="_blank" className="hover:underline">
                Live Demo
              </a>
              <a href="https://github.com/saikingalgulwad/video-call" target="_blank" className="hover:underline">
                GitHub Repo
              </a>
            </div>
          </div>
             <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-indigo-500/10 transition">
            <h2 className="text-xl font-semibold text-indigo-300">ToDo List</h2>
            <p className="text-sm text-gray-400 mt-2">
              first next.js project is ToDo list  built using Next.js.
            </p>
            <div className="flex gap-4 mt-4 text-sm text-indigo-400">
              <a href="https://next-js-app-eight-brown.vercel.app/" target="_blank" className="hover:underline">
                Live Demo
              </a>
              <a href="https://github.com/saikingalgulwad/next.js-app" target="_blank" className="hover:underline">
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}
