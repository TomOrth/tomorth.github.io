import { useEffect } from "react";

type Impact = {
  metric: string;
  label: string;
  summary: string;
  detail: string;
};

type Role = {
  period: string;
  company: string;
  title: string;
  summary: string;
};

const impacts: Impact[] = [
  {
    metric: "$185M",
    label: "projected savings",
    summary: "Deep research for asset sustainment",
    detail:
      "Leading an enterprise research platform that combines retrieval-augmented generation and Text2SQL to improve high-stakes fleet decisions.",
  },
  {
    metric: "$44M",
    label: "estimated annual savings",
    summary: "Agentic proposal workflows",
    detail:
      "Led automation that turns dense source material into key proposal artifacts, compressing time-to-first-draft from hours to minutes.",
  },
  {
    metric: "90%",
    label: "less research overhead",
    summary: "Full-stack agentic research",
    detail:
      "Built a research application with product, design, and engineering partners to automate interviews and accelerate evidence synthesis.",
  },
  {
    metric: "100K+",
    label: "lines of code analyzed",
    summary: "Code intelligence at mission scale",
    detail:
      "Built knowledge-graph and LLM tooling to analyze, document, and modernize complex legacy software systems.",
  },
];

const roles: Role[] = [
  {
    period: "2025 — now",
    company: "Lockheed Martin",
    title: "Senior AI Engineer",
    summary:
      "Leading 0→1 agentic AI initiatives across code intelligence, research, security, and enterprise workflow automation.",
  },
  {
    period: "2026 — now",
    company: "Civil Rights Litigation Clearinghouse",
    title: "AI Engineer",
    summary:
      "Developing an AI platform that helps law students review court records and produce structured case documentation.",
  },
  {
    period: "2021 — 2025",
    company: "Lockheed Martin",
    title: "Machine Learning Engineer → Senior ML Engineer",
    summary:
      "Progressed from edge microservices to production ML platforms, reusable AI libraries, and technical leadership across applied R&D.",
  },
];

const capabilities = [
  ["01", "Agentic systems", "Orchestration, evaluation, tool use"],
  ["02", "Deep research", "RAG, Text2SQL, knowledge graphs"],
  ["03", "Production AI", "Platforms, MLOps, full-stack delivery"],
  ["04", "Technical leadership", "0→1 execution, responsible adoption"],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "arrow arrow--diagonal" : "arrow"}
      viewBox="0 0 24 24"
    >
      <path d={diagonal ? "M5 19 19 5M8 5h11v11" : "M4 12h16M14 6l6 6-6 6"} />
    </svg>
  );
}

