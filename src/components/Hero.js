import { ArrowDown, ArrowUpRight } from "lucide-react";
import RibbonArt from "./RibbonArt";
import Asterisk from "./Asterisk";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="meta-row">
        <span className="eyebrow" data-cms-key="text_1">Field note / 001</span>
        <span className="eyebrow eyebrow-icon">
          Scroll to explore <ArrowDown size={12} strokeWidth={1.8} />
        </span>
      </div>

      <div className="hero-stage">
        <h1 className="hero-title">
          <span className="hero-line hero-line-1">
            <span data-cms-key="text_2">Brands with</span>
          </span>
          <span className="hero-line hero-line-2">
            <span data-cms-key="text_3">a pulse.</span>
          </span>
        </h1>

        <figure className="hero-card">
          <RibbonArt />
          <figcaption className="hero-caption" data-cms-key="text_4">A practice in possibility</figcaption>
          <a className="badge" href="#projects" aria-label="See selected work">
            <span data-cms-key="text_5">See it</span>
            <span className="badge-row">
              move <ArrowUpRight size={10} strokeWidth={2} />
            </span>
          </a>
          <Asterisk className="hero-star" strokeWidth={13} />
        </figure>

        <p className="hero-tag" data-cms-key="paragraph_1">
          <span className="dot" />
          Independent creative studio
        </p>
      </div>

      <div className="hero-foot">
        <p className="hero-lede" data-cms-key="paragraph_2">
          We shape bold ideas into identities, digital products and imagery that carry a character of their own.
        </p>
        <div className="hero-cta">
          <span className="eyebrow eyebrow-right" data-cms-key="text_6">Strategy / Design / Experiments</span>
          <a className="btn btn-dark" href="#projects">
            <span data-cms-key="text_7">Explore our work</span>
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
      <div className="hairline" />
    </section>
  );
}
