import ContactInformation from '../Contact/ContactInformation';
import './AboutIntroduction.css';

const AboutIntroduction = () => {
  return (
    <div className="about-introduction md:max-w-lg p-5 md:w-6/12">
      <h1 className="font-semibold text-6xl mb-5">About Me</h1>
      <div className="introuction-text-wrapper mb-5 text-lg">
        <p>
          Hi! I am <span className="name font-bold">Dhruvil</span>, A Software Developer. I have extensive{' '}
          <a className="experience font-bold" href="#education-experience">
            Full-Stack development experience
          </a>
          . I love solving problems and implement feasible solutions for real world problems. I got my Master's Degree from
          University of North Carolina at Charlotte in 2022.
        </p>
        &nbsp;
        <p>
      I love to play Call of Duty and Counter Strike, Always Aim for the HeadShot!
        </p>
      </div>
      <ContactInformation />
    </div>
  );
};

export default AboutIntroduction;
