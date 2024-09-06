import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-white text-xl font-bold">
          MyLogo
        </a>

        {/* Links (Hidden on small screens) */}
        <div className="hidden md:flex space-x-4">
          <a href="/about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="/projects" className="text-gray-300 hover:text-white">
            Projects
          </a>
          <a href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button (Visible on small screens) */}
        <button className="md:hidden text-gray-300 hover:text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>

  );
}

export default Navbar;