function AgentGraph() {
  return (
    <svg
      className="agent-graph"
      viewBox="0 0 760 620"
      role="img"
      aria-labelledby="agent-graph-title agent-graph-desc"
    >
      <title id="agent-graph-title">Agentic AI system map</title>
      <desc id="agent-graph-desc">
        A central agent orchestrator connects planning, memory, tools, data,
        evaluation, users, and outcomes.
      </desc>
      <g className="graph-orbits">
        <path d="M380 310C250 120 90 110 92 260s180 178 288 50" />
        <path d="M380 310C514 114 696 104 666 270S492 464 380 310" />
        <path d="M380 310C250 498 96 486 120 348S270 214 380 310" />
        <path d="M380 310C532 496 682 462 646 354S492 216 380 310" />
        <path d="M380 310c-88-70-80-208 0-232 80 24 88 162 0 232Z" />
        <path d="M380 310c-86 84-58 206 22 226 70-40 58-164-22-226Z" />
      </g>
      <g className="graph-links">
        <path d="M380 310 188 166" />
        <path d="M380 310 388 86" />
        <path d="M380 310 584 166" />
        <path d="M380 310 650 330" />
        <path d="M380 310 546 490" />
        <path d="M380 310 230 500" />
        <path d="M380 310 112 340" />
      </g>
      <g className="graph-nodes">
        <g transform="translate(380 310)">
          <circle r="65" className="graph-core" />
          <circle r="55" className="graph-core-inner" />
          <text textAnchor="middle" y="-4">AGENT</text>
          <text textAnchor="middle" y="16">ORCHESTRATOR</text>
        </g>
        {[
          { x: 188, y: 166, name: "PLANNING", note: "decompose / reason" },
          { x: 388, y: 86, name: "MEMORY", note: "context / retrieve" },
          { x: 584, y: 166, name: "TOOLS", note: "connect / act" },
          { x: 650, y: 330, name: "USERS", note: "operate / decide" },
          { x: 546, y: 490, name: "OUTCOMES", note: "measure / learn" },
          { x: 230, y: 500, name: "EVALUATION", note: "quality / safety" },
          { x: 112, y: 340, name: "DATA", note: "ingest / ground" },
        ].map((node) => (
          <g key={node.name} transform={`translate(${node.x} ${node.y})`}>
            <circle r="11" className="graph-dot-ring" />
            <circle r="4" className="graph-dot" />
            <text className="graph-label" x="18" y="-3">
              {node.name}
            </text>
            <text className="graph-note" x="18" y="14">
              {node.note}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function ResearchSystem() {
  const stages = [
    ["01", "RETRIEVE", "Relevant context"],
    ["02", "REASON", "Synthesis & logic"],
    ["03", "VERIFY", "Evidence & evaluation"],
    ["04", "ACT", "Output & decision"],
  ];

  return (
    <div className="research-system" aria-label="Agent workflow diagram">
      <div className="system-flow-label">QUERY / OBJECTIVE</div>
      <div className="stage-row">
        {stages.map(([number, title, description], index) => (
          <div className="stage-wrap" key={title}>
            <div className="stage">
              <span className="stage-number">{number}</span>
              <span className="stage-title">{title}</span>
            </div>
            <span className="stage-description">{description}</span>
            {index < stages.length - 1 ? (
              <span className="stage-connector" aria-hidden="true">
                <Arrow />
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="knowledge-base">
        <span>VECTOR STORE</span>
        <span>DOCUMENTS</span>
        <span>KNOWLEDGE GRAPH</span>
        <span>CODE INDEX</span>
      </div>
      <div className="feedback-line">
        <span>KNOWLEDGE BASE + EVALUATION LOOP</span>
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Thomas Orth, home">
          TO<span>/</span>AI
        </a>
        <nav aria-label="Primary navigation">
          <a href="#impact">Impact</a>
          <a href="#systems">Systems</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:torth212@gmail.com">
          Start a conversation <Arrow diagonal />
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow hero-enter hero-enter--1">
              Senior AI Engineer / Systems Builder
            </p>
            <h1 className="hero-name hero-enter hero-enter--2">
              <span>Thomas</span>
              <span>Orth</span>
            </h1>
            <div className="hero-statement hero-enter hero-enter--3">
              <p>
                Building agentic systems with{" "}
                <em>enterprise-scale impact.</em>
              </p>
              <a className="text-link" href="#impact">
                Explore selected impact <Arrow />
              </a>
            </div>
          </div>
          <div className="hero-visual hero-enter hero-enter--4">
            <AgentGraph />
          </div>
          <div className="hero-footer hero-enter hero-enter--4">
            <span>Agentic systems</span>
            <span>Applied intelligence</span>
            <span>Measurable outcomes</span>
          </div>
        </section>

        <section className="impact section-shell" id="impact">
          <header className="section-heading" data-reveal>
            <p className="section-index">01 / Selected impact</p>
            <h2>
              AI that moves
              <br />
              <em>the real world.</em>
            </h2>
            <p>
              From research prototypes to enterprise platforms, I build
              systems measured by what they change.
            </p>
          </header>

          <div className="impact-list">
            {impacts.map((impact, index) => (
              <article
                className="impact-row"
                data-reveal
                key={impact.metric}
                style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}
              >
                <div className="impact-number">
                  <span>{impact.metric}</span>
                  <small>{impact.label}</small>
                </div>
                <h3>{impact.summary}</h3>
                <p>{impact.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="systems" id="systems">
          <div className="systems-title" data-reveal>
            <p className="section-index">02 / How I build</p>
            <h2>
              Agentic systems.
              <br />
              Applied intelligence.
              <br />
              <em>Measurable outcomes.</em>
            </h2>
            <p>
              Useful AI is a system—not a model demo. It needs grounded
              context, purposeful orchestration, rigorous evaluation, and a
              path into real workflows.
            </p>
          </div>

          <div className="systems-diagram" data-reveal>
            <ResearchSystem />
          </div>

          <div className="capability-index">
            {capabilities.map(([number, title, detail]) => (
              <div className="capability" data-reveal key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <small>{detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="experience section-shell" id="experience">
          <header className="section-heading section-heading--compact" data-reveal>
            <p className="section-index">03 / Experience</p>
            <h2>
              Building depth.
              <br />
              Expanding scope.
            </h2>
          </header>

          <div className="role-list">
            {roles.map((role) => (
              <article className="role" data-reveal key={`${role.company}-${role.title}`}>
                <time>{role.period}</time>
                <div>
                  <p>{role.company}</p>
                  <h3>{role.title}</h3>
                </div>
                <p>{role.summary}</p>
              </article>
            ))}
          </div>

          <div className="education" data-reveal>
            <div>
              <span>Education</span>
              <strong>Georgia Institute of Technology</strong>
              <p>MS Computer Science, Artificial Intelligence · GPA 4.0</p>
            </div>
            <div>
              <span>Foundation</span>
              <strong>The College of New Jersey</strong>
              <p>BS Computer Science</p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="portrait-wrap" data-reveal>
            <img
              src="/assets/thomas-orth.jpg"
              alt="Thomas Orth"
              width="1430"
              height="1430"
              loading="lazy"
            />
            <span>Thomas Orth / Senior AI Engineer</span>
          </div>

          <div className="contact-copy" data-reveal>
            <p className="section-index">04 / Contact</p>
            <h2>
              Let’s build what
              <br />
              <em>comes next.</em>
            </h2>
            <p>
              I’m always interested in thoughtful conversations about
              ambitious AI systems, technical leadership, and applied
              research.
            </p>
            <a className="contact-email" href="mailto:torth212@gmail.com">
              torth212@gmail.com <Arrow diagonal />
            </a>
            <div className="social-links">
              <a href="https://github.com/TomOrth" rel="noreferrer" target="_blank">
                GitHub <Arrow diagonal />
              </a>
              <a
                href="https://www.linkedin.com/in/tomorth/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn <Arrow diagonal />
              </a>
              <a href="/Thomas-Orth-Resume.pdf" rel="noreferrer" target="_blank">
                Résumé <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Thomas Orth</span>
        <span>Designed for clarity. Built for impact.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
