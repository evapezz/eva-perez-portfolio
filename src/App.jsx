import { useState } from 'react'

const developmentProjects = [
  {
    name: 'Agenda de Dragonas',
    description:
      'Aplicación full stack desarrollada como Proyecto Final del CFGS de Desarrollo de Aplicaciones Web. Una plataforma de apoyo para mujeres en tratamiento oncológico, con gestión de citas, diario, síntomas, estadísticas e interacción con profesionales.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT', 'Docker'],
    href: 'https://github.com/evapezz/agenda-dragonas',
    label: 'Proyecto Final · DAW',
    featured: true,
  },
  {
    name: 'Mi Dieta a la Carta',
    description:
      'Desarrollo de sitio web en WordPress con Elementor, trabajando la organización de contenidos, la adaptación responsive y la experiencia de usuario.',
    tech: ['WordPress', 'Elementor', 'Responsive', 'SEO'],
    href: 'https://midietalacarta.com',
    label: 'Desarrollo web',
  },
  {
    name: 'El Gourmet de la Abuela',
    description:
      'Proyecto web gastronómico realizado con WordPress y Elementor, con especial atención a la estructura de contenidos, navegación, responsive y posicionamiento.',
    tech: ['WordPress', 'Elementor', 'SEO', 'Contenidos'],
    href: 'https://elgourmetdelaabuela.com',
    label: 'Desarrollo web',
  },
  {
    name: 'Private Chef Barcelona',
    description:
      'Sitio web corporativo desarrollado con WordPress y Elementor para presentar servicios gastronómicos mediante una propuesta visual cuidada y orientada al cliente.',
    tech: ['WordPress', 'Elementor', 'Responsive', 'SEO'],
    image: '/images/private-chef-barcelona.png',
    label: 'Proyecto web · Archivo',
    archived: true,
  },
]

const digitalProjects = [
  {
    name: 'Centro de Documentación María Zambrano',
    organization: 'Instituto Andaluz de la Mujer · Junta de Andalucía',
    description:
      'Trabajo especializado en documentación, contenidos digitales y organización de información en el ámbito de mujeres y género.',
    image: '/images/maria-zambrano.png',
    href: 'https://www.juntadeandalucia.es/organismos/iam/areas/centros-observatorios/maria-zambrano.html',
    label: 'Documentación · Contenidos',
  },
  {
    name: 'Observatorio Andaluz de la Publicidad No Sexista',
    organization: 'Instituto Andaluz de la Mujer',
    description:
      'Trabajo de contenidos y documentación especializada, integrando perspectiva de género, análisis de información y comunicación digital.',
    image: '/images/observatorio-publicidad.png',
    href: 'https://www.juntadeandalucia.es/organismos/iam/areas/centros-observatorios/observatorio-publicidad.html',
    label: 'Contenidos · Igualdad',
  },
  {
    name: 'IAM 1989–2005 · Imágenes',
    organization: 'Instituto Andaluz de la Mujer',
    description:
      'Proyecto de recopilación, análisis documental y elaboración de contenidos para preservar y contextualizar la memoria gráfica del Instituto Andaluz de la Mujer.',
    image: '/images/iam-imagenes.png',
    label: 'Archivo · Documentación',
  },
  {
    name: 'Suburbia Regalos',
    organization: 'Granada',
    description:
      'Gestión de contenidos web, catálogo digital, SEO, comunicación, marketing y relación con clientes dentro de un proyecto comercial.',
    image: '/images/suburbia-regalos.png',
    label: 'Web · Contenidos · SEO',
  },
]

const stack = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'PHP',
  'Java',
  'MySQL',
  'Sequelize',
  'Docker',
  'Git',
  'HTML5',
  'CSS3',
  'WordPress',
]

