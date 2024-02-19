import ProjectUI from './ProjectUI';
import './Projects.css';
import Skills from './Skills';

const Projects = () => {
  return (
    <div className="projects-page-wrapper flex justify-center items-center flex-col p-10">
      <div className="flex flex-col items-center mb-11">
        <h1 className="text-5xl font-bold mb-11">My Projects</h1>
        <div className="projects-introduction mb-7 text-center text-lg">
             {/* GameDigger Project */}
      <ProjectUI
      title="GameDigger"
      description={[
          "Developed a web portal for gamers community at UNC Charlotte to share servers of nostalgic games with peer-to-peer dynamic chat capabilities.",
          "Integrated Mongoose ODM and implemented logging features to track control flow for better analysis and debugging.",
          "Implemented scalable and responsive website with large-scale MongoDB solution using Node.JS and REST APIs with support for user authentication and authorization to ensure data security."
      ]}
  />

      {/* The Reviewer Project */}
      <ProjectUI
        title="The Reviewer"
        description={[
          "Implemented sentimental analysis API using Deep Learning (Neural Networks) to review students' and faculty comments on college products.",
          "Integrated the API in an Android application using Java, firebase, and Android Studio to find sentiments in those comments.",
          "Assisted university goods production team to increase positively commented goods by 20% using the application."
        ]}
              />

      {/* Driver Distraction System Project */}
      <ProjectUI
        title="Driver Distraction System"
        description={[
          "Developed a smart device to detect distracted or drowsy drivers to improve road safety.",
          "Device fused and tracked multiple modalities such as drivers pulse(using Arduino), facial expressions, eyes movement, and yawn and fed its output to Haar-cascade algorithm based object detection model.",
          "System achieved 50% speed up while maintaining the same accuracy as compared to state of the art approaches at the time. Publications: IJITEE (Scopus) and IJRASET Journals."
        ]}      />
        </div>
      </div>
      <Skills />
        
    </div>
  );
};

export default Projects;
