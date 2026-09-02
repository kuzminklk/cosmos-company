"use client";

import { useEffect, useState } from "react";

const services = [
  ["01", "Applied Intelligence", "AI systems that turn complex information into a clear advantage."],
  ["02", "Software Engineering", "Fast, resilient products built around how people actually work."],
  ["03", "Technical Strategy", "A decisive path from ambitious idea to dependable infrastructure."]
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting)),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="Cosmo home">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>COSMO</span>
        </a>
        <div className="nav-links">
          <a href="#capabilities">Capabilities</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:hello@cosmo.company">Start a conversation <Arrow /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
          <span /><span />
        </button>
      </nav>

      {menuOpen && <div className="mobile-menu">
        <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
        <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>}

      <section id="top" className="hero grid-surface">
        <div className="hero-kicker"><span className="live-dot" /> Independent technology company</div>
        <div className="hero-copy">
          <p className="eyebrow">Daniel Cosmo / Founder</p>
          <h1>Build the<br /><em>uncommon.</em></h1>
          <div className="hero-bottom">
            <p>Cosmo turns ambitious questions into durable technology. We design and engineer the intelligent systems behind the next era of business.</p>
            <a href="#capabilities" className="round-link" aria-label="Explore capabilities"><Arrow /></a>
          </div>
        </div>
        <div className="orbit" aria-hidden="true"><div className="orbit-core" /><span className="o1" /><span className="o2" /><span className="o3" /></div>
        <div className="hero-index">01 — 04</div>
      </section>

      <section id="capabilities" className="capabilities">
        <div className="section-label reveal"><span>01</span> What we do</div>
        <div className="section-intro reveal">
          <h2>Technology with<br />a point of view.</h2>
          <p>We pair the rigor of computer science with the curiosity needed to find a better answer.</p>
        </div>
        <div className="service-list">
          {services.map(([number, title, description]) => <article className="service reveal" key={number}>
            <span className="service-number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#contact" aria-label={`Learn about ${title}`}><Arrow /></a>
          </article>)}
        </div>
      </section>

      <section id="approach" className="manifesto grid-surface">
        <div className="section-label light reveal"><span>02</span> The Cosmo way</div>
        <div className="manifesto-copy reveal">
          <p className="eyebrow">No spectacle without substance</p>
          <h2>We make technology<br />feel <em>inevitable.</em></h2>
          <p className="manifesto-body">The best systems are almost invisible: focused, powerful, and ready for what comes next. We work closely, move deliberately, and leave you with a capability—not a dependency.</p>
        </div>
        <div className="signal-card reveal">
          <div className="signal-line"><span>Signal</span><b /></div>
          <div className="signal-number">∞</div>
          <div className="signal-line"><span>Potential</span><span>Always on</span></div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-top reveal"><span>03</span><span>Available for selected projects</span></div>
        <h2 className="reveal">Let&apos;s make<br />something <em>matter.</em></h2>
        <a className="contact-email reveal" href="mailto:hello@cosmo.company">hello@cosmo.company <Arrow /></a>
        <footer>
          <span>© {new Date().getFullYear()} Cosmo Company</span>
          <span>Designed for a future in motion.</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
