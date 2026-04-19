import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolio } from './data/portfolio';
import { Reveal } from './components/Reveal';
import { SectionHeading } from './components/SectionHeading';
import { useAppleAppIcons } from './hooks/useAppleAppIcons';

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

function getProjectInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

function getProjectAvailability(storeLinks?: { label: string }[]) {
  const hasIos = storeLinks?.some((link) => link.label === 'iOS');
  const hasAndroid = storeLinks?.some((link) => link.label === 'Android');

  if (hasIos && hasAndroid) {
    return 'Available on iOS and Android';
  }

  if (hasIos) {
    return 'Available on iOS';
  }

  if (hasAndroid) {
    return 'Available on Android';
  }

  return 'Store links coming soon';
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

type ProjectLogoProps = {
  logoUrl?: string;
  fallbackText: string;
};

type StorePlatformIconProps = {
  label: string;
};

function getStorePlatformClass(label: string) {
  if (label === 'iOS') {
    return 'store-link ios';
  }

  if (label === 'Android') {
    return 'store-link android';
  }

  return 'store-link';
}

function ProjectLogo({ logoUrl, fallbackText }: ProjectLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (!logoUrl || hasError) {
    return <span>{fallbackText}</span>;
  }

  return (
    <img
      src={logoUrl}
      alt=""
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
    />
  );
}

function StorePlatformIcon({ label }: StorePlatformIconProps) {
  if (label === 'iOS') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M15.1 3.5c0 1-.4 2-1 2.7-.7.8-1.8 1.4-2.8 1.3-.1-1 .3-2 1-2.7.7-.8 1.8-1.4 2.8-1.3Zm3.5 13.3c-.4.9-.9 1.8-1.6 2.6-.9 1.1-1.8 2.3-3.2 2.3-1.3 0-1.7-.8-3.2-.8s-1.9.8-3.2.8c-1.3 0-2.2-1.2-3.2-2.3-1.8-2.1-3.2-5.9-1.3-8.8.9-1.4 2.5-2.2 4-2.2 1.3 0 2.5.9 3.2.9.7 0 2.1-1.1 3.6-.9.6 0 2.4.2 3.5 1.9-.1.1-2.1 1.2-2.1 3.7 0 3 2.6 4 2.7 4-.1.2-.4 1-.9 1.8Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === 'Android') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7.1 7.4 5.8 5.1a.5.5 0 1 1 .9-.5L8 6.9A8.6 8.6 0 0 1 12 6c1.4 0 2.8.3 4 .9l1.3-2.3a.5.5 0 1 1 .9.5l-1.3 2.3A6 6 0 0 1 20 12v6.2c0 .5-.4.8-.8.8h-.7v2.3a1.2 1.2 0 0 1-2.4 0V19h-1.4v2.3a1.2 1.2 0 0 1-2.4 0V19H11v2.3a1.2 1.2 0 0 1-2.4 0V19H7.2c-.5 0-.8-.3-.8-.8V12a6 6 0 0 1 3.1-4.6ZM9.3 10.2a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Zm5.4 0a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return <span>{label[0]}</span>;
}

