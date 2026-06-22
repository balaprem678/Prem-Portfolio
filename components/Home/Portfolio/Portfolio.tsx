'use client';

import Image from 'next/image';
import './Portfolio.scss';
import { Images } from '@/components/Utilis/Images';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const projects = [
  {
    id: 1,
    title: 'Pillais E-Commerce Platform',
    category: 'E-Commerce',
    image: Images.pillaisin.src,
    url: 'https://www.pillais.in/',
    description:
      'Developed a responsive e-commerce platform featuring product browsing, category management, shopping cart functionality, secure checkout flow, and an optimized user experience across desktop and mobile devices.'
  },
  {
    id: 2,
    title: 'The45ers Learning Platform',
    category: 'EdTech Platform',
    image: Images.the45ers.src,
    url: 'https://www.the45ers.com/',
    description:
      'Developed and maintained a modern EdTech platform that connects IB students with expert tutors, premium study resources, and exam-focused learning materials. Built responsive user interfaces to enhance student engagement, course discovery, and personalized learning experiences.'
  },
  {
    id: 3,
    title: 'Bharathi Institutes',
    category: 'Education Website',
    image: Images.bi.src,
    url: 'https://bharathiinstitutes.com/',
    description:
      'Developed a responsive educational platform for Bharathi Institutes, showcasing Hotel Management and Paramedical courses, admission workflows, placement opportunities, branch locations, and student success stories. Focused on improving user engagement, lead generation, and seamless access to course information across devices.'
  },
];

export default function Portfolio() {
  const containerRef = useScrollAnimation();

  return (
    <section id="portfolio" className="portfolio" ref={containerRef}>
      <div className="container">
        <p className="portfolio-tag scroll-animate-down">My Work</p>

        <h2 className="section-title scroll-animate-up">Portfolio</h2>

        <p className="section-subtitle scroll-animate-up">
          Explore some of my recent projects showcasing modern UI/UX,
          responsive web development, and creative digital experiences.
        </p>

        <div className="portfolio-grid scroll-animate-stagger">
          {projects.map((project) => (
            <div className="portfolio-card" key={project.id}>
              <div className="portfolio-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="image"
                />
              </div>

              <div className="portfolio-content">
                <span className="category">{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-study-btn"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-footer scroll-animate-up">
          <a href="#" className="see-all-btn">
            See All Work
          </a>
        </div>
      </div>
    </section>
  );
}