import { Link } from "react-router-dom";

function ProjectsPreview() {
  return (
    <section id="projects" className="projects-preview" data-aos="fade-up">
      <h2>Projects</h2>
      <p>Some of the work I’ve built and contributed to.</p>

      <Link to="/" className="read-more">
        View Projects →
      </Link>
    </section>
  );
}

export default ProjectsPreview;
