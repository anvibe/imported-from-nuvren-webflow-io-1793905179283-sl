import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    n: "01",
    name: "Identity systems",
    copy: "Naming, positioning, visual language and guidelines. One clear point of view, applied everywhere.",
  },
  {
    n: "02",
    name: "Digital products",
    copy: "Sites and interfaces that give your brand rhythm, motion and a reason to come back.",
  },
  {
    n: "03",
    name: "Film & imagery",
    copy: "Art direction, 3D renders and moving image. Stories that make the familiar feel new.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div data-cms-key="text_17" className="services-head">
          <span className="eyebrow">03 / What we do</span>
          <span className="services-aside">From first sketch to final pixel.</span>
        </div>
        <ul className="service-list">
          {services.map((s, i) => (
            <Reveal as="li" className="service-item" key={s.n} delay={i * 80}>
              <a className="service-row" href="#services">
                <span className="service-n">{s.n}</span>
                <h3 className="service-name">{s.name}</h3>
                <p className="service-copy">{s.copy}</p>
                <span className="service-arrow">
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
