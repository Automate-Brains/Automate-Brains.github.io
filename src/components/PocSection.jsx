import React from 'react';

const PocSection = () => {
  return (
    <section id="poc" className="section-padding">
      <div className="container">
        <div className="poc-section">
          <div className="poc-image">
            <img src="https://picsum.photos/seed/poc-prototype/600/500" alt="POC Development Process" />
          </div>
          <div className="poc-content">
            <h4 style={{ color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Rapid Prototyping</h4>
            <h2>From Idea to Proof of Concept (POC) in Weeks</h2>
            <p>Don't commit to a full-scale build without validation. We help you build functional AI POCs to demonstrate value and feasibility to stakeholders quickly.</p>
            
            <div className="feature-row">
              <div className="feature-icon"><i className="fa-solid fa-rocket"></i></div>
              <div>
                <h4>Fast Deployment</h4>
                <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#9ca3af' }}>Leveraging serverless tech to get your prototype running fast.</p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon"><i className="fa-solid fa-sliders"></i></div>
              <div>
                <h4>Iterative Refinement</h4>
                <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#9ca3af' }}>Continuous feedback loops to tune the model before scaling.</p>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">Discuss Your POC</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PocSection;  