export default function App() {
  const projectIcons = useAppleAppIcons(portfolio.projects);
  const totalProjects = portfolio.projects.length;
  const crossPlatformProjects = portfolio.projects.filter(
    (project) =>
      project.storeLinks?.some((link) => link.label === 'iOS') &&
      project.storeLinks?.some((link) => link.label === 'Android')
  ).length;
  const liveStoreLinks = portfolio.projects.reduce(
    (count, project) => count + (project.storeLinks?.length ?? 0),
    0
  );

  return (
    <div className="app">
      <header className="hero" id="top">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p className="eyebrow" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              {portfolio.location}
            </motion.p>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
              {portfolio.name}
            </motion.h1>
            <motion.p className="title" variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
              {portfolio.title}
            </motion.p>
            <motion.p className="summary" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
              {portfolio.summary}
            </motion.p>
            <motion.div className="hero-actions" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <a className="btn primary" href="#contact">
                Let’s Connect
              </a>
              <a className="btn ghost" href={portfolio.cvUrl} target="_blank" rel="noreferrer">
                Download CV
              </a>
              <a className="btn ghost" href={portfolio.social[1].href} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </motion.div>
          </motion.div>
          <motion.div className="hero-card" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="card-header">
              <p className="label">Contact</p>
              <div className="divider" />
            </div>
            <div className="card-body">
              <p className="value">{portfolio.phone}</p>
              <p className="value">{portfolio.email}</p>
              <div className="socials">
                {portfolio.social.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="card-footer">
              {portfolio.stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        <section className="section" id="experience">
          <div className="container">
            <Reveal>
              <SectionHeading
                title="Experience"
                description={
                  <>
                    Building reliable products across mobile, web, and cross-platform ecosystems.
                  </>
                }
              />
            </Reveal>
            <div className="timeline">
              {portfolio.experience.map((role, index) => (
                <Reveal key={role.company} delay={index * 0.05}>
                  <div className="timeline-card">
                    <div>
                      <h3>{role.role}</h3>
                      <p className="company">{role.company} · {role.location}</p>
                    </div>
                    <p className="period">{role.period}</p>
                    <ul>
                      {role.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="projects">
          <div className="container">
            <Reveal>
              <SectionHeading
                title="Projects"
                description={
                  <>
                    Published apps with direct store access for recruiters, product teams, and hiring managers.
                  </>
                }
              />
            </Reveal>
            <Reveal delay={0.05}>
              <div className="projects-overview">
                <div className="projects-overview-copy">
                  <p className="projects-kicker">Portfolio Highlights</p>
                  <h3>Live products with real distribution across the App Store and Google Play.</h3>
                  <p>
                    Each card includes direct store links so reviewers can validate shipped work instead
                    of reading generic project summaries.
                  </p>
                </div>
                <div className="projects-overview-stats">
                  <div className="overview-stat">
                    <strong>{totalProjects}</strong>
                    <span>Published apps</span>
                  </div>
                  <div className="overview-stat">
                    <strong>{crossPlatformProjects}</strong>
                    <span>Cross-platform releases</span>
                  </div>
                  <div className="overview-stat">
                    <strong>{liveStoreLinks}</strong>
                    <span>Direct store links</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="projects-grid">
              {portfolio.projects.map((project, index) => (
                <Reveal key={project.name} delay={index * 0.03}>
                  <article className="project-card">
                    <div className="project-card-top">
                      <div className="project-logo" aria-hidden="true">
                        <ProjectLogo
                          logoUrl={project.logoUrl ?? projectIcons[project.name]}
                          fallbackText={getProjectInitials(project.name)}
                        />
                      </div>
                      <div>
                        <h3>{project.name}</h3>
                      </div>
                    </div>
                    <div>
                      <p className="project-availability">{getProjectAvailability(project.storeLinks)}</p>
                      <p className="description">{project.description}</p>
                    </div>
                    {project.storeLinks?.length ? (
                      <div className="project-links">
                        {project.storeLinks.map((link) => (
                          <a
                            key={`${project.name}-${link.label}`}
                            className={getStorePlatformClass(link.label)}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${project.name} on ${link.label}`}
                            title={link.label}
                          >
                            <StorePlatformIcon label={link.label} />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <Reveal>
              <SectionHeading
                title="Skills"
                description={
                  <>
                    A balanced toolkit for mobile engineering, UI performance, and product delivery.
                  </>
                }
              />
            </Reveal>
            <div className="skills-grid">
              {portfolio.skills.map((group, index) => (
                <Reveal key={group.title} delay={index * 0.05}>
                  <div className="skill-card">
                    <h3>{group.title}</h3>
                    <div className="chips">
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="education">
          <div className="container">
            <Reveal>
              <SectionHeading
                title="Education"
                description={
                  <>
                    Academic foundation in computer science and software engineering.
                  </>
                }
              />
            </Reveal>
            <div className="education-grid">
              {portfolio.education.map((item) => (
                <Reveal key={item.degree}>
                  <div className="education-card">
                    <h3>{item.degree}</h3>
                    <p>{item.school}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <Reveal>
              <SectionHeading
                title="Contact"
                description={
                  <>
                    Let’s build the next mobile experience together.
                  </>
                }
              />
            </Reveal>
            <Reveal>
              <div className="contact-card">
                <div>
                  <h3>{portfolio.name}</h3>
                  <p className="contact-title">{portfolio.title}</p>
                </div>
                <div className="contact-details">
                  <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
                  <a href={`tel:${portfolio.phone.replace(/\s/g, '')}`}>{portfolio.phone}</a>
                  <p>{portfolio.location}</p>
                </div>
                <a className="contact-download" href={portfolio.cvUrl} target="_blank" rel="noreferrer">
                  <span className="contact-download-copy">
                    <strong>Download CV</strong>
                    <small>Open PDF resume</small>
                  </span>
                  <span className="contact-download-icon" aria-hidden="true">↗</span>
                </a>
                <div className="contact-actions">
                  {portfolio.social.map((link) => (
                    <a key={link.label} className="btn ghost" href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        <motion.button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Back to top</span>
          <motion.span
            className="back-to-top-icon"
            aria-hidden="true"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          >
            ↑
          </motion.span>
        </motion.button>
      </footer>
    </div>
  );
}
