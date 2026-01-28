import heroVideo from "../assets/hero-video.mp4";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background video */}
      <video className="hero-video" src={heroVideo} autoPlay loop muted />

      {/* Overlay for readability */}
      <div className="hero-overlay"></div>

      {/* Hero content */}
      <div className="hero-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>I am a Full Stack Developer</h1>
        <p>Building fast, scalable, and secure web applications.</p>
      </div>
    </section>
  );
};

export default Hero;
