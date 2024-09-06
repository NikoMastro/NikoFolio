import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6 text-white">
          <li><Link href="#about">About Me</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
