import { useEffect, useState } from "react";
import gilangLogo from "./assets/gilang-logo.png";
import portrait from "./assets/portrait.jpg";
import footerNote from "./assets/footer-note.png";
import footerRight from "./assets/footer-right.png";
import huaweiSdwanLogo from "./assets/huawei-sdwan.png";
import "./App.css";

/* ---------- Contact info ---------- */
const CONTACT = {
  whatsapp: "6281295880257",
  email: "gilangzakaria39@gmail.com",
};

/* ---------- Icon (simple inline SVGs, no extra dependency needed) ---------- */
const Icon = ({ path }: { path: string }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d={path} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const icons = {
  shield: "M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z",
  cloud: "M6 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 15 8a4 4 0 0 1 1 7.87M6 18h11",
  gear: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8-3a8 8 0 0 1-.15 1.5l1.8 1.4-1.5 2.6-2.1-.7a8 8 0 0 1-2.6 1.5l-.3 2.2H9.85l-.3-2.2a8 8 0 0 1-2.6-1.5l-2.1.7-1.5-2.6 1.8-1.4A8 8 0 0 1 4 12a8 8 0 0 1 .15-1.5l-1.8-1.4 1.5-2.6 2.1.7a8 8 0 0 1 2.6-1.5l.3-2.2h4.3l.3 2.2a8 8 0 0 1 2.6 1.5l2.1-.7 1.5 2.6-1.8 1.4c.1.5.15 1 .15 1.5z",
  bars: "M4 20V10m6 10V4m6 16v-7",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 8a7 7 0 0 1 14 0",
  folder: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18",
  wrench: "M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4L21 6l-3-3-3.3 3.3z",
  chart: "M4 19V9m6 10V5m6 14v-6",
  lock: "M6 11V8a6 6 0 0 1 12 0v3m-13 0h14v9H5v-9z",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11.2c.6.4 1 1 1 1.8v.5h4v-.5c0-.8.4-1.4 1-1.8A6 6 0 0 0 12 3z",
  mail: "M4 6h16v12H4V6zm0 0l8 7 8-7",
  eye: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  whatsapp: "M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3zm5 12.4c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.3-1-2.5s.6-1.8.8-2c.2-.2.5-.3.6-.3h.5c.1 0 .3 0 .5.4l.7 1.7c.1.2.1.3 0 .5l-.3.4-.3.3c-.1.1-.2.3 0 .5.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.6-.7c.2-.2.3-.2.5-.1l1.5.7c.2.1.3.2.3.3.1.1.1.5-.1 1z",
  download: "M12 4v12m0 0l-4-4m4 4l4-4M4 20h16",
  chevron: "M9 6l6 6-6 6",
};

const nav = ["Home", "About", "Skills", "Projects"];

const features = [
  { icon: icons.shield, label: "Secure\nNetworks" },
  { icon: icons.cloud, label: "Reliable\nInfrastructure" },
  { icon: icons.gear, label: "Automate\n& Simplify" },
  { icon: icons.bars, label: "Data-Driven\nOperations" },
];

const process = [
  { icon: icons.globe, label: "Design" },
  { icon: icons.gear, label: "Implement" },
  { icon: icons.chart, label: "Monitor" },
  { icon: icons.lock, label: "Secure" },
  { icon: icons.bulb, label: "Improve" },
];

const skills = [
  { name: "Huawei", logo: "huawei" },
  { name: "Cisco", logo: "cisco" },
  { name: "H3C", logo: "" },
  { name: "MikroTik", logo: "mikrotik" },
  { name: "Fortinet", logo: "fortinet" },
  { name: "Aruba", logo: "" },
  { name: "UniFi", logo: "ubiquiti" },
  { name: "Juniper", logo: "junipernetworks" },
  { name: "Omada", logo: "" },
  { name: "Windows", logo: "" },
  { name: "Linux", logo: "linux" },
  { name: "SD-WAN", logo: "" },
  { name: "Firewall", logo: "" },
  { name: "VPN/IPSec", logo: "" },
  { name: "Monitoring", logo: "" },
  { name: "Automation", logo: "" },
];

const projects = [
  {
    title: "Enterprise SD-WAN Deployment",
    desc: "Huawei SD-WAN with iMaster NCE-Campus for HUB-DC and branch sites.",
    image: huaweiSdwanLogo,
    details: <>
      Enterprise Huawei SD-WAN implementation for <strong>PNMVC</strong>, connecting HUB-DC and multiple branch sites through a centralized <strong>iMaster NCE-Campus</strong> architecture.
    </>,
    work: [
      "SD-WAN Hub-and-Spoke architecture",
      "WAN & overlay network configuration",
      "VPN segmentation and routing",
      "ZTP-based branch deployment",
      "Intelligent Traffic Steering",
      "IPS, Antivirus & URL Filtering",
      "Centralized monitoring & network operations",
    ],
  },
  { title: "Network Observability Stack", desc: "Monitoring and logging for network visibility.", details: "A network monitoring and logging project focused on visibility into device health, alarms, and performance." },
  { title: "Network Automation", desc: "Tools for configuration, backup, and log analysis.", details: "Automation tooling for repeatable network configuration, backups, and log analysis." },
  { title: "Security & Access Control", desc: "Firewall, VPN, DNS filtering, and policy implementation.", details: "Network security work covering firewall policy, VPN access, DNS filtering, and access controls." },
];

export default function App() {
  const [showContact, setShowContact] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    const closeContactMenu = (event: PointerEvent) => {
      if (event.target instanceof Element && !event.target.closest(".connect-wrap")) {
        setShowContact(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowContact(false);
        setSelectedProject(null);
      }
    };

    document.addEventListener("pointerdown", closeContactMenu);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeContactMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <img className="logo-badge" src={gilangLogo} alt="Gilang Zakaria logo" />
          <div>
            <div className="logo-name">GILANG ZAKARIA</div>
            <div className="logo-role">NETWORK ENGINEER</div>
          </div>
        </div>
        <nav className="nav-links">
          {nav.map((item, i) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={i === 0 ? "active" : ""}>
              {item}
            </a>
          ))}
          <div className="connect-wrap nav-connect">
            <button className="nav-contact" onClick={() => setShowContact((v) => !v)} aria-expanded={showContact}>
              Contact
            </button>
            {showContact && (
              <div className="connect-menu">
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <Icon path={icons.whatsapp} /> WhatsApp
                </a>
                <a href={`mailto:${CONTACT.email}`}>
                  <Icon path={icons.mail} /> Email
                </a>
              </div>
            )}
          </div>
        </nav>
        <div className="search-box">
          <span>Better Networks<br />For A Brighter Tomorrow</span>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-left">
          <p className="wave">👋 Hello, I'm</p>
          <h1>
            Gilang <span className="accent">Zakaria</span>
          </h1>
          <h2>Network Engineer</h2>
          <p className="hero-desc">
            I design and engineer network infrastructure built for <strong>performance, security, and resilience</strong>.
            From enterprise networks and SD-WAN to network security, observability, and automation, I turn complex
            infrastructure challenges into <strong>reliable and scalable solutions</strong>.
          </p>
          <div className="hero-buttons">
            <div className="connect-wrap">
              <button className="btn-primary" onClick={() => setShowContact((v) => !v)}>
                <Icon path={icons.mail} /> Let's Connect
              </button>
              {showContact && (
                <div className="connect-menu">
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon path={icons.whatsapp} /> WhatsApp
                  </a>
                  <a href={`mailto:${CONTACT.email}`}>
                    <Icon path={icons.mail} /> Email
                  </a>
                </div>
              )}
            </div>
            <a
              className="btn-primary"
              href="/resume.pdf#toolbar=0&navpanes=0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View resume in a new tab"
            >
              <Icon path={icons.eye} /> Resume
            </a>
          </div>
          <div className="feature-row">
            {features.map((f) => (
              <div className="feature" key={f.label}>
                <Icon path={f.icon} />
                <span>{f.label.split("\n").map((l) => <div key={l}>{l}</div>)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-placeholder">
            <img src={portrait} alt="Gilang Zakaria" />
          </div>
          <blockquote>
            "Networks Connect People,
            <br />
            And People Build Opportunities."
          </blockquote>
          <ul className="process-list">
            {process.map((p) => (
              <li key={p.label}>
                <Icon path={p.icon} /> {p.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="grid">
        {/* ABOUT */}
        <div className="card" id="about">
          <h3><Icon path={icons.user} /> About Me</h3>
          <p>
            I'm a <strong>Network Engineer</strong> passionate about building secure, reliable, and
            intelligent network infrastructure. I specialize in enterprise networking, SD-WAN,
            network security, observability, automation, and emerging technologies—transforming
            complex infrastructure challenges into scalable and efficient solutions.
          </p>
          <div className="about-meta">
            <span>📍 Indonesia</span>
          </div>
          <div className="about-meta">
            <span><Icon path={icons.bulb} /> Anime, Tech, Travel, Games</span>
          </div>
        </div>

        {/* SKILLS */}
        <div className="card" id="skills">
          <h3>
            <Icon path={icons.gear} /> Skills & Technologies
            <a className="see-all" href="#skills">See All <Icon path={icons.chevron} /></a>
          </h3>
          <div className="skills-grid">
            {skills.map(({ name, logo }) => (
              <div className="skill-chip" key={name}>
                {logo ? (
                  <img src={`https://cdn.simpleicons.org/${logo}`} alt="" loading="lazy" />
                ) : (
                  <span className={`skill-mark mark-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} aria-hidden="true">
                    {name === "Windows" ? (
                      <svg className="windows-mark" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M2 4.8 10.8 3.6v7.8H2V4.8Zm10.2-1.5L22 2v9.4h-9.8V3.3ZM2 12.8h8.8v7.8L2 19.4v-6.6Zm10.2 0H22v9.4l-9.8-1.3v-8.1Z" />
                      </svg>
                    ) : name === "H3C" ? "H3C" : name === "Automation" ? "↻" : name.slice(0, 1)}
                  </span>
                )}
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="card" id="projects">
          <h3>
            <Icon path={icons.folder} /> Featured Projects
            <a className="see-all" href="#projects">See All <Icon path={icons.chevron} /></a>
          </h3>
          <ul className="project-list">
            {projects.map((p) => (
              <li key={p.title}>
                <button className="project-item" onClick={() => setSelectedProject(p)}>
                  <span className="project-thumb" aria-hidden="true">
                    {"image" in p && <img src={p.image} alt="" />}
                  </span>
                  <span className="project-copy">
                    <strong>{p.title}</strong>
                    <span>{p.desc}</span>
                  </span>
                  <Icon path={icons.chevron} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <img className="footer-note" src={footerNote} alt="Keep Learning, Stay Curious, Build Better Networks." />
        <div className="footer-socials">
          <a href="https://www.instagram.com/gilangzakaria/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.5" cy="6.8" r="1" fill="currentColor" /></svg>
          </a>
          <a href="https://github.com/gilangzakaria39-art" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.2 3.2 1.56.1-.73.39-1.23.7-1.51-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.44.11-2.99 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.16 3.08-1.16.61 1.55.23 2.71.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/gilang-zakaria-b47a8b1b1/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9.5H7v11H3.4zM9.2 9.5h3.4V11h.1a3.8 3.8 0 0 1 3.4-1.9c3.6 0 4.3 2.3 4.3 5.3v6.1h-3.6v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.5H9.2z" /></svg>
          </a>
        </div>
        <img className="footer-right-note" src={footerRight} alt="Technology Connects the World. Engineers Keep It Running." />
      </footer>
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">×</button>
            <span className="project-modal-label">PROJECT DETAILS</span>
            <h2 id="project-modal-title">{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
            {"work" in selectedProject && selectedProject.work && (
              <>
                <h3 className="project-modal-subtitle">What I worked on</h3>
                <ul className="project-modal-list">
                  {selectedProject.work.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
