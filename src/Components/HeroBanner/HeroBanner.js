import heroImage from '../../assets/portfolioHeroBanner.jpeg';
import './HeroBanner.css';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="hero-banner-wrapper flex flex-col-reverse py-6">
      <div className="hero-text px-7 text-4xl">
        <div className="">
          <span>Hi! I am</span>
          <span className="block text-7xl hero-name">Dhruvil</span>
          <span className="text-4xl block hero-position">
            Software Engineer
          </span>
          <span className="text-xl hero-intro">
          Driven by a passion for software engineering, I specialize in developing resilient microservices and <strong>scalable systems</strong>, with a strong focus on cloud infrastructure and performance optimization. My experience at <strong>Amazon</strong> and <strong>eWorld</strong> includes enhancing <strong>user</strong> experiences and streamlining processes, resulting in significant efficiency gains for <strong>users</strong> and <strong>businesses</strong> alike.
          </span>
          <br></br>

          <span className="text-xl hero-intro">
            Welcome to my portfolio website. Feel free to explore my work or learn more about my background.
          </span>
        </div>
        <div className="hero-button-wrapper">
          <Link to="/projects" className="button hero-button block m-auto">
            My Work
          </Link>
        </div>
        <div className="hero-button-wrapper">
          <Link to="/about" className="button hero-button block m-auto">
            About Me
          </Link>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img alt="Hero" src={heroImage} />
      </div>
    </div>
  );
};

export default HeroBanner;
