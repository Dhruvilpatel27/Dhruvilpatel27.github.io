import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="copyright-text">
        Copyright &copy; {currentYear} | Dhruvil Portfolio
      </div>
    </footer>
  );
};

export default Footer;
