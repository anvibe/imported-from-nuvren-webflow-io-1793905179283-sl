import { ArrowUpRight } from "lucide-react";

const links = ["Projects", "Services", "Studio", "Journal"];

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="#top" aria-label="Orvane home">
        <svg className="logo-mark" viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="5" fill="currentColor" />
          <path d="M7 17V7l10 10V7" fill="none" stroke="#f4f1ea" strokeWidth="2.4" strokeLinecap="square" />
        </svg>
        <span className="logo-word" data-cms-key="text_16">orvane</span>
      </a>
      <nav className="nav" aria-label="Primary">
        {links.map((l) => (
          <a key={l} className="nav-link" href={`#${l.toLowerCase()}`}>
            {l}
          </a>
        ))}
        <a className="btn btn-dark btn-sm" href="#contact">
          <span data-cms-key="text_17">Let's talk</span>
          <ArrowUpRight size={16} strokeWidth={1.6} />
        </a>
      </nav>
    </header>
  );
}
