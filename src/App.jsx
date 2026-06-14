import { useState, useEffect, useRef } from "react";

const skills = {
  "Machine Learning": [
    { name: "Scikit-Learn", level: 90 },
    { name: "TensorFlow", level: 85 },
    { name: "PyTorch", level: 82 },
    { name: "XGBoost", level: 88 },
    { name: "LightGBM", level: 85 },
  ],
  "Data Science": [
    { name: "Pandas", level: 95 },
    { name: "NumPy", level: 93 },
    { name: "Matplotlib", level: 88 },
    { name: "Seaborn", level: 85 },
    { name: "Jupyter", level: 92 },
  ],
  Backend: [
    { name: "Python", level: 96 },
    { name: "FastAPI", level: 90 },
    { name: "Django", level: 85 },
    { name: "Flask", level: 88 },
  ],
  Frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Next.js", level: 83 },
  ],
};

const projects = [
  {
    title: "Secure Haven Properties",
    desc: "A modern real estate listing platform for browsing, searching, and managing property listings with a clean, responsive interface.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "#6366F1",
    icon: "🏠",
    github: "https://github.com/Oliwash254/secure-haven-properties",
  },
  {
    title: "CI Vectorizer Pipeline",
    desc: "An automated CI/CD pipeline that vectorizes and embeds data for downstream machine learning and retrieval workflows.",
    tags: ["Python", "CI/CD", "Embeddings", "Automation"],
    color: "#06B6D4",
    icon: "⚙️",
    github: "https://github.com/Oliwash254/ci-vectorizer-pipeline",
  },
  {
    title: "Extrovert/Introvert Predictor",
    desc: "A machine learning classification model that predicts personality type — extrovert or introvert — from behavioral data.",
    tags: ["Python", "Scikit-Learn", "Pandas", "ML"],
    color: "#8B5CF6",
    icon: "🧠",
    github: "https://github.com/Oliwash254/Extrovert-introvert_predictor",
  },
  {
    title: "WalkThisWay",
    desc: "A navigation and fitness companion app for planning routes and tracking walking activity with an interactive map experience.",
    tags: ["React", "Next.js", "TypeScript", "Maps API"],
    color: "#10B981",
    icon: "🚶",
    github: "https://github.com/Oliwash254/walkthisway",
  },
];

const services = [
  {
    icon: "⚡",
    title: "AI & Machine Learning",
    items: ["Predictive Models", "Classification Systems", "Recommendation Engines"],
    price: "From $200",
  },
  {
    icon: "📈",
    title: "Data Science",
    items: ["Data Cleaning & EDA", "Statistical Analysis", "Visualization Reports"],
    price: "From $150",
  },
  {
    icon: "🌐",
    title: "Web Development",
    items: ["Full Stack Applications", "REST APIs", "Interactive Dashboards"],
    price: "From $300",
  },
  {
    icon: "📝",
    title: "Research Support",
    items: ["Technical Reports", "Documentation", "Academic Assistance"],
    price: "From $80",
  },
];

const timeline = [
  {
    year: "2023–Present",
    role: "Freelance Developer",
    place: "Remote",
    desc: "Delivering AI solutions, web development, data analysis, and technical writing for global clients.",
    color: "#6366F1",
  },
  {
    year: "2022",
    role: "IT Industrial Attachment",
    place: "Kitale Industries",
    desc: "Network support, system maintenance, user support, and database management.",
    color: "#8B5CF6",
  },
  {
    year: "2021",
    role: "CS Student",
    place: "University",
    desc: "Deep-diving into algorithms, data structures, AI fundamentals, and software engineering.",
    color: "#06B6D4",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Startup Founder",
    text: "Oliver built our recommendation engine in record time. The model performance exceeded every benchmark we set. Absolutely exceptional work.",
    avatar: "SC",
  },
  {
    name: "Dr. James Oloo",
    role: "Researcher",
    text: "Delivered a complete data analysis pipeline for my study. Clean code, clear documentation, and brilliant insights from the data.",
    avatar: "JO",
  },
  {
    name: "Maria Diaz",
    role: "Business Owner",
    text: "Our e-commerce platform now converts 40% better thanks to Oliver's redesign and performance work. Truly talented developer.",
    avatar: "MD",
  },
  {
    name: "Prof. Kwame Asante",
    role: "Academic Client",
    text: "Technical writing was precise, structured, and exactly what my publication needed. Will work with Oliver again.",
    avatar: "KA",
  },
];

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function TypeWriter({ texts }) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = texts[idx];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setIdx(i => (i + 1) % texts.length);
          setCharIdx(0);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx, texts]);
  return (
    <span style={{ color: "#6366F1" }}>
      {display}<span style={{ animation: "blink 1s step-end infinite", borderRight: "2px solid #6366F1" }}></span>
    </span>
  );
}

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13, color: "#94A3B8" }}>
        <span>{name}</span>
        <span style={{ color }}>{level}%</span>
      </div>
      <div style={{ background: "#1E293B", borderRadius: 8, height: 6, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          borderRadius: 8,
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          width: inView ? `${level}%` : "0%",
          transition: `width 1s ease ${delay}ms`,
        }} />
      </div>
    </div>
  );
}

