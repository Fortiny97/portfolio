import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <h2>About</h2>
      <p>A short introduction about who I am and what I do.</p>

      <Link to="/" className="read-more">
        Read more →
      </Link>
    </section>
  );
}

export default About;
