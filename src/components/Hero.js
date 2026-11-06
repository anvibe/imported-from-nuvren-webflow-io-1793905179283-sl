import { ArrowDown, ArrowUpRight } from "lucide-react";
import RibbonArt from "./RibbonArt";
import Asterisk from "./Asterisk";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="meta-row">
        <span data-cms-key="text_1" className="eyebrow">Field note / 001</span>
        <span className="eyebrow eyebrow-icon">
          Scroll to explore <ArrowDown size={12} strokeWidth={1.8} />
        </span>
      </div>

      <div className="hero-stage">
        <h1 data-cms-key="heading_1" className="hero-title">
          <span className="hero-line hero-line-1">
            <span>Brands with</span>
          </span>
          <span className="hero-line hero-line-2">
            <span>a pulse.</span>
          </span>
        </h1>

        <figure className="hero-card">
          <RibbonArt />
          <figcaption data-cms-key="text_2" className="hero-caption">A practice in possibility</figcaption>
          <a className="badge" href="#projects" aria-label="See selected work">
            <span data-cms-key="text_3">See it</span>
            <span className="badge-row">
              move <ArrowUpRight size={10} strokeWidth={2} />
            </span>
          </a>
          <Asterisk className="hero-star" strokeWidth={13} />
        </figure>

        <p data-cms-key="paragraph_1" className="hero-tag">
          <span className="dot" />
          Independent creative studio
        </p>
      </div>

      <div className="hero-foot">
        <p data-cms-key="paragraph_2" className="hero-lede">
          We shape bold ideas into identities, digital products and imagery that carry a character of their own.
        </p>
        <div className="hero-cta">
          <span data-cms-key="text_4" className="eyebrow eyebrow-right">Strategy / Design / Experiments</span>
          <a className="btn btn-dark" href="#projects">
            <span data-cms-key="text_5">Explore our work</span>
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
      <div className="hairline" />
    </section>
  );
}
