import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Cloud,
  Code2,
  Database,
  Github,
  Layers,
  Server,
  Sparkles,
  Terminal,
  Wrench,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Igor Coelho — Engenheiro de Software & Cloud Infrastructure" },
      {
        name: "description",
        content:
          "Portfólio de Igor Coelho — Engenheiro de Software especializado em infraestrutura cloud, integrações de APIs e automações inteligentes.",
      },
      { property: "og:title", content: "Igor Coelho — Software & Cloud Infrastructure" },
      {
        property: "og:description",
        content:
          "Arquitetando soluções robustas, integrações escaláveis e automações inteligentes.",
      },
    ],
  }),
});

const skills = [
  {
    title: "Backend & APIs",
    icon: Server,
    items: ["Java", "C", "Node.js", "REST / JSON", "SQL Server", "MongoDB"],
  },
  {
    title: "Cloud & Infra",
    icon: Cloud,
    items: ["GCP", "AWS", "Docker", "Proxmox", "Linux", "Active Directory"],
  },
  {
    title: "Front-end & Tools",
    icon: Code2,
    items: ["JavaScript ES6+", "TypeScript", "React", "Git", "Power Platform"],
  },
];

const projects = [
  {
    name: "Nexar",
    tag: "Consultoria & Marca Tech",
    description:
      "Marca de consultoria focada em migração cloud e serviços de software corporativo, unindo arquitetura e produto.",
    icon: Sparkles,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Commander",
    tag: "Cross-platform · Go",
    description:
      "Host em Go com cliente web para operar dispositivos legados de forma centralizada e segura.",
    icon: Terminal,
    span: "md:col-span-1",
  },
  {
    name: "Logis Control",
    tag: "Power Platform · No-code",
    description:
      "Solução no-code que reduziu perda de material em 10% através de rastreabilidade em tempo real.",
    icon: Layers,
    span: "md:col-span-1",
  },
  {
    name: "HortiCode",
    tag: "Full-stack · Automação",
    description:
      "Plataforma full-stack para automação da gestão de colheita, do campo ao dashboard analítico.",
    icon: Database,
    span: "md:col-span-2",
  },
];

const experience = [
  {
    company: "Grupo Salta",
    role: "Gestão de Infraestrutura & SLAs",
    description:
      "Operação de infraestrutura crítica, definição de SLAs e governança de ambientes corporativos.",
  },
  {
    company: "Vivo (Telefônica)",
    role: "Automação & Analytics",
    description:
      "Automação de processos operacionais e construção de dashboards analíticos para tomada de decisão.",
  },
  {
    company: "Avteck",
    role: "Integrações de API & Sistemas Críticos",
    description:
      "Integrações com ERPs via APIs RESTful e troubleshooting de sistemas de missão crítica.",
  },
];

