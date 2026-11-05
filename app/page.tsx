import {
  ArrowDownRight, ArrowUpRight, Cloud, Code2, GitBranch, Layers3,
  Mail, Server, ShieldCheck, Workflow, Wrench, Terminal
} from "lucide-react";

const skills = [
  { title: "CI/CD & Automation", items: ["Azure DevOps Pipelines", "YAML & Classic Releases", "Build & Release Automation", "Artifact Management"], icon: Workflow },
  { title: "Cloud & Infrastructure", items: ["Microsoft Azure", "Azure Key Vault", "Self-hosted Agents", "Deployment Groups"], icon: Cloud },
  { title: "Build & Deployment", items: [".NET Applications", "Microservices", "IIS Deployments", "PowerShell & Batch"], icon: Server },
  { title: "Quality & Security", items: ["SonarQube", "Pipeline Quality Gates", "Secrets Management", "Release Controls"], icon: ShieldCheck },
];

const projects = [
  {
    number: "01",
    title: "Multi-service CI/CD delivery",
    type: "PIPELINE ENGINEERING",
    description: "Designed and maintained build and release workflows for a multi-service .NET application. Standardised artifact creation and enabled controlled deployments across QA, UAT and Production.",
    stack: ["Azure DevOps", "Git / TFS", ".NET", "YAML", "Classic Releases"],
  },
  {
    number: "02",
    title: "IIS deployment automation",
    type: "RELEASE AUTOMATION",
    description: "Automated application package deployment to IIS environments, including file distribution, configuration handling and repeatable release steps.",
    stack: ["IIS", "PowerShell", "Windows Server", "Azure DevOps"],
  },
  {
    number: "03",
    title: "Secure pipeline configuration",
    type: "DEVSECOPS",
    description: "Integrated source-code analysis and centralised secret handling into delivery workflows to improve release consistency and reduce configuration risk.",
    stack: ["SonarQube", "Azure Key Vault", "CI/CD", "Security"],
  },
];

const process = [
  ["01", "Plan", "Understand requirements, environments and release dependencies."],
  ["02", "Build", "Compile, validate and package application services into versioned artifacts."],
  ["03", "Test", "Run quality checks and promote validated builds through environments."],
  ["04", "Deploy", "Release with controlled approvals, deployment automation and verification."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#home"><span className="brand-mark">D</span> DEVOPS<span className="brand-muted">.ENGINEER</span></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact" className="nav-cta">Contact <ArrowUpRight size={14}/></a>
        </div>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> AVAILABLE FOR THE NEXT CHALLENGE</div>
          <h1>Building reliable<br/><span>delivery pipelines.</span></h1>
          <p className="hero-lead">DevOps Engineer focused on CI/CD automation, Azure DevOps and dependable application deployments.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-ghost" href="#contact">Get in touch <ArrowDownRight size={17}/></a>
          </div>
          <div className="hero-meta"><span><i/> Azure DevOps</span><span><i/> CI/CD Automation</span><span><i/> Cloud & Release Engineering</span></div>
        </div>
        <div className="terminal-card">
          <div className="terminal-top"><div className="window-dots"><i/><i/><i/></div><span>deployment.yml</span><span className="terminal-status">● pipeline ready</span></div>
          <div className="terminal-body">
            <div className="code-line"><span className="ln">01</span><span className="purple">trigger:</span></div>
            <div className="code-line indent"><span className="green">- main</span></div>
            <div className="code-line"><span className="ln">03</span><span className="purple">stages:</span></div>
            <div className="code-line indent"><span className="blue">- stage:</span> <span className="orange">Build</span></div>
            <div className="code-line indent2"><span className="purple">jobs:</span></div>
            <div className="code-line indent2"><span className="blue">- job:</span> <span className="orange">CompileAndTest</span></div>
            <div className="code-line"><span className="ln">07</span><span className="purple">  - stage:</span> <span className="orange">Deploy</span></div>
            <div className="code-line indent2"><span className="purple">dependsOn:</span> <span className="green">Build</span></div>
            <div className="code-line indent2"><span className="purple">environment:</span> <span className="green">Production</span></div>
            <div className="terminal-divider"/>
            <div className="pipeline-result"><span className="check">✓</span><div><b>Pipeline completed</b><small>Build · Quality checks · Deployment</small></div><span className="success">SUCCESS</span></div>
          </div>
        </div>
        <div className="hero-index">01 <span>/ 04</span></div>
      </section>

      <section className="metrics wrap">
        <div><strong>8<span>+</span></strong><small>Years in CI/CD & DevOps</small></div>
        <div><strong>10<span>+</span></strong><small>Microservices delivery context</small></div>
        <div><strong>3</strong><small>Release environments</small></div>
        <div><strong>∞</strong><small>Continuous improvement</small></div>
      </section>

      <section className="section wrap" id="about">
        <div className="section-label"><span>01 / ABOUT</span><div/></div>
        <div className="about-grid">
          <h2>Turning complex<br/>releases into <em>repeatable</em><br/>workflows.</h2>
          <div className="about-copy"><p>I’m a DevOps Engineer with hands-on experience supporting software delivery through build automation, release management and deployment operations.</p><p>My work centres on Azure DevOps, .NET application delivery, multi-environment releases and Windows/IIS deployment workflows. I enjoy improving the path from source code to a stable production release.</p><p className="muted-note">This portfolio is a starting point. Add measurable outcomes and approved project details before publishing.</p></div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="wrap">
          <div className="section-label"><span>02 / TECHNICAL TOOLKIT</span><div/></div>
          <div className="section-heading"><h2>Tools I work with.</h2><p>Practical engineering across the software delivery lifecycle.</p></div>
          <div className="skill-grid">
            {skills.map(({title, items, icon: Icon}) => <article className="skill-card" key={title}><div className="skill-icon"><Icon size={21}/></div><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section className="section wrap" id="projects">
        <div className="section-label"><span>03 / SELECTED WORK</span><div/></div>
        <div className="section-heading project-heading"><h2>Engineering in practice.</h2><p>Representative project summaries based on the technologies and workflows in my experience. Replace or refine these with verified project details.</p></div>
        <div className="project-list">
          {projects.map(project => <article className="project" key={project.number}>
            <span className="project-number">{project.number}</span>
            <div className="project-main"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            <div className="project-arrow"><ArrowUpRight size={22}/></div>
          </article>)}
        </div>
      </section>

      <section className="section process-section">
        <div className="wrap">
          <div className="section-label"><span>04 / DELIVERY APPROACH</span><div/></div>
          <div className="section-heading"><h2>From commit to production.</h2><p>A delivery workflow built around consistency, visibility and controlled change.</p></div>
          <div className="process-grid">{process.map(([num, title, desc]) => <div className="process-step" key={num}><span>{num}</span><h3>{title}</h3><p>{desc}</p></div>)}</div>
        </div>
      </section>

      <section className="contact wrap" id="contact">
        <div className="contact-kicker"><span className="pulse"/> LET’S BUILD SOMETHING RELIABLE</div>
        <h2>Have a project<br/>in <em>mind?</em></h2>
        <p>Interested in DevOps, CI/CD automation or cloud delivery? Let’s connect.</p>
        <a className="button button-primary" href="mailto:your.email@example.com"> <Mail size={17}/> your.email@example.com <ArrowUpRight size={16}/></a>
        <div className="contact-foot"><span>© {new Date().getFullYear()} DevOps Engineer Portfolio</span><span>Built with Next.js <Code2 size={13}/></span></div>
      </section>
    </main>
  );
}
