"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-3 z-10 flex items-center justify-between p-4 bg-gray-800 text-white my-2 mx-4 rounded-2xl">
      <h1 className="text-2xl font-bold">@Harlow</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
