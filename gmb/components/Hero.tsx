"use client";

import { useState } from 'react';
import Link from 'next/link';

const trustBadges = [
  { icon: "✦", text: "Free In-Home Measurement" },
  { icon: "✦", text: "Expert Installation" },
  { icon: "✦", text: "3-Year Warranty" },
];

const stats = [
  { label: "Projects Done", value: "5,000+" },
  { label: "Premium Fabrics", value: "200+" },
  { label: "Years Experience", value: "20+" },
  { label: "Happy Families", value: "4,800+" },
];

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Name, email, and phone are required.');
      return;
    }
    setFormError('');
    setSubmitting(true);
    await new Promise(res => setTimeout(res, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="hero-section">
      {/* Top eyebrow bar */}
      <div className="hero-eyebrow-bar">
        {trustBadges.map((b) => (
          <div key={b.text} className="hero-badge">
            <span className="hero-badge-dot" />
            {b.text}
          </div>
        ))}
      </div>

      <div className="hero-container">
        {/* ── LEFT: Copy ── */}
        <div className="hero-copy">
          <p className="hero-label">Premium Window Treatments · Est. 2004</p>

          <h1 className="hero-headline">
            Transform Your <br />
            <span className="hero-headline-accent">Dream Space</span>
          </h1>

          <p className="hero-subhead">
            Bespoke curtains and smart motorised blinds tailored strictly to
            your dimensions. Because your home deserves&nbsp;
            <strong>ordinary-defying luxury.</strong>
          </p>

          {/* CTA row */}
          <div className="hero-cta-row">
            <Link href="/gallery" className="hero-btn-primary">
              View Portfolio
            </Link>
            <Link
              href="https://wa.me/917397223388"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-ghost"
            >
              <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </Link>
          </div>

          {/* Stats strip */}
          <div className="hero-stats">
            {stats.map((s, i) => (
              <div key={i} className="hero-stat-item">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Minimal Quote Form Card ── */}
        <div className="hero-form-col">
          <div className="hero-form-card">
            {/* Card header */}
            <div className="hero-form-header">
              <div className="hero-form-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="hero-form-title">Get a Free Quote</h3>
                <p className="hero-form-sub">We'll get back within 24 hours</p>
              </div>
            </div>

            <div className="hero-form-divider" />

            {submitted ? (
              <div className="hero-success">
                <div className="hero-success-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="hero-success-title">Request Received!</p>
                <p className="hero-success-body">
                  Thank you {formData.name}, our consultant will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="hero-form-body">
                <div className="hero-field-group">
                  <label className="hero-field-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="hero-field-input"
                  />
                </div>

                <div className="hero-field-group">
                  <label className="hero-field-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="hero-field-input"
                  />
                </div>

                <div className="hero-field-group">
                  <label className="hero-field-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="hero-field-input"
                  />
                </div>

                <div className="hero-field-group">
                  <label className="hero-field-label">Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Your city or area"
                    className="hero-field-input"
                  />
                </div>

                {formError && (
                  <p className="hero-form-error">{formError}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="hero-form-submit"
                >
                  {submitting ? (
                    <span className="hero-submit-loading">
                      <svg className="hero-spinner" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    'Book Free Consultation'
                  )}
                </button>

                <p className="hero-form-privacy">🔒 Your details are 100% private</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
