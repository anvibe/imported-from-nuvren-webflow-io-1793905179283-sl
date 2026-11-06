import { useEffect, useState } from "react";
import Asterisk from "./Asterisk";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Listen closely",
    copy: "We dig into your story, your audience and your odd little strengths until the real point of difference shows up.",
  },
  {
    n: "02",
    title: "Push past the obvious",
    copy: "We sketch wide, test bold routes and keep the ones that surprise us and still make sense.",
  },
  {
    n: "03",
    title: "Ship with care",
    copy: "Every detail gets finished and handed over, ready to perform in the real world.",
  },
];

export default function Process() {
  const [rot, setRot] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => setRot((window.scrollY || 0) * 0.25);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="process">
      <div className="container">
        <span className="eyebrow" data-cms-key="text_19">04 / How we get there</span>
        <h2 className="process-title" data-cms-key="heading_3">Just enough structure. Plenty of room to play.</h2>
        <div className="process-grid">
          <div className="process-visual">
            <div className="process-sticky">
              <Asterisk
                className="process-star"
                strokeWidth={9}
              />
              <span className="process-count">Step {steps[active].n} of 03</span>
            </div>
          </div>
          <ol className="process-steps">
            {steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.n}
                className={`step ${active === i ? "is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
              >
                <span className="step-n">{s.n}</span>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-copy">{s.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
      <style>{`.process-star{transform:rotate(${rot}deg)}`}</style>
    </section>
  );
}
