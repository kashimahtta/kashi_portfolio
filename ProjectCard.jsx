import { useState } from 'react';
import ProjectCover from './ProjectCover.jsx';

export default function ProjectCard({ p, id, className = '' }) {
  const [open, setOpen] = useState(false);
  const text = p.desc.length > 110 && !open ? p.desc.slice(0, 110).trimEnd() + '…' : p.desc;
  return (
    <article className={`reveal flex flex-col rounded-2xl border border-cream/15 bg-cream/5 p-5 transition duration-300 hover:-translate-y-1.5 hover:border-ember ${className}`}>
      {p.cover && <ProjectCover type={p.cover} />}
      <p className="label mt-4">{p.category}</p>
      <h3 className="mt-1 font-display text-2xl font-bold">{p.title}</h3>
      <p id={id} className="mt-2 text-sand">{text}</p>
      {p.tags && <ul className="mt-3 flex flex-wrap gap-2 text-sand">{(open ? p.tags : p.tags.slice(0, 4)).map((t) => <li key={t} className="chip">{t}</li>)}</ul>}
      <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={id} className="font-mono text-sm text-ember hover:underline">{open ? '− Less' : 'View Details →'}</button>
        {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="font-mono text-sm hover:text-ember">GitHub ↗</a>}
        {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="font-mono text-sm hover:text-ember">Live demo ↗</a>}
      </div>
    </article>
  );
}
