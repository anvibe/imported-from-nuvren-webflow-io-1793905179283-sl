import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Kiln & Co.",
    kind: "Identity / Packaging",
    year: "2025",
    seed: "ceramic-studio-brand-table",
  },
  {
    title: "Parcel Bank",
    kind: "Digital product",
    year: "2025",
    seed: "fintech-app-workspace-desk",
  },
  {
    title: "Low Tide Gallery",
    kind: "Identity / Web",
    year: "2024",
    seed: "gallery-exhibition-white-room",
  },
  {
    title: "Strata Runners",
    kind: "Campaign / Motion",
    year: "2024",
    seed: "running-shoe-campaign-street",
  },
];

export default function Work() {
  return (
    <section className="work" id="projects">
      <div className="work-inner">
        <div data-cms-key="text_6" className="section-label-row">
          <span className="eyebrow eyebrow-light">01 / Selected work</span>
        </div>
        <div className="work-head">
          <Reveal as="h2" className="work-title">
            Crafted to be remembered.
          </Reveal>
          <Reveal as="p" className="work-blurb" delay={120}>
            Identities, products and visual worlds built alongside people who sweat the details.
          </Reveal>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <Reveal as="a" href="#projects" className="work-card" key={p.title} delay={i * 80}>
              <div className="work-thumb">
                <img src={`https://picsum.photos/seed/${p.seed}/800/1000`} alt={`${p.title} project preview`} loading="lazy" />
                <span className="work-arrow">
                  <ArrowUpRight size={20} strokeWidth={1.6} />
                </span>
              </div>
              <div className="work-meta">
                <span className="work-index">0{i + 1}</span>
                <h3 className="work-name">{p.title}</h3>
                <span className="work-kind">{p.kind}</span>
                <span className="work-year">{p.year}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="work-foot">
          <span data-cms-key="text_7" className="eyebrow eyebrow-light">Every project starts with curiosity.</span>
          <a className="btn btn-lime" href="#contact">
            <span data-cms-key="text_8">Start something new</span>
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