function StatCard({ value, label, color }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);
  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value);
    const step = Math.ceil(num / 40);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, num);
      setCount(cur);
      if (cur >= num) clearInterval(t);
    }, 30);
    return () => clearInterval(t);
  }, [inView, value]);
  return (
    <div ref={ref} style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 16,
      padding: "20px 24px",
      textAlign: "center",
      backdropFilter: "blur(8px)",
    }}>
      <div style={{ fontSize: 32, fontWeight: 800, color, fontFamily: "'Syne', sans-serif" }}>{count}{value.includes("+") ? "+" : value.includes("%") ? "%" : ""}</div>
      <div style={{ fontSize: 12, color: "#64748B", marginTop: 4, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}

function NavDot({ active, label, onClick }) {
  return (
    <button
      onClick={onClick}
      title={label}
      style={{
        display: "flex", alignItems: "center", gap: 10, background: "none", border: "none",
        cursor: "pointer", padding: "8px 0", color: active ? "#6366F1" : "#475569",
        transition: "color 0.2s",
      }}
    >
      <div style={{
        width: active ? 24 : 8, height: 8, borderRadius: 4,
        background: active ? "#6366F1" : "#334155",
        transition: "all 0.3s",
      }} />
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", opacity: active ? 1 : 0, transition: "opacity 0.3s" }}>{label}</span>
    </button>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeSkillCat, setActiveSkillCat] = useState("Machine Learning");
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const sections = ["home", "about", "skills", "projects", "services", "experience", "testimonials", "contact"];

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.4 });
    sections.forEach(s => { const el = document.getElementById(s); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", service: "", budget: "", message: "" });
  };

  const bg = "#0F172A";
  const surface = "rgba(15,23,42,0.95)";

  return (
    <div style={{ minHeight: "100vh", background: bg, position: "relative" }}>
      {/* Background grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(circle at 25% 10%, #6366F115 0%, transparent 50%), radial-gradient(circle at 75% 80%, #8B5CF615 0%, transparent 50%)`,
      }} />
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.03,
        backgroundImage: `linear-gradient(#6366F1 1px, transparent 1px), linear-gradient(90deg, #6366F1 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Sidebar nav dots — desktop */}
      <nav style={{
        position: "fixed", right: 24, top: "50%", transform: "translateY(-50%)",
        zIndex: 100, display: "flex", flexDirection: "column", gap: 4,
      }} className="desktop-nav">
        {sections.map(s => (
          <NavDot key={s} active={activeSection === s} label={s} onClick={() => scrollTo(s)} />
        ))}
      </nav>

      {/* Top Nav */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: "rgba(15,23,42,0.85)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em" }}>
          <span style={{ color: "#F8FAFC" }}>Oliver</span>
          <span style={{ color: "#6366F1" }}>.</span>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {["about", "skills", "projects", "services", "contact"].map(s => (
            <button key={s} className="nav-item"
              onClick={() => scrollTo(s)}
              style={{ background: "none", border: "none", color: "#64748B", fontSize: 13, fontWeight: 500, cursor: "pointer", padding: "8px 12px", textTransform: "capitalize", transition: "color 0.2s", letterSpacing: "0.02em" }}
            >{s}</button>
          ))}
          <button className="btn-primary" style={{ padding: "10px 20px", fontSize: 13, marginLeft: 8 }} onClick={() => scrollTo("contact")}>
            Hire Me
          </button>
        </div>
      </header>

      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ═══ HERO ═══ */}
        <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 24 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", animation: "pulse-glow 2s infinite" }} />
                <span style={{ fontSize: 12, color: "#6366F1", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Available for Work</span>
              </div>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
                Building{" "}
                <TypeWriter texts={["AI Solutions", "Intelligent Systems", "ML Models", "Data Pipelines", "Modern Apps"]} />
                <br />
                <span style={{ color: "#94A3B8", fontWeight: 600 }}>for the Future</span>
              </h1>
              <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
                I help businesses, researchers, and startups build machine learning solutions, scalable web applications, and data-driven products.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => scrollTo("contact")}>Hire Me →</button>
                <button className="btn-ghost" onClick={() => scrollTo("projects")}>View Projects</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 48 }}>
                {[
                  { value: "30+", label: "ML Projects", color: "#6366F1" },
                  { value: "25+", label: "Web Apps", color: "#8B5CF6" },
                  { value: "20+", label: "Data Projects", color: "#06B6D4" },
                  { value: "98%", label: "Satisfaction", color: "#10B981" },
                ].map(s => <StatCard key={s.label} {...s} />)}
              </div>
            </div>

            {/* Hero Visual */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div style={{ width: 380, height: 380, position: "relative" }}>
                {/* Outer ring */}
                <div style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  border: "1px solid rgba(99,102,241,0.15)",
                  animation: "spin-slow 20s linear infinite",
                }}>
                  {[0, 90, 180, 270].map(deg => (
                    <div key={deg} style={{
                      position: "absolute", width: 8, height: 8, borderRadius: "50%",
                      background: "#6366F1", top: "50%", left: "50%",
                      transform: `rotate(${deg}deg) translateX(188px) translateY(-50%)`,
                    }} />
                  ))}
                </div>
                {/* Inner ring */}
                <div style={{
                  position: "absolute", inset: 40, borderRadius: "50%",
                  border: "1px solid rgba(139,92,246,0.2)",
                  animation: "spin-slow 15s linear infinite reverse",
                }}>
                  {[45, 135, 225, 315].map(deg => (
                    <div key={deg} style={{
                      position: "absolute", width: 6, height: 6, borderRadius: "50%",
                      background: "#8B5CF6", top: "50%", left: "50%",
                      transform: `rotate(${deg}deg) translateX(148px) translateY(-50%)`,
                    }} />
                  ))}
                </div>
                {/* Center card */}
                <div style={{
                  position: "absolute", inset: 80, borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 0 60px #6366F155",
                  animation: "float 4s ease-in-out infinite",
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 48 }}>🤖</div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, marginTop: 4 }}>AI Dev</div>
                  </div>
                </div>
                {/* Floating chips */}
                {[
                  { text: "Python", x: -40, y: 60, color: "#6366F1" },
                  { text: "TensorFlow", x: 320, y: 80, color: "#8B5CF6" },
                  { text: "FastAPI", x: -50, y: 260, color: "#06B6D4" },
                  { text: "React", x: 310, y: 270, color: "#10B981" },
                ].map(chip => (
                  <div key={chip.text} style={{
                    position: "absolute", left: chip.x, top: chip.y,
                    background: "rgba(15,23,42,0.9)", border: `1px solid ${chip.color}33`,
                    borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 600,
                    color: chip.color, whiteSpace: "nowrap",
                    animation: `float ${3 + Math.random()}s ease-in-out infinite`,
                    backdropFilter: "blur(8px)",
                  }}>
                    {chip.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ABOUT ═══ */}
        <section id="about" style={{ padding: "100px 32px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <AnimatedSection>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, transparent, #6366F1)" }} />
                <span style={{ fontSize: 12, color: "#6366F1", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>About Me</span>
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 40 }}>
                Who is <span style={{ color: "#6366F1" }}>Oliver?</span>
              </h2>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "start" }}>
              <AnimatedSection>
                <p style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.8, marginBottom: 24 }}>
                  I'm a Computer Science professional passionate about building intelligent systems that solve real problems.
                  My work sits at the intersection of <strong style={{ color: "#F8FAFC" }}>AI, data science, and full-stack engineering</strong>.
                </p>
                <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.8, marginBottom: 32 }}>
                  From training neural networks to shipping production web apps, I bring an end-to-end mindset to every project.
                  I've worked with startups, researchers, and businesses across multiple industries.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {["Artificial Intelligence", "Machine Learning", "Data Science", "Full Stack Dev", "Automation"].map(tag => (
                    <span key={tag} style={{
                      background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)",
                      borderRadius: 8, padding: "6px 14px", fontSize: 13, color: "#6366F1", fontWeight: 500,
                    }}>{tag}</span>
                  ))}
                </div>
              </AnimatedSection>
              {/* Timeline */}
              <AnimatedSection delay={150}>
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: 15, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, #6366F1, #8B5CF6, transparent)" }} />
                  {timeline.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                      <div style={{
                        width: 30, height: 30, borderRadius: "50%",
                        background: item.color, flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 12, boxShadow: `0 0 16px ${item.color}55`,
                      }}>●</div>
                      <div>
                        <div style={{ fontSize: 11, color: item.color, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 4 }}>{item.year}</div>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{item.role}</div>
                        <div style={{ fontSize: 12, color: "#475569", marginBottom: 8 }}>{item.place}</div>
                        <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ═══ SKILLS ═══ */}
        <section id="skills" style={{ padding: "100px 32px", background: "rgba(255,255,255,0.01)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <AnimatedSection>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, transparent, #6366F1)" }} />
                <span style={{ fontSize: 12, color: "#6366F1", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Skills</span>
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 32 }}>
                Technical <span style={{ color: "#6366F1" }}>Arsenal</span>
              </h2>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
                {Object.keys(skills).map(cat => (
                  <button key={cat} className={`skill-tab ${activeSkillCat === cat ? "active" : ""}`} onClick={() => setActiveSkillCat(cat)}>{cat}</button>
                ))}
              </div>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
              <AnimatedSection>
                {skills[activeSkillCat].map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} color="#6366F1" delay={i * 100} />
                ))}
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { icon: "🐍", name: "Python", sub: "5+ years" },
                    { icon: "⚛️", name: "React", sub: "3+ years" },
                    { icon: "🔥", name: "PyTorch", sub: "2+ years" },
                    { icon: "🚀", name: "FastAPI", sub: "2+ years" },
                    { icon: "🗃️", name: "PostgreSQL", sub: "3+ years" },
                    { icon: "🐳", name: "Docker", sub: "2+ years" },
                  ].map(item => (
                    <div key={item.name} className="card-hover" style={{
                      background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: 12, padding: "16px", display: "flex", alignItems: "center", gap: 12,
                    }}>
                      <span style={{ fontSize: 24 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>{item.name}</div>
                        <div style={{ fontSize: 11, color: "#475569" }}>{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ═══ PROJECTS ═══ */}
        <section id="projects" style={{ padding: "100px 32px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <AnimatedSection>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, transparent, #6366F1)" }} />
                <span style={{ fontSize: 12, color: "#6366F1", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Projects</span>
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
                Featured <span style={{ color: "#6366F1" }}>Work</span>
              </h2>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
              {projects.map((p, i) => (
                <AnimatedSection key={p.title} delay={i * 80}>
                  <div className="card-hover" style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 20, overflow: "hidden", height: "100%",
                  }}>
                    {/* Project header */}
                    <div style={{
                      height: 120, background: `linear-gradient(135deg, ${p.color}22, ${p.color}08)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      borderBottom: `1px solid ${p.color}22`, position: "relative",
                    }}>
                      <span style={{ fontSize: 52 }}>{p.icon}</span>
                      <div style={{
                        position: "absolute", top: 12, right: 12,
                        background: `${p.color}22`, border: `1px solid ${p.color}44`,
                        borderRadius: 6, padding: "3px 8px", fontSize: 10, color: p.color, fontWeight: 600,
                      }}>FEATURED</div>
                    </div>
                    <div style={{ padding: "20px 24px 24px" }}>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{p.title}</h3>
                      <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                        {p.tags.map(t => (
                          <span key={t} style={{ background: "#1E293B", borderRadius: 6, padding: "3px 10px", fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: 10 }}>
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, padding: "10px 0", fontSize: 12, textDecoration: "none", textAlign: "center", display: "inline-block" }}>
                          View on GitHub →
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SERVICES ═══ */}
        <section id="services" style={{ padding: "100px 32px", background: "rgba(255,255,255,0.01)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <AnimatedSection>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, transparent, #6366F1)" }} />
                <span style={{ fontSize: 12, color: "#6366F1", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Services</span>
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
                What I <span style={{ color: "#6366F1" }}>Offer</span>
              </h2>
              <p style={{ fontSize: 16, color: "#64748B", marginBottom: 48, maxWidth: 500 }}>End-to-end solutions from ideation to deployment. Let's build something great together.</p>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
              {services.map((s, i) => (
                <AnimatedSection key={s.title} delay={i * 100}>
                  <div className="card-hover" style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 20, padding: "28px 24px", height: "100%",
                  }}>
                    <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, marginBottom: 14 }}>{s.title}</h3>
                    <ul style={{ listStyle: "none", marginBottom: 24 }}>
                      {s.items.map(item => (
                        <li key={item} style={{ fontSize: 13, color: "#64748B", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ color: "#6366F1", fontSize: 16 }}>›</span> {item}
                        </li>
                      ))}
                    </ul>
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#6366F1" }}>{s.price}</span>
                      <button className="btn-primary" style={{ padding: "8px 16px", fontSize: 12 }} onClick={() => scrollTo("contact")}>Get Quote</button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ EXPERIENCE ═══ */}
        <section id="experience" style={{ padding: "100px 32px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <AnimatedSection>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, transparent, #6366F1)" }} />
                <span style={{ fontSize: 12, color: "#6366F1", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Experience</span>
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
                Career <span style={{ color: "#6366F1" }}>Journey</span>
              </h2>
            </AnimatedSection>
            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div style={{ display: "flex", gap: 32, marginBottom: 40, position: "relative" }}>
                  {i < timeline.length - 1 && (
                    <div style={{ position: "absolute", left: 23, top: 48, width: 2, height: "calc(100% + 8px)", background: "linear-gradient(180deg, #6366F133, transparent)" }} />
                  )}
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}88)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: `0 0 20px ${item.color}44`, fontSize: 20,
                  }}>
                    {i === 0 ? "💻" : i === 1 ? "🏭" : "🎓"}
                  </div>
                  <div style={{
                    flex: 1, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 16, padding: "20px 24px",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700 }}>{item.role}</h3>
                      <span style={{ background: `${item.color}15`, border: `1px solid ${item.color}33`, borderRadius: 6, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 600 }}>{item.year}</span>
                    </div>
                    <div style={{ fontSize: 13, color: "#475569", marginBottom: 10, fontWeight: 500 }}>📍 {item.place}</div>
                    <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section id="testimonials" style={{ padding: "100px 32px", background: "rgba(255,255,255,0.01)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <AnimatedSection>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, transparent, #6366F1)" }} />
                <span style={{ fontSize: 12, color: "#6366F1", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Testimonials</span>
                <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, #6366F1, transparent)" }} />
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
                Client <span style={{ color: "#6366F1" }}>Voices</span>
              </h2>
            </AnimatedSection>
            <div style={{ position: "relative", minHeight: 220 }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{
                  position: i === testimonialIdx ? "relative" : "absolute",
                  opacity: i === testimonialIdx ? 1 : 0,
                  transform: i === testimonialIdx ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.5s ease",
                  pointerEvents: i === testimonialIdx ? "auto" : "none",
                  inset: 0,
                }}>
                  <div style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 24, padding: "36px 40px",
                  }}>
                    <p style={{ fontSize: 18, color: "#94A3B8", lineHeight: 1.7, marginBottom: 28, fontStyle: "italic" }}>
                      "{t.text}"
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: "50%",
                        background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 14,
                      }}>{t.avatar}</div>
                      <div style={{ textAlign: "left" }}>
                        <div style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                        <div style={{ fontSize: 12, color: "#475569" }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 24 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)} style={{
                  width: i === testimonialIdx ? 24 : 8, height: 8, borderRadius: 4,
                  background: i === testimonialIdx ? "#6366F1" : "#334155",
                  border: "none", cursor: "pointer", transition: "all 0.3s",
                }} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CONTACT ═══ */}
        <section id="contact" style={{ padding: "100px 32px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <AnimatedSection>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, transparent, #6366F1)" }} />
                <span style={{ fontSize: 12, color: "#6366F1", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Contact</span>
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
                Let's <span style={{ color: "#6366F1" }}>Work Together</span>
              </h2>
              <p style={{ fontSize: 16, color: "#64748B", marginBottom: 48, maxWidth: 500 }}>
                Have a project in mind? Let's discuss how I can bring your vision to life.
              </p>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48 }}>
              <AnimatedSection>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { icon: "📧", label: "Email", value: "shabanoliver40@gmail.com", href: "mailto:shabanoliver40@gmail.com" },
                    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/oliver-shaban-8a2605278", href: "https://www.linkedin.com/in/oliver-shaban-8a2605278" },
                    { icon: "🐙", label: "GitHub", value: "github.com/Oliwash254", href: "https://github.com/Oliwash254" },
                    { icon: "🌍", label: "Fiverr / Upwork", value: "@olivershaban" },
                  ].map(c => {
                    const Wrapper = c.href ? "a" : "div";
                    return (
                    <Wrapper key={c.label} href={c.href} target={c.href ? "_blank" : undefined} rel={c.href ? "noopener noreferrer" : undefined} style={{
                      display: "flex", gap: 16, alignItems: "center",
                      background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: 14, padding: "16px 20px",
                      textDecoration: "none", color: "inherit", cursor: c.href ? "pointer" : "default",
                      transition: "all 0.2s",
                    }} className={c.href ? "card-hover" : ""}>
                      <span style={{ fontSize: 24 }}>{c.icon}</span>
                      <div>
                        <div style={{ fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{c.label}</div>
                        <div style={{ fontSize: 14, color: "#94A3B8", fontWeight: 500 }}>{c.value}</div>
                      </div>
                    </Wrapper>
                    );
                  })}
                </div>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                {submitted ? (
                  <div style={{
                    background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: 20, padding: 40, textAlign: "center",
                  }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h3>
                    <p style={{ color: "#64748B" }}>I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <input placeholder="Your Name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                    <input placeholder="Email Address" type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
                    <select value={formData.service} onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}>
                      <option value="">Service Needed</option>
                      <option>AI & Machine Learning</option>
                      <option>Data Science</option>
                      <option>Web Development</option>
                      <option>Research Support</option>
                    </select>
                    <select value={formData.budget} onChange={e => setFormData(p => ({ ...p, budget: e.target.value }))}>
                      <option value="">Budget Range</option>
                      <option>$50–$200</option>
                      <option>$200–$500</option>
                      <option>$500–$1000</option>
                      <option>$1000+</option>
                    </select>
                    <textarea rows={4} placeholder="Tell me about your project..." value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} style={{ resize: "vertical" }} />
                    <button className="btn-primary" onClick={handleSubmit} style={{ padding: "16px", fontSize: 15 }}>
                      Send Message →
                    </button>
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ═══ FOOTER ═══ */}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "40px 32px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18 }}>
              Oliver<span style={{ color: "#6366F1" }}>.</span>
              <div style={{ fontSize: 12, color: "#475569", fontFamily: "'DM Sans', sans-serif", fontWeight: 400, marginTop: 4 }}>
                © 2026 Oliver Shaban — All rights reserved
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["home", "about", "skills", "projects", "contact"].map(s => (
                <button key={s} onClick={() => scrollTo(s)} style={{
                  background: "none", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8,
                  padding: "6px 14px", fontSize: 12, color: "#475569", cursor: "pointer",
                  transition: "all 0.2s", textTransform: "capitalize",
                }} className="nav-item">{s}</button>
              ))}
            </div>
            <div style={{ fontSize: 13, color: "#334155" }}>
              Built with React ⚡ & passion
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
