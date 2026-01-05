import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Build Intelligent Future with <br /><span className="text-gradient">Custom AI Solutions</span></h1>
            <p>We specialize in Model Training, RAG, Autonomous Agents, and Advanced Computer Vision. Turn your data into actionable intelligence today.</p>
            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">Explore Services</a>
              <a href="#poc" className="btn btn-outline">Build POC</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://picsum.photos/seed/ai-tech-blue/600/400" alt="AI Technology Visualization" />
            
            <div className="floating-badge badge-1">
              <i className="fa-solid fa-robot"></i>
              <div>
                <strong>AI Agents</strong>
                <span>Autonomous Workflow</span>
              </div>
            </div>
            <div className="floating-badge badge-2">
              <i className="fa-solid fa-eye"></i>
              <div>
                <strong>Vision AI</strong>
                <span>Real-time Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;