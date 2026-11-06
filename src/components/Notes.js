import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Notes() {
  return (
    <section className="notes" id="journal">
      <div className="container">
        <div className="notes-head">
          <span className="eyebrow" data-cms-key="text_11">05 / Field notes</span>
          <a className="text-link" href="#journal">
            Visit the journal <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>
        <div className="hairline hairline-dark" />
        <div className="notes-grid">
          <Reveal as="h2" className="notes-title" data-cms-key="heading_2">
            notes from the bench.
          </Reveal>
          <Reveal className="notes-copy" delay={120}>
            <p data-cms-key="paragraph_4">
              Half-finished thoughts, experiments and practical lessons from an independent studio. A closer look at how rough ideas turn into things that matter.
            </p>
            <a className="text-link" href="#journal">
              Read the latest entries <ArrowUpRight size={14} strokeWidth={1.8} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
