const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-800 p-4">
      <div className="container mx-auto grid grid-cols-1 sl:grid-cols-3 gap-4">
        {/* About Section */}
        <div className="text-gray-300">
        </div>
        {/* Social Section */}
        <div className="text-gray-300">
          <div className="space-x-2">
            <a href="#" className="hover:text-white">Line</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-4">
        &copy; 2024 NikoFolio. All Rights Reserved.
      </div>
    </footer>

  );
};

export default Footer;