function Index() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div
          className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
          style={{ background: "var(--gradient-radial)" }}
        />
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Disponível para novos projetos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 text-6xl md:text-8xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95]"
          >
            Igor Coelho
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-xl md:text-2xl text-silver font-light"
          >
            Engenheiro de Software & Infraestrutura Cloud
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Unindo a engenharia de sistemas críticos com o desenvolvimento de
            software para arquitetar soluções robustas, integrações escaláveis
            e automações inteligentes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Ver Projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/40 backdrop-blur px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              Contato
            </a>
          </motion.div>

          {/* mono meta line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-lg overflow-hidden font-mono text-xs"
          >
            {[
              ["LOC", "Goiás · BR"],
              ["FOCUS", "Cloud · APIs"],
              ["EDU", "IFG · SI"],
              ["STATUS", "ONLINE"],
            ].map(([k, v]) => (
              <div key={k} className="bg-surface/80 px-4 py-3">
                <div className="text-muted-foreground">{k}</div>
                <div className="text-foreground mt-0.5">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              01 — Sobre
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gradient leading-tight">
              Mentalidade de tolerância zero a falhas.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Com uma base sólida em sistemas eletroeletrônicos e manutenção
              aviônica, trago a mentalidade de tolerância zero a falhas para o
              desenvolvimento de software corporativo. Atualmente graduando em
              Sistemas de Informação (IFG) e Engenharia de Software, atuo na
              ponte entre a infraestrutura em nuvem, integrações de APIs
              RESTful e otimização de processos de negócio.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-foreground">
                Facilitador Google Cloud Arcade Brasil
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="surface-card rounded-xl overflow-hidden font-mono text-sm">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-surface-elevated/60">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-xs text-muted-foreground">
                  ~/igor/architect.ts
                </span>
              </div>
              <pre className="p-6 leading-relaxed text-[13px] overflow-x-auto">
                <code>
                  <span className="text-muted-foreground">// principles.ts</span>
                  {"\n"}
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">engineer</span>{" "}
                  <span className="text-muted-foreground">=</span> {"{"}
                  {"\n  "}name<span className="text-muted-foreground">:</span>{" "}
                  <span className="text-emerald-300/80">'Igor Coelho'</span>,
                  {"\n  "}stack<span className="text-muted-foreground">:</span>{" "}
                  [<span className="text-emerald-300/80">'cloud'</span>,{" "}
                  <span className="text-emerald-300/80">'apis'</span>,{" "}
                  <span className="text-emerald-300/80">'systems'</span>],
                  {"\n  "}mindset<span className="text-muted-foreground">:</span>{" "}
                  <span className="text-emerald-300/80">'zero-fault tolerance'</span>,
                  {"\n  "}deliver<span className="text-muted-foreground">:</span>{" "}
                  <span className="text-primary">async</span> () =&gt; {"{"}
                  {"\n    "}
                  <span className="text-primary">return</span>{" "}
                  <span className="text-emerald-300/80">'scalable systems'</span>;
                  {"\n  "}
                  {"}"},
                  {"\n"}
                  {"};"}
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              02 — Stack Técnico
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gradient leading-tight max-w-2xl">
              Ferramentas para construir sistemas de alta confiabilidade.
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {skills.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.08}>
                <div className="surface-card group rounded-xl p-7 h-full transition-all duration-500 hover:border-primary/40 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-md border border-border bg-surface-elevated flex items-center justify-center text-primary group-hover:border-primary/50 transition">
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5 font-mono text-sm">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="h-px w-3 bg-border" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projetos" className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  03 — Projetos em Destaque
                </p>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gradient leading-tight max-w-2xl">
                  Trabalhos selecionados.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 md:auto-rows-[220px] gap-5">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08} className={p.span}>
                <article className="surface-card group relative h-full rounded-xl p-7 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:-translate-y-1">
                  <div
                    className="absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                    style={{ background: "var(--gradient-accent)" }}
                  />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-start justify-between">
                      <div className="h-10 w-10 rounded-md border border-border bg-surface-elevated flex items-center justify-center text-primary">
                        <p.icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {p.tag}
                      </span>
                    </div>

                    <div className="mt-auto pt-8">
                      <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {p.description}
                      </p>
                      <div className="mt-5 flex items-center gap-5 text-xs">
                        <a
                          href="#"
                          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition"
                        >
                          <Github className="h-3.5 w-3.5" /> GitHub
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experiencia" className="relative px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              04 — Trajetória
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gradient leading-tight">
              Experiência profissional.
            </h2>
          </Reveal>

          <div className="mt-16 relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-border via-border to-transparent" />
            <ul className="space-y-12">
              {experience.map((e, i) => (
                <Reveal key={e.company} delay={i * 0.1}>
                  <li className="relative pl-12">
                    <span className="absolute left-0 top-1.5 h-7 w-7 rounded-full border border-border bg-surface flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                    </span>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="text-xl font-semibold text-foreground">
                        {e.company}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {e.role}
                      </span>
                    </div>
                    <p className="mt-2 text-muted-foreground leading-relaxed max-w-xl">
                      {e.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
