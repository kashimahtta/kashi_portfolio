import { useState } from 'react';
import { experience } from './content.js';

function Entry({ e, id }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="reveal relative pl-10">
      <span aria-hidden="true" className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-sand bg-ember ring-1 ring-ember" />
      <p className="font-mono text-xs text-char/70">{e.date}</p>
      <h3 className="font-display text-2xl font-bold">{e.role} <span className="text-ember">@ {e.org}</span></h3>
      <p className="mt-2 text-char/80">{e.summary}</p>
      <button className="mt-2 font-mono text-sm text-[#a8431f] underline-offset-4 hover:underline" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
        {open ? '− Hide details' : '+ Show details'}
      </button>
      <div id={id} hidden={!open} className="mt-3 rounded-xl bg-cream p-4"><p className="text-char/85">{e.details}</p></div>
      <ul className="mt-3 flex flex-wrap gap-2">{e.tags.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-sand py-24">
      <div className="container-x">
        <p className="label">~/journey</p>
        <h2 className="reveal mt-3 font-display text-4xl font-bold md:text-5xl">The journey so far.</h2>
        <ol className="relative mt-12 max-w-3xl space-y-12 before:absolute before:left-[7px] before:top-3 before:h-full before:w-px before:bg-ember/50">
          {experience.map((e, i) => <Entry key={e.org} e={e} id={`exp-${i}`} />)}
        </ol>
      </div>
    </section>
  );
}
