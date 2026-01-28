import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function ContactPreview() {
  return (
    <section id="contact" className="contact-preview" data-aos="fade-up">
      <h2>Contact Me</h2>

      <p>
        <FiPhone /> Phone: 0116023248
      </p>

      <p>
        <FaWhatsapp /> WhatsApp:{" "}
        <a
          href="https://wa.me/254116023248"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
      </p>

      <p>
        <FaInstagram /> Instagram:{" "}
        <a
          href="https://instagram.com/fjerusion"
          target="_blank"
          rel="noopener noreferrer"
        >
          @fjerusion
        </a>
      </p>

      <p>
        <FiMail /> Email: jerusionfortiny@gmail.com
      </p>
    </section>
  );
}

export default ContactPreview;
