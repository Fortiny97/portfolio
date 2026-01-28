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
    link: "#",
  },
  {
    title: "Full Stack App",
    description: "Node.js backend + React frontend",
    link: "#",
  },
  {
    title: "REST API Projects",
    description: "APIs with authentication and CRUD operations",
    link: "#",
  },
  {
    title: "Authentication Dashboard",
    description: "Node.js, Express.js, MongoDB, JWT",
    link: "https://github.com/Fortiny97/authentication-dashboard",
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
