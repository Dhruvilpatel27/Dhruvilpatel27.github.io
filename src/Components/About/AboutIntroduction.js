import ContactInformation from '../Contact/ContactInformation';
import './AboutIntroduction.css';

const AboutIntroduction = () => {
  return (
    <div className="about-introduction md:max-w-lg p-5 md:w-6/12">
      <h1 className="font-semibold text-6xl mb-5">About Me</h1>
      <div className="introuction-text-wrapper mb-5 text-lg">
        <p>
          Hi! I am <span className="name font-bold">Dhruvil</span>, A Software Developer having extensive{' '}
          <a className="experience font-bold" href="#education-experience">
            Full-Stack development experience
          </a>
          . I love solving problems and implement feasible solutions for real world problems. 
        </p>
        &nbsp;
        <p>
        I enjoy engaging in spontaneous conversations and sharing my thoughts and insights. When I'm not working, you can find me playing Call of Duty and Counter-Strike, always aiming for that perfect headshot!        </p>
      </div>
      <ContactInformation />
    </div>
  );
};

export default AboutIntroduction;
