import { motion } from 'framer-motion';
import { portfolio } from './data/portfolio';
import { Reveal } from './components/Reveal';
import { SectionHeading } from './components/SectionHeading';

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function App() {
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
                    Selected products and platforms delivered for mobile-first experiences.
                  </>
                }
              />
            </Reveal>
            <div className="projects-grid">
              {portfolio.projects.map((project, index) => (
                <Reveal key={project.name} delay={index * 0.03}>
                  <article className="project-card">
                    <div>
                      <h3>{project.name}</h3>
                      <p className="tagline">{project.tagline}</p>
                      <p className="description">{project.description}</p>
                    </div>
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