function App() {
  const [modalImage, setModalImage] = useState(null)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span>Eva Pérez Pérez</span>
          <small>Desarrolladora web</small>
        </a>

        <nav aria-label="Navegación principal">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#trayectoria">Trayectoria</a>
          <a href="#stack">Stack</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-cta" href="#contacto">
          Hablemos ↗
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-index" aria-hidden="true">
            01
          </div>

          <div className="hero-copy">
            <p className="eyebrow">IDEAS · CÓDIGO · PERSONAS</p>

            <h1>
              Eva
              <span>Pérez Pérez</span>
            </h1>

            <p className="role">Desarrolladora Web</p>

            <p className="hero-lead">
              Desarrollo soluciones web completas, uniendo frontend y backend
              para crear experiencias digitales útiles, accesibles y con
              impacto real.
            </p>

            <p className="hero-secondary">
              Técnico Superior en Desarrollo de Aplicaciones Web (DAW), con un
              perfil multidisciplinar que combina desarrollo, usabilidad,
              accesibilidad y gestión de proyectos digitales.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#proyectos">
                Ver mis proyectos ↘
              </a>

              <a className="text-link" href="#sobre-mi">
                Conóceme más ↓
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="pastel-shape shape-a" />
            <div className="pastel-shape shape-b" />

            <figure className="photo-frame">
              <img
                src="/images/eva-infancia.png"
                alt="Fotografía de infancia de Eva"
              />
              <figcaption>
                Mis raíces también son parte del proceso.
              </figcaption>
            </figure>

            <p className="vertical-note">
              TECNOLOGÍA PARA UN MUNDO MÁS HUMANO
            </p>
          </div>
        </section>

        <section className="projects section" id="proyectos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">DESARROLLO WEB</p>
              <h2>Ideas que se convierten en producto digital.</h2>
            </div>

            <a
              className="text-link"
              href="https://github.com/evapezz"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>

          <div className="development-list">
            {developmentProjects.map((project, index) => (
              <article
                className={`development-project ${
                  project.featured ? 'featured-project' : ''
                }`}
                key={project.name}
              >
                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {project.image && !project.archived &&(
                  <div className="project-image">
                    <img src={project.image} alt={project.name} />
                  </div>
                )}

                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.label}</span>
                  </div>

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  <div className="tags">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  {project.href && (
                    <a
                      className="project-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver proyecto ↗
                    </a>
                  )}

                  {project.archived && (
                    <button
                      type="button"
                      className="project-link modal-link"
                      onClick={() => setModalImage(project.image)}
                    >
                      Ver captura del proyecto ↗
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="digital-work section" id="trayectoria">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TRAYECTORIA DIGITAL</p>
              <h2>Información, contenidos y tecnología.</h2>
            </div>

            <p className="section-intro">
              Antes de escribir código ya trabajaba construyendo experiencias
              digitales desde la información, los contenidos y las personas.
            </p>
          </div>

          <div className="digital-grid">
            {digitalProjects.map((project, index) => (
              <article className="digital-card" key={project.name}>
                <div className="digital-image">
                  <img src={project.image} alt={project.name} />
                </div>

                <div className="digital-card-content">
                  <span className="digital-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p className="digital-label">{project.label}</p>

                  <h3>{project.name}</h3>

                  <p className="organization">{project.organization}</p>

                  <p>{project.description}</p>

                  {project.href && (
                    <a
                      className="project-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver proyecto ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="stack-section section" id="stack">
          <div className="stack-title">
            <p className="eyebrow">MI STACK</p>
            <h2>Herramientas para construir mejores ideas.</h2>
          </div>

          <div className="stack-grid">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="about section" id="sobre-mi">
          <div className="about-title">
            <p className="eyebrow">SOBRE MÍ</p>
            <h2>Más que código, personas.</h2>
          </div>

          <div className="about-copy">
            <p className="about-lead">
              Me apasiona crear soluciones digitales que realmente mejoren la
              vida de las personas. Creo en una tecnología más inclusiva,
              accesible y con propósito.
            </p>

            <p>
              Mi trayectoria anterior en documentación, contenidos y gestión
              de proyectos digitales me aporta una perspectiva diferente como
              desarrolladora: entender la información, el contexto y a la
              persona que hay al otro lado de la pantalla antes de construir
              la solución.
            </p>

            <p>
              Ahora uno esa experiencia con el desarrollo frontend y backend
              para crear productos digitales útiles, comprensibles y bien
              construidos.
            </p>
          </div>

          <ul className="values">
            <li>
              <span>01</span>
              Desarrollo con propósito
            </li>
            <li>
              <span>02</span>
              Enfoque en las personas
            </li>
            <li>
              <span>03</span>
              Accesibilidad e inclusión
            </li>
            <li>
              <span>04</span>
              Aprendizaje continuo
            </li>
          </ul>
        </section>

        <section className="contact section" id="contacto">
          <p className="eyebrow">¿HABLAMOS?</p>

          <div className="contact-grid">
            <h2>Construyamos algo que merezca existir.</h2>

            <div>
              <p>
                Estoy abierta a nuevas oportunidades, colaboraciones y equipos
                en los que pueda seguir creciendo como desarrolladora y aportar
                una mirada multidisciplinar.
              </p>

              <a
                className="button primary"
                href="mailto:evapezzpezz@gmail.com"
              >
                Contacta conmigo ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="brand">
          <span>Eva Pérez Pérez</span>
          <small>Desarrolladora web</small>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/evapezz"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:evapezzpezz@gmail.com">Email</a>
        </div>

        <p>Granada · España</p>
      </footer>

      {modalImage && (
        <div
          className="image-modal"
          onClick={() => setModalImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Captura del proyecto Private Chef Barcelona"
        >
          <button
            type="button"
            className="modal-close"
            onClick={() => setModalImage(null)}
            aria-label="Cerrar imagen"
          >
            ×
          </button>

          <img
            src={modalImage}
            alt="Captura del proyecto Private Chef Barcelona"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default App