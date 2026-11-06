import { ArrowUpRight } from "lucide-react";

const primary = ["Projects", "Services", "Studio", "Journal", "Contact"];
const secondary = ["Instagram", "Behance", "Newsletter"];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="cta">
          <h2 data-cms-key="heading_2" className="cta-title">
            Got a hunch?
            <br />
            Let's chase it.
          </h2>
          <a className="btn btn-lime" href="mailto:hello@orvane.studio">
            <span data-cms-key="text_10">Start a conversation</span>
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </a>
        </div>
        <div className="hairline hairline-light" />

        <div className="footer-links">
          <nav className="footer-nav" aria-label="Footer">
            {primary.map((l, i) => (
              <span key={l} className="footer-item">
                <a href={`#${l.toLowerCase()}`}>{l}</a>
                {i < primary.length - 1 && <span className="slash">/</span>}
              </span>
            ))}
          </nav>
          <nav className="footer-nav footer-nav-right" aria-label="Social">
            {secondary.map((l, i) => (
              <span key={l} className="footer-item">
                <a href="#contact">{l}</a>
                {i < secondary.length - 1 && <span className="slash">/</span>}
              </span>
            ))}
          </nav>
        </div>

        <div data-cms-key="text_11" className="wordmark" aria-hidden="true">orvane</div>

        <div data-cms-key="text_12" className="footer-bottom">
          <span>© 2026 ORVANE. Independent by design.</span>
          <span>LISBON / REMOTE</span>
        </div>
      </div>
    </footer>
  );
}
