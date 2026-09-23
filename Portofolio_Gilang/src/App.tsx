import { useState } from "react";
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
  whatsapp: "M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3zm5 12.4c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.3-1-2.5s.6-1.8.8-2c.2-.2.5-.3.6-.3h.5c.1 0 .3 0 .5.4l.7 1.7c.1.2.1.3 0 .5l-.3.4-.3.3c-.1.1-.2.3 0 .5.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.6-.7c.2-.2.3-.2.5-.1l1.5.7c.2.1.3.2.3.3.1.1.1.5-.1 1z",
  download: "M12 4v12m0 0l-4-4m4 4l4-4M4 20h16",
  chevron: "M9 6l6 6-6 6",
};

const nav = ["Home", "About", "Skills", "Projects", "Experience", "Blog", "Contact"];

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
  { name: "H3C", logo: "h3c" },
  { name: "MikroTik", logo: "mikrotik" },
  { name: "Fortinet", logo: "fortinet" },
  { name: "Aruba", logo: "arubanetworks" },
  { name: "UniFi", logo: "ubiquiti" },
  { name: "Juniper", logo: "junipernetworks" },
  { name: "Omada", logo: "tp-link" },
  { name: "Windows", logo: "windows" },
  { name: "Linux", logo: "linux" },
  { name: "SD-WAN", logo: "" },
  { name: "Firewall", logo: "" },
  { name: "VPN/IPSec", logo: "" },
  { name: "Monitoring", logo: "" },
  { name: "Automation", logo: "" },
];

const projects = [
  { title: "Enterprise SD-WAN Deployment", desc: "SD-WAN dengan banyak cabang dan manajemen terpusat." },
  { title: "Network Observability Stack", desc: "Monitoring dan logging jaringan." },
  { title: "Network Automation", desc: "Tools otomasi konfigurasi, backup, dan analisa log." },
  { title: "Security & Access Control", desc: "Firewall, VPN, DNS filtering, dan kebijakan akses." },
];

export default function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-badge">GZ</span>
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
            Passionate about building secure, reliable, and efficient networks. Experienced
            in enterprise networking, SD-WAN, security, and infrastructure, with a strong
            interest in automation, observability, and emerging technologies.
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
            <button className="btn-secondary">
              <Icon path={icons.download} /> Download CV
            </button>
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
            <span>Foto kamu di sini</span>
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
            I'm a network engineer based in Indonesia, currently working at PT Permodalan
            Nasional Madani Venture Capital (PNMVC). I enjoy solving complex network
            challenges, exploring new technologies, and building practical solutions that
            make IT infrastructure more secure, efficient, and future-ready.
          </p>
          <div className="about-meta">
            <span>📍 Indonesia</span>
            <span>💼 PNMVC Group</span>
          </div>
          <div className="about-meta">
            <span>❤️ Anime, Tech, Travel, Games</span>
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
                  <span className="skill-mark" aria-hidden="true">{name.slice(0, 1)}</span>
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
                <div className="project-thumb" />
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.desc}</p>
                </div>
                <Icon path={icons.chevron} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <p className="footer-quote">
          "Keep Learning,
          <br />
          Stay Curious,
          <br />
          Build Better Networks."
        </p>
        <div className="footer-socials">
          <a href="#" aria-label="GitHub">GH</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="YouTube">YT</a>
          <a href="#" aria-label="X">X</a>
        </div>
        <p className="footer-tagline">
          Technology Connects the World.
          <br />
          Engineers Keep It Running.
        </p>
      </footer>
    </div>
  );
}
