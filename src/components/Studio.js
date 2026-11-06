import Reveal from "./Reveal";
import Asterisk from "./Asterisk";
import { ArrowUpRight } from "lucide-react";

export default function Studio() {
  return (
    <section className="studio" id="studio">
      <div className="container">
        <span data-cms-key="text_15" className="eyebrow">02 / The studio</span>
        <div className="studio-grid">
          <Reveal className="studio-left">
            <h2 data-cms-key="heading_3" className="studio-title">
              Few hands.
              <br />
              Wide horizons.
            </h2>
            <Asterisk className="studio-star" strokeWidth={14} />
          </Reveal>
          <Reveal className="studio-right" delay={120}>
            <p data-cms-key="paragraph_4" className="studio-lead">
              Clarity comes first.
              <br />
              The surprise comes right after.
            </p>
            <p data-cms-key="paragraph_5" className="studio-body">
              ORVANE is an independent design practice for founders and teams making things they truly believe in. We pair sharp strategy with a taste for the unexpected, shaping brands and experiences that feel considered, alive and unmistakably yours.
            </p>
            <p data-cms-key="paragraph_6" className="eyebrow studio-note">One small team. One shared bar.</p>
            <a className="text-link" href="#studio">
              Meet the studio <ArrowUpRight size={14} strokeWidth={1.8} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
