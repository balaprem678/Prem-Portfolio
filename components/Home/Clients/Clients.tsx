'use client';
import Image from 'next/image';
import  './Clients.scss';
import { Images } from '@/components/Utilis/Images';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const clients = [
  { name: 'Pillais', logo: Images.client_logo_1.src },
  { name: 'Bharathi Institute', logo: Images.client_logo_2.src },
  { name: 'The45ers', logo: Images.client_logo_3.src },
];

export default function Clients() {
  const containerRef = useScrollAnimation();

  return (
    <section className="clients" ref={containerRef}>
      <div className="container">
        <p className="clients-tag scroll-animate-down">Trusted By</p>

        <h2 className="clients-title scroll-animate-up">
          Projects & Clients
        </h2>

        <p className="clients-subtitle scroll-animate-up">
          Businesses and organizations I've worked with to create
          responsive web applications, CMS platforms, and eCommerce solutions.
        </p>

        <div className="clients-grid scroll-animate-stagger">
          {clients.map((client) => (
            <div key={client.name} className="client-card">
              <Image
                src={client.logo}
                alt={client.name}
                width={180}
                height={80}
                className="client-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}