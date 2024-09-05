import { useRef, useEffect } from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { BsBriefcase } from 'react-icons/bs';
import './EducationAndExperience.css';
import Timeline from '../UI/Timeline';

const EducationAndExperience = () => {
  const educationRef = useRef();
  const experienceRef = useRef();
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    const callbacks = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    let observer = new IntersectionObserver(callbacks, options);
    const elements = [educationRef.current, experienceRef.current];
    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <>
      <h1 className="text-4xl mb-10">My Journey</h1>
      <div
        id="education-experience"
        className="education-experience-wrapper flex flex-col justify-center items-center md:flex-row md:flex-start"
      >
        <div className="education fade-in" ref={educationRef}>
          <h1 className="text-3xl mb-5 text-center">
            <LuGraduationCap className="mr-2" />
            Education
          </h1>
          <div className="timeline-wrapper flex flex-col">
            <Timeline
              institute="University of North Carolina at Charlotte, NC"
              position="Master's in Computer Science"
              duration="2021 - 2022"
            />
            <Timeline
              institute="SRM University, India"
              position="Bachelor's in Computer Engineering"
              duration="2016-2020"
            />
          </div>
        </div>
        <div className="experience fade-in" ref={experienceRef}>
          <h1 className="text-3xl mb-5 text-center">
            <BsBriefcase className="mr-2" />
            Work Experience
          </h1>
          <div className="timeline-wrapper flex flex-col">
            <Timeline
              institute="Amazon.com Services LLC"
              position="Software Development Engineer"
              duration="June 2024 - Present"
              duties="Worked as part of Direct Tax Technology Team implementing various enterprise level applications and maintaining various Tax entities across the globe."
            />
            <Timeline
              institute="eWorld Enterprise Solutions"
              position="Software Engineer"
              duration="June 2023 - Apr 2024"
              duties="Designed and programmed workflows for the Benefits Eligibility Solutions application, cutting processing time for SNAP, TANF, and federal benefits by nine-tenths, significantly improving lives in Hawaii."
            />
            <Timeline
              institute="Amazon.com Services LLC"
              position="Software Development Engineer"
              duration="June 2022 - May 2023"
              duties="Optimized tools and services for inventory management, supporting over 600+ Amazon stores."
            />
            <Timeline
              institute="Rebel Softech"
              position="Software Developer"
              duration="Nov 2019 - Dec 2020"
              duties="Contributed to multiple systems for generating diverse reporting and correspondance features"
            />
            <Timeline
              institute="Indian Oil"
              position="Web Developer Intern"
              duration="May 2018 - Aug 2018"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationAndExperience;
