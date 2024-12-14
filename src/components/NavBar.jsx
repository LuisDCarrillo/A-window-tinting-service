import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
  
      <div className="navbar-links">
        <a className="number"> Call or Text 321-4021863</a>
        
        <a
          href="https://www.instagram.com/a.window.tinting?igsh=c3VseXAzMGZwdXVj"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-link instagram-link"
        > Instagram
          <img src="/instagram-logo.png" alt="Instagram" className="instagram-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;