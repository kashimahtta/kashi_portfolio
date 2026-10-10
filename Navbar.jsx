import { useEffect, useState } from 'react';
import { nav } from './content.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    nav.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    addEventListener('keydown', esc); return () => removeEventListener('keydown', esc);
  }, []);
  const link = (id, label) => (
    <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? 'true' : undefined}
       className={`font-mono text-sm transition hover:text-ember ${active === id ? 'text-ember' : ''}`}>
      {active === id && <span aria-hidden="true">&gt; </span>}{label}
    </a>
  );
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-char/10 bg-cream/90 backdrop-blur">
      <nav aria-label="Main" className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl font-bold">kashi<span className="text-ember">.</span>dev</a>
        <div className="hidden gap-7 md:flex">{nav.map(([id, l]) => link(id, l))}</div>
        <button className="rounded border border-char/30 px-3 py-1 font-mono text-sm md:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>
      {open && <div id="mobile-menu" className="container-x flex flex-col gap-4 border-t border-char/10 py-5 md:hidden">{nav.map(([id, l]) => link(id, l))}</div>}
    </header>
  );
}
