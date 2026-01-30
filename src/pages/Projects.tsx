import React from "react";

type Project = {
  title: string;
  description: string;
  link: string;
};

const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    description: "Built with React and Tailwind CSS",
    link: "https://your-portfolio.vercel.app", // Replace with your live portfolio URL
  },
  {
    title: "Full Stack App",
    description: "Node.js backend + React frontend",
    link: "#", // Replace with live link if deployed
  },
  {
    title: "REST API Projects",
    description: "APIs with authentication and CRUD operations",
    link: "#", // Replace with live link if deployed
  },
  {
    title: "Authentication Dashboard",
    description: "Node.js, Express.js, MongoDB, JWT",
    link: "https://authentication-dashboard.vercel.app", // LIVE app link
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-preview" data-aos="fade-up">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <a
            href={project.link}
            key={idx}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
