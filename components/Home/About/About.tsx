import { Images } from "@/components/Utilis/Images";
import "./About.scss";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-card about-grid">
          <div className="profile-section">
            <div className="photo-placeholder">
              <img src={Images.myprofile2.src} alt="My Profile" className="profile-image" />
            </div>

            <div className="social-icons">
              <a href="https://www.instagram.com/coding_prem726?igsh=bGZ3ZGppOGM3cHF4" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={Images.instagram.src} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/premnath-sarathi-5a088b212/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={Images.linkedin.src} alt="LinkedIn" />
              </a>
              <a href="https://github.com/balaprem678" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={Images.github.src} alt="GitHub" />
              </a>
              <a href="https://wa.me/6374706784?text=Hi,%20%20Thank%20you%20for%20reaching%20out.%20May%20I%20know%20who%20you%20are%20and%20how%20I%20can%20help%20you?" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={Images.whatsapp.src} alt="WhatsApp" />
              </a>
            </div>
          </div>

          <div className="about-content">
            <p className="about-subtitle">About Me</p>

            <h2 className="about-title">
              I am Professional User
              <br />
              Experience Designer
            </h2>

            <p className="about-description">
              Design and develop services for customers specializing creating
              stylish, modern websites, web services and online shops.
            </p>

            <p className="about-description">
              Design and develop services for customers specializing creating
              modern websites, web services and online shops.
            </p>

            <div className="about-actions">
              <a href="#portfolio" className="btn-primary">
                My Project
              </a>
              <a href="/assests/images/PremCV.pdf" download className="btn-outline">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}