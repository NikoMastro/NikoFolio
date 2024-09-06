const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Contact Information */}
        <p className="mb-4">Email: your.email@example.com | Phone: (optional)</p>
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        {/* Navigation Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" target="_blank">Resume</a>
        </div>
        {/* Copyright Notice */}
        <p>© 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
