import { useState } from 'react';
import { skills } from './content.js';

export default function Skills() {
  const cats = Object.keys(skills);
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? cats : [active];
  return (
    <section id="skills" className="border-t border-char/10 bg-cream py-24">
      <div className="container-x">
        <p className="label">~/toolkit</p>
        <h2 className="reveal mt-3 font-display text-4xl font-bold md:text-5xl">My developer toolkit.</h2>
        <p className="mt-3 max-w-xl text-char/70">A map of what I've worked with and what I'm learning — not a proficiency scorecard.</p>
        <div role="group" aria-label="Filter skills" className="mt-8 flex flex-wrap gap-2">
          {['All', ...cats].map((c) => (
            <button key={c} onClick={() => setActive(c)} aria-pressed={active === c}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${active === c ? 'border-ember bg-ember text-cream' : 'border-char/30 hover:border-ember hover:text-ember'}`}>{c}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {shown.map((c) => (
            <article key={c} className="rounded-2xl border border-char/15 bg-sand/40 p-6 transition hover:-translate-y-1 hover:border-ember">
              <h3 className="font-mono text-sm text-ember">{`// ${c}`}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills[c].map((s) => <li key={s} className="chip bg-cream">{s}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
