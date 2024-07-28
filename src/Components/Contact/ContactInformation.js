import './ContactInformation.css';
import { IoIosContact } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import Social from '../Socials/Social';
import leetcode from '../../assets/leetcode.png';

const ContactInformation = () => {
  return (
    <div className="contact-information-wrapper text-left">
      <div className="mb-6">
        <span className="contact-info">
          <IoIosContact /> Name: Dhruvil Patel
        </span>
        <span className="contact-info">
          <a href="tel:+14379857010">
            <AiOutlinePhone /> Phone: (980)-267-0217
          </a>
        </span>
        <span className="contact-info">
          <a href="mailto:dhruvilpatel.dpp@gmail.com">
            <HiOutlineMail /> Email: dhruvilpatel.dpp@gmail.com
          </a>
        </span>
      </div>
      <div className="socials">
        <Social
          title="LinkedIn"
          class="linkedin"
          link="https://www.linkedin.com/in/dhruvil-patel-dev/"
        >
          <BsLinkedin />
        </Social>
        <Social
          title="Github"
          class="github"
          link="https://github.com/Dhruvilpatel27"
        >
          <BsGithub />
        </Social>
        <Social
          title="Leetcode"
          class="leetcode"
          link="https://leetcode.com/Dhruvildragon/"
        >
          <img src={leetcode} alt="leetcode-logo" width="30px" height="30px" />
        </Social>
      </div>
    </div>
  );
};

export default ContactInformation;
