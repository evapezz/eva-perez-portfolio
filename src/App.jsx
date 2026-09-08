const projects = [
  {
    name: 'Agenda de Dragonas',
    description: 'Aplicación full stack orientada a la gestión de citas, diario, síntomas, estadísticas e interacción entre usuarias y profesionales.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Docker'],
    href: 'https://github.com/evapezz/agenda-dragonas',
    label: 'Proyecto full stack',
  },
  {
    name: 'Mi Dieta a la Carta',
    description: 'Proyecto web para crear experiencias digitales claras, útiles y adaptadas a necesidades reales.',
    tech: ['Frontend', 'UX', 'Responsive'],
    href: 'https://midietalacarta.com',
    label: 'Proyecto web',
  },
  {
    name: 'El Gourmet de la Abuela',
    description: 'Proyecto digital centrado en contenidos gastronómicos, estructura de información y experiencia de usuario.',
    tech: ['Web', 'Contenido', 'SEO'],
    href: 'https://elgourmetdelaabuela.com',
    label: 'Proyecto web',
  },
  {
    name: 'Private Chef Barcelona',
    description: 'Web corporativa para presentar servicios gastronómicos con una experiencia visual cuidada y orientada a cliente.',
    tech: ['Web', 'Responsive', 'SEO'],
    href: 'https://privatechefbarcelona.com',
    label: 'Proyecto web',
  },
]

const stack = ['JavaScript','React','Node.js','Express','PHP','Java','MySQL','Sequelize','Docker','Git','HTML5','CSS3']

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span>Eva Pérez Pérez</span><small>Desarrolladora web</small>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#sobre-mi">Sobre mí</a><a href="#proyectos">Proyectos</a><a href="#stack">Stack</a><a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="#contacto">Hablemos ↗</a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-index" aria-hidden="true">01</div>
          <div className="hero-copy">
            <p className="eyebrow">IDEAS · CÓDIGO · PERSONAS</p>
            <h1>Eva<span>Pérez Pérez</span></h1>
            <p className="role">Desarrolladora Web</p>
            <p className="hero-lead">Desarrollo soluciones web completas, uniendo frontend y backend para crear experiencias digitales útiles, accesibles y con impacto real.</p>
            <p className="hero-secondary">Técnico Superior en Desarrollo de Aplicaciones Web (DAW), con un perfil multidisciplinar que combina desarrollo, usabilidad, accesibilidad y gestión de proyectos digitales.</p>
            <div className="hero-actions">
              <a className="button primary" href="#proyectos">Ver mis proyectos ↘</a>
              <a className="text-link" href="#sobre-mi">Conóceme más ↓</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="pastel-shape shape-a"/><div className="pastel-shape shape-b"/>
            <figure className="photo-frame">
              <img src="/images/eva-infancia.png" alt="Fotografía de infancia de Eva" />
              <figcaption>Mis raíces también son parte del proceso.</figcaption>
            </figure>
            <p className="vertical-note">TECNOLOGÍA PARA UN MUNDO MÁS HUMANO</p>
          </div>
        </section>

        <section className="projects section" id="proyectos">
          <div className="section-heading">
            <div><p className="eyebrow">PROYECTOS DESTACADOS</p><h2>Ideas que se convierten en realidad</h2></div>
            <a className="text-link" href="https://github.com/evapezz" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <div className="project-grid">
            {projects.map((project,index)=>(
              <a className={`project-card card-${index+1}`} href={project.href} target="_blank" rel="noreferrer" key={project.name}>
                <div className="project-meta"><span>{String(index+1).padStart(2,'0')}</span><span>{project.label}</span></div>
                <h3>{project.name}</h3><p>{project.description}</p>
                <div className="tags">{project.tech.map(item=><span key={item}>{item}</span>)}</div>
                <span className="project-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="stack-section section" id="stack">
          <div className="stack-title"><p className="eyebrow">MI STACK</p><h2>Herramientas para construir mejores ideas</h2></div>
          <div className="stack-grid">{stack.map(item=><span key={item}>{item}</span>)}</div>
        </section>

        <section className="about section" id="sobre-mi">
          <div className="about-title"><p className="eyebrow">SOBRE MÍ</p><h2>Más que código, personas</h2></div>
          <div className="about-copy">
            <p>Me apasiona crear soluciones digitales que realmente mejoren la vida de las personas. Creo en una tecnología más inclusiva, accesible y con propósito, donde el diseño, el desarrollo y la experiencia de usuario van de la mano.</p>
            <p>Soy una profesional curiosa, organizada y con ganas de seguir aprendiendo, colaborar en proyectos retadores y aportar valor en cada fase del proceso.</p>
          </div>
          <ul className="values"><li>Desarrollo con propósito</li><li>Enfoque en las personas</li><li>Accesibilidad e inclusión</li><li>Aprendizaje continuo</li></ul>
        </section>

        <section className="contact section" id="contacto">
          <p className="eyebrow">¿HABLAMOS?</p>
          <div className="contact-grid">
            <h2>Construyamos algo que merezca existir.</h2>
            <div><p>Estoy abierta a nuevas oportunidades, colaboraciones y equipos en los que pueda seguir creciendo como desarrolladora.</p><a className="button primary" href="mailto:evapezzpezz@gmail.com">Contacta conmigo ↗</a></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="brand"><span>Eva Pérez Pérez</span><small>Desarrolladora web</small></div>
        <div className="footer-links"><a href="https://github.com/evapezz" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:evapezzpezz@gmail.com">Email</a></div>
        <p>Granada · España</p>
      </footer>
    </>
  )
}

export default App
