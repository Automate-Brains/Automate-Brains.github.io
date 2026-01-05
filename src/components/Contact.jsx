import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Model Training', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! This is a demo form.');
  };

  return (
    <section id="contact" className="section-padding cta-section">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to Transform Your Business?</h2>
          <p>Whether you need a custom model, a sophisticated agent, or a video analytics pipeline, our team is ready to help.</p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" className="form-control" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Business Email</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="john@company.com" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="service">Interested Service</label>
            <select id="service" name="service" className="form-control" value={formData.service} onChange={handleChange}>
              <option>Model Training</option>
              <option>RAG Development</option>
              <option>AI Agents</option>
              <option>Voice/Text Bots</option>
              <option>Video/Image Analytics</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Project Details</label>
            <textarea id="message" name="message" className="form-control" rows="4" placeholder="Tell us about your requirements..." required value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Request</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;