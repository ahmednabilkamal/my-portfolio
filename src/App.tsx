import { motion } from 'framer-motion';
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
                        {project.logoUrl ?? projectIcons[project.name] ? (
                          <img src={project.logoUrl ?? projectIcons[project.name]} alt="" />
                        ) : (
                          <span>{getProjectInitials(project.name)}</span>
                        )}
                      </div>
                      <div>
                        <h3>{project.name}</h3>
                        <p className="tagline">{project.tagline}</p>
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
                            className="store-link"
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>{link.label}</span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                    {project.stack ? (
                      <div className="chips">
                        {project.stack.map((item) => (
                          <span key={item}>{item}</span>
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
                <div className="contact-actions">
                  {portfolio.social.map((link) => (
                    <a key={link.label} className="btn ghost" href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                  <a className="btn primary" href={portfolio.cvUrl} target="_blank" rel="noreferrer">
                    Download CV
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}
