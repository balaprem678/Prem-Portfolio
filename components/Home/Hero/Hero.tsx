import { Images } from "@/components/Utilis/Images";
import "./Hero.scss";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left */}
        <div className="hero-content">
          <p className="hero-subtitle">Welcome to my portfolio</p>

          <h1 className="hero-title">
            Hello, I&apos;m <br />
            <span>Premnath</span> Sarathi
          </h1>

          <p className="hero-description">
            I&apos;m a Frontend <strong>UI Designer</strong> &
            <strong>Developer</strong> based have passion
            to build innovative and beautiful web applications through clean
            design.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">
              My Work
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            {[
              ["3 Y.", "Experience"],
              ["30+", "Projects Completed"],
              ["3", "Happy Clients"],
            ].map(([num, label]) => (
              <div key={label} className="stat-item">
                <div className="stat-number">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hero-image">
          <div className="portrait-card">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>

            <div className="avatar-wrapper">
              <div className="avatar">
                <img src={Images.myprofile1.src} alt="My Profile" className="avatar-image" />
              </div>
              <div className="avatar-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}