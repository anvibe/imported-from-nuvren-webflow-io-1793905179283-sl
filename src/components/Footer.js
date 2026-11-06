import { ArrowUpRight } from "lucide-react";

const primary = ["Projects", "Services", "Studio", "Journal", "Contact"];
const secondary = ["Instagram", "Behance", "Newsletter"];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="cta">
          <h2 data-cms-key="heading_4" className="cta-title">
            Got a hunch?
            <br />
            Let's chase it.
          </h2>
          <a className="btn btn-lime" href="mailto:hello@orvane.studio">
            <span data-cms-key="text_12">Start a conversation</span>
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

        <div className="wordmark" aria-hidden="true" data-cms-key="text_13">orvane</div>

        <div className="footer-bottom">
          <span data-cms-key="text_14">© 2026 ORVANE. Independent by design.</span>
          <span data-cms-key="text_15">LISBON / REMOTE</span>
        </div>
      </div>
    </footer>
  );
}
