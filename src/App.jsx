import { useEffect, useState } from "react"
import cozyLogo from "./assets/cozy-designer-curtains-logo.png"
import "./App.css"

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    ),
    chevron: (
      <>
        <path d="m9 18 6-6-6-6" />
      </>
    ),
    detail: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M12 8v8M8 12h8" />
      </>
    ),
    fabric: (
      <>
        <path d="M6 3c2 3 2 15 0 18M12 3c2 3 2 15 0 18M18 3c2 3 2 15 0 18" />
      </>
    ),
    heart: (
      <>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    phone: (
      <>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    ruler: (
      <>
        <path d="m15 3 6 6L9 21l-6-6L15 3Z" />
        <path d="m14 6 2 2M11 9l2 2M8 12l2 2M5 15l2 2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.3 4.1L17 9l-3.7 1.9L12 15l-1.3-4.1L7 9l3.7-1.9L12 3ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14ZM19 14l.7 1.3L21 16l-1.3.7L19 18l-.7-1.3L17 16l1.3-.7L19 14Z" />
      </>
    ),
    star: (
      <>
        <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z" />
      </>
    ),
    tools: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4 4 0 0 0 5 5L20 16.4a2.1 2.1 0 0 1-3 3l-7.7-7.7a4 4 0 0 0-5 5L6.6 14 9 16.4l-2.3 2.3a4 4 0 0 0 5-5" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.3A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8 7.5c.5 4.3 3.8 7.3 8 8" />
      </>
    ),
    x: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const images = {
  // Base assets
  hero: "/photo/hero.jpg",
  blackout: "/photo/blackout.jpg",
  motorized: "/photo/motorized.jpg",
  blinds: "/photo/blinds.jpg",
  living: "/photo/living.jpg",
  bedroom: "/photo/bedroom.jpg",
  home: "/photo/home.jpg",
  warmBedroom: "/photo/warm-bedroom.jpg",
  neutralRoom: "/photo/neutral-room.jpg",

  // Real client installation photos from public/images
  patioPool: "/images/cozy-patio-pool.jpg",
  latticeDrape: "/images/cozy-lattice-drape.jpg",
  panoramicWave: "/images/cozy-panoramic-wave.jpg",
  curtainPleats: "/images/cozy-curtain-pleats.jpg",
  tallDrape: "/images/cozy-tall-drape.jpg",
}

const collections = [
  {
    title: "Luxury Drapery",
    desc: "Generous, sculptural folds tailored in richly textured fabrics.",
    image: images.latticeDrape,
    className: "collection-tall",
  },
  {
    title: "Sheer Curtains",
    desc: "Softly filtered daylight with an effortless, ethereal drape.",
    image: images.curtainPleats,
    className: "",
  },
  {
    title: "Blackout Curtains",
    desc: "Complete privacy and restful comfort in beautifully weighted cloth.",
    image: images.blackout,
    className: "",
  },
  {
    title: "Wave Curtains",
    desc: "Sculptural, uniform folds designed for clean contemporary spaces.",
    image: images.panoramicWave,
    className: "collection-wide",
  },
  {
    title: "Motorized Curtains",
    desc: "Quiet, seamless control designed around your daily rhythm.",
    image: images.motorized,
    className: "",
  },
  {
    title: "Custom Designer Curtains",
    desc: "One-of-a-kind compositions made precisely for your home.",
    image: images.tallDrape,
    className: "",
  },
]

const services = [
  ["Living Room Interiors", images.living],
  ["Bedroom Interiors", images.bedroom],
  ["Modern Home Interiors", images.home],
  ["False Ceiling & Lighting", images.neutralRoom],
  ["Wall Decor & Wallpapers", images.warmBedroom],
  ["Complete Home Renovation", images.patioPool],
]

const projects = [
  {
    title: "The Courtyard Residence",
    type: "CURTAINS · LIVING & PATIO",
    image: images.patioPool,
    className: "project-a",
  },
  {
    title: "Sculpted Serenity Suite",
    type: "BEDROOM INTERIOR",
    image: images.tallDrape,
    className: "project-b",
  },
  {
    title: "Lattice & Layered Drape",
    type: "BESPOKE DRAPERY",
    image: images.latticeDrape,
    className: "project-c",
  },
  {
    title: "Panoramic Wave Room",
    type: "PREMIUM INSTALLATION",
    image: images.panoramicWave,
    className: "project-d",
  },
  {
    title: "Tailored Sheer & Pleats",
    type: "MODERN APARTMENT",
    image: images.curtainPleats,
    className: "project-e",
  },
]

function SectionHeading({ eyebrow, title, intro, light = false }) {
  return (
    <div
      className={`section-heading reveal ${
        light ? "section-heading-light" : ""
      }`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [curtainOpening, setCurtainOpening] = useState(false)
  const [curtainComplete, setCurtainComplete] = useState(false)
  const [heroRevealed, setHeroRevealed] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    document.body.style.overflow = "hidden"
    const openTimer = window.setTimeout(
      () => setCurtainOpening(true),
      reducedMotion ? 80 : 850,
    )
    const revealTimer = window.setTimeout(
      () => setHeroRevealed(true),
      reducedMotion ? 130 : 2250,
    )
    const completeTimer = window.setTimeout(() => {
      setCurtainComplete(true)
      document.body.style.overflow = ""
    }, reducedMotion ? 450 : 3850)

    return () => {
      window.clearTimeout(openTimer)
      window.clearTimeout(revealTimer)
      window.clearTimeout(completeTimer)
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.13 },
    )
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element))
    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  const submitForm = (event) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
    window.setTimeout(() => setSent(false), 5000)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      {!curtainComplete && (
        <div
          className={`curtain-intro ${
            curtainOpening ? "curtain-opening" : ""
          }`}
          aria-hidden="true"
        >
          <div className="curtain-panel curtain-panel-left">
            <div className="curtain-fabric" />
          </div>
          <div className="curtain-panel curtain-panel-right">
            <div className="curtain-fabric" />
          </div>
        </div>
      )}
      <header
        className={`header ${scrolled || menuOpen ? "header-solid" : ""}`}
      >
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Cozy Designer Curtains home"
        >
          <img className="brand-logo" src={cozyLogo} alt="Cozy Curtains" />
          <span>
            <strong>COZY</strong>
            <small>DESIGNER CURTAINS</small>
          </span>
        </a>
        <nav
          className={`nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {[
            ["Home", "home"],
            ["Curtains", "curtains"],
            ["Interior Design", "interiors"],
            ["Our Projects", "projects"],
            ["About", "about"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a
            className="nav-mobile-cta"
            href="https://wa.me/919387006063"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            WhatsApp Consultation
          </a>
        </nav>
        <a
          className="header-cta"
          href="https://wa.me/919387006063"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="whatsapp" size={18} /> Free Consultation
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "x" : "menu"} size={25} />
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div
            className={`hero-image ${
              curtainOpening ? "hero-image-revealed" : ""
            }`}
            style={{ backgroundImage: `url(${images.hero})` }}
          />
          <div className="hero-overlay" />
          <div
            className={`hero-content ${
              heroRevealed ? "hero-content-revealed" : ""
            }`}
          >
            <div className="hero-rule" />
            <p className="hero-kicker">BESPOKE CURTAINS & INTERIOR DESIGN</p>
            <h1>
              Elegance Begins With
              <br />
              the Perfect <em>Curtains</em>
            </h1>
            <p className="hero-subtitle">
              Transform your windows. Elevate your living.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#curtains">
                Explore Curtain Collection <Icon name="arrow" />
              </a>
              <a
                className="button button-ghost"
                href="https://wa.me/919387006063"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Consultation
              </a>
            </div>
          </div>
          <a className="scroll-cue" href="#curtains">
            <span>DISCOVER</span>
            <i />
          </a>
          <div className="hero-credit">
            CURTAINS THAT FRAME
            <br />
            THE WAY YOU LIVE
          </div>
        </section>

        <section id="curtains" className="section collections-section">
          <div className="section-topline reveal">
            <span>01</span>
            <span>THE ART OF THE WINDOW</span>
          </div>
          <SectionHeading
            eyebrow="OUR SIGNATURE COLLECTIONS"
            title="Curtains, beautifully considered."
            intro="From the first sketch to the final fold, every detail is shaped around your light, your space, and the way you live."
          />
          <div className="collection-grid">
            {collections.map((item, index) => (
              <article
                className={`collection-card reveal ${item.className}`}
                key={item.title}
                style={{ transitionDelay: `${(index % 3) * 90}ms` }}
              >
                <img src={item.image} alt={item.title} />
                <div className="card-shade" />
                <span className="card-number">0{index + 1}</span>
                <div className="collection-copy">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href="#contact">
                    Explore Collection <Icon name="arrow" size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="center-action reveal">
            <a className="text-link" href="#contact">
              VIEW ALL WINDOW SOLUTIONS <Icon name="arrow" size={18} />
            </a>
          </div>
        </section>

        <section id="about" className="craft-section">
          <div className="craft-image reveal">
            <img src={images.patioPool} alt="Real Cozy Curtains bespoke installation" />
          </div>
          <div className="craft-copy reveal">
            <span className="eyebrow">MADE FOR YOUR HOME</span>
            <h2>
              The beauty is
              <br />
              in the <em>detail.</em>
            </h2>
            <p>
              We believe exceptional curtains begin with understanding how you
              live. Our designers bring fabric, proportion, texture and light
              together in a composition made only for you.
            </p>
            <div className="craft-points">
              <div>
                <span>01</span>
                <h4>In-home consultation</h4>
                <p>We visit, listen and thoughtfully measure your space.</p>
              </div>
              <div>
                <span>02</span>
                <h4>Curated fabric selection</h4>
                <p>Explore premium textures, colours and finishes.</p>
              </div>
              <div>
                <span>03</span>
                <h4>Precision installation</h4>
                <p>Installed with care for a flawless final drape.</p>
              </div>
            </div>
            <a
              className="button button-dark"
              href="https://wa.me/919387006063"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our Design Process <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section id="interiors" className="section services-section">
          <div className="section-topline reveal">
            <span>02</span>
            <span>BEYOND THE WINDOW</span>
          </div>
          <SectionHeading
            eyebrow="INTERIOR DESIGN SERVICES"
            title="A complete vision for your home."
            intro="Layered, timeless interiors that feel personal—not prescribed. From one beautiful room to a complete transformation."
          />
          <div className="services-grid">
            {services.map(([title, image], index) => (
              <a
                className="service-card reveal"
                href="#contact"
                key={title}
                style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              >
                <div className="service-image">
                  <img src={image} alt={title} />
                </div>
                <div className="service-title">
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <Icon name="arrow" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section projects-inner">
            <div className="section-topline reveal">
              <span>03</span>
              <span>SELECTED WORK</span>
            </div>
            <SectionHeading
              light
              eyebrow="FEATURED PROJECTS"
              title="Spaces with a story to tell."
              intro="A selection of homes transformed through material, light and a deeply considered point of view."
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <a
                  className={`project-card reveal ${project.className}`}
                  href="#contact"
                  key={project.title}
                >
                  <img src={project.image} alt={project.title} />
                  <div className="project-shade" />
                  <div className="project-info">
                    <span>{project.type}</span>
                    <h3>{project.title}</h3>
                  </div>
                </a>
              ))}
            </div>
            <div className="center-action reveal">
              <a className="text-link text-link-light" href="#contact">
                EXPLORE OUR PORTFOLIO <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="section-topline reveal">
            <span>04</span>
            <span>THE COZY DIFFERENCE</span>
          </div>
          <SectionHeading
            eyebrow="WHY CHOOSE US"
            title="Designed with intention. Delivered with care."
          />
          <div className="values-grid">
            {[
              [
                "ruler",
                "Customized Designs",
                "Every detail tailored to your windows, taste and lifestyle.",
              ],
              [
                "fabric",
                "Premium Materials",
                "Carefully sourced fabrics chosen for beauty and longevity.",
              ],
              [
                "tools",
                "Expert Installation",
                "Precise, respectful installation by our experienced team.",
              ],
              [
                "spark",
                "Design Consultation",
                "Personal guidance from concept and colour to final styling.",
              ],
              [
                "detail",
                "Attention to Detail",
                "Considered finishes and exacting craftsmanship at every step.",
              ],
              [
                "heart",
                "Customer Satisfaction",
                "A warm, transparent experience and results you will love.",
              ],
            ].map(([icon, title, desc], index) => (
              <div
                className="value reveal"
                key={title}
                style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              >
                <span className="value-icon">
                  <Icon name={icon} size={29} />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="consultation-banner">
          <div
            className="banner-bg"
            style={{ backgroundImage: `url(${images.panoramicWave})` }}
          />
          <div className="banner-overlay" />
          <div className="banner-content reveal">
            <span className="eyebrow">YOUR HOME, BEAUTIFULLY REIMAGINED</span>
            <h2>
              Let’s make your dream
              <br />
              space a <em>reality.</em>
            </h2>
            <p>
              From choosing the perfect curtains to designing beautiful
              interiors, we bring your vision to life.
            </p>
            <a
              className="button button-light"
              href="https://wa.me/919387006063"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Consultation <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="section testimonials-section">
          <div className="section-topline reveal">
            <span>05</span>
            <span>KIND WORDS</span>
          </div>
          <SectionHeading
            eyebrow="CLIENT STORIES"
            title="Homes loved. Details remembered."
          />
          <div className="testimonials-grid">
            {[
              [
                "“From the first fabric consultation to installation, every detail felt effortless. Our living room is completely transformed.”",
                "Maya & Daniel",
                "Full Home Curtains",
              ],
              [
                "“They understood the quiet, warm home we wanted and brought it to life better than we imagined. Truly exceptional.”",
                "Rhea Kapoor",
                "Interior Design",
              ],
              [
                "“Beautiful craftsmanship, patient guidance and an immaculate finish. The wave curtains are the highlight of our home.”",
                "Arjun Mehta",
                "Custom Curtains",
              ],
            ].map(([quote, name, service], index) => (
              <article
                className="testimonial reveal"
                key={name}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon name="star" size={14} key={star} />
                  ))}
                </div>
                <blockquote>{quote}</blockquote>
                <div className="testimonial-author">
                  <span>{name.charAt(0)}</span>
                  <div>
                    <strong>{name}</strong>
                    <small>{service}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-intro reveal">
            <span className="eyebrow">BEGIN YOUR PROJECT</span>
            <h2>
              A more beautiful home
              <br />
              starts with a <em>conversation.</em>
            </h2>
            <p>
              Tell us a little about your space. Our design team will be in
              touch to arrange your complimentary consultation.
            </p>
            <div className="contact-details">
              <a href="tel:+919387006063">
                <Icon name="phone" />
                <span>
                  <small>CALL US</small>+91 93870 06063
                </span>
              </a>
              <a
                href="https://wa.me/919387006063"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" />
                <span>
                  <small>WHATSAPP</small>Chat with Cozy Curtains
                </span>
              </a>
              <a
                href="https://www.instagram.com/cozycurtain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="instagram" />
                <span>
                  <small>INSTAGRAM</small>@cozycurtain
                </span>
              </a>
              <div>
                <Icon name="pin" />
                <span>
                  <small>LOCATION</small>Bespoke Curtains & Interior Solutions
                </span>
              </div>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={submitForm}>
            <div className="field">
              <label htmlFor="name">YOUR NAME</label>
              <input
                id="name"
                name="name"
                placeholder="How should we address you?"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="phone">PHONE NUMBER</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91"
                required
              />
            </div>
            <div className="field field-full">
              <label htmlFor="service">SERVICE REQUIRED</label>
              <select id="service" name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                <option>Custom Curtains</option>
                <option>Sheer & Wave Curtains</option>
                <option>Blinds & Window Treatments</option>
                <option>Interior Design</option>
                <option>Complete Home Renovation</option>
              </select>
            </div>
            <div className="field field-full">
              <label htmlFor="message">TELL US ABOUT YOUR SPACE</label>
              <textarea
                id="message"
                name="message"
                placeholder="Share what you have in mind..."
                rows={4}
              />
            </div>
            <button className="button button-dark form-submit" type="submit">
              Request a Consultation <Icon name="arrow" />
            </button>
            {sent && (
              <p className="success-message" role="status">
                <Icon name="check" size={18} /> Thank you. Our design team will
                be in touch shortly.
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <img className="brand-logo footer-logo" src={cozyLogo} alt="Cozy Curtains" />
              <span>
                <strong>COZY</strong>
                <small>DESIGNER CURTAINS</small>
              </span>
            </a>
            <p>
              Bespoke curtains and thoughtfully designed interiors for homes
              with a story.
            </p>
            <div className="socials">
              <a
                href="https://www.instagram.com/cozycurtain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon name="instagram" />
              </a>
              <a
                href="https://wa.me/919387006063"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Icon name="whatsapp" />
              </a>
              <a href="tel:+919387006063" aria-label="Phone">
                <Icon name="phone" />
              </a>
            </div>
          </div>
          <div>
            <h4>EXPLORE</h4>
            <a href="#home">Home</a>
            <a href="#about">Our Story</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>CURTAINS</h4>
            <a href="#curtains">Sheer Curtains</a>
            <a href="#curtains">Wave Curtains</a>
            <a href="#curtains">Luxury Drapery</a>
            <a href="#curtains">Blackout Curtains</a>
          </div>
          <div>
            <h4>INTERIORS</h4>
            <a href="#interiors">Living Rooms</a>
            <a href="#interiors">Bedrooms</a>
            <a href="#interiors">Home Renovation</a>
            <a href="#interiors">Lighting & Decor</a>
          </div>
          <div className="footer-contact">
            <h4>DIRECT INQUIRIES</h4>
            <p>
              Cozy Designer Curtains
              <br />
              Custom Tailored Window Fashion
            </p>
            <p>Direct WhatsApp & Calling</p>
            <a href="tel:+919387006063">+91 93870 06063</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 COZY DESIGNER CURTAINS. ALL RIGHTS RESERVED.</span>
          <span>PRIVACY · TERMS</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
