import React from 'react';
import { servicesData } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our AI Expertise</h2>
          <p>Comprehensive artificial intelligence services tailored to scale your business operations and enhance decision-making.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-icon">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-list">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;