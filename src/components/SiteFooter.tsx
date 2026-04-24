import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contato" className="relative border-t border-border/60 mt-32">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Contato
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient max-w-3xl">
            Vamos construir algo escalável?
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            Aberto a oportunidades em engenharia de software, integrações e
            arquitetura cloud. Responde rápido.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:igor.coelhodc@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              igor.coelhodc@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Igor Coelho. Todos os direitos reservados.</p>
          <p className="font-mono">crafted with precision · v1.0</p>
        </div>
      </div>
    </footer>
  );
}
