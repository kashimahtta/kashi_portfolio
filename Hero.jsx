import { useEffect, useState } from 'react';
import { stats, floatingCards } from './content.js';

const CODE = `const kashi = {
  role: "Full-Stack + GenAI Dev",
  stack: ["React", "Python", "FastAPI"],
  currently: "learning AWS & Docker",
  mission: () => idea.toProduct(),
};`;

function Terminal({ text }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(text.length); return; }
    const t = setInterval(() => setN((v) => (v < text.length ? v + 1 : v)), 55);
    return () => clearInterval(t);
  }, [text]);
  return <p className="font-mono text-sm text-sand" aria-label={text}><span aria-hidden="true">&gt; {text.slice(0, n)}<span className="caret">▍</span></span></p>;
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-char pb-12 pt-24 text-cream">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(32,32,30,0.98) 0%, rgba(32,32,30,0.9) 48%, rgba(32,32,30,0.56) 100%), url('/portrait.png')",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(#F7F1E7 1px,transparent 1px),linear-gradient(90deg,#F7F1E7 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
      <div aria-hidden="true" className="absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-ember/30 blur-3xl" />
      <div className="container-x relative">
        <p className="label reveal">Hey, I'm Kashi — Developer, Builder &amp; Problem Solver</p>
        <h1 className="reveal mt-5 max-w-4xl font-display text-6xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
          Meet Your <span className="text-ember">Dev Partner.</span>
        </h1>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="reveal">
            <p className="max-w-xl text-xl text-sand">I turn curious ideas into intelligent, interactive experiences — from full-stack applications to AI-powered solutions.</p>
            <p className="mt-3 max-w-xl font-hand text-3xl text-ember">You bring the idea. I'll bring the logic, the code, and a little bit of AI magic.</p>
            <p className="mt-5 max-w-xl text-cream/80">I'm Kashi Mahtta, a full-stack developer exploring the intersection of web development, Generative AI, and cloud technologies. I enjoy turning complex problems into practical, user-friendly digital products.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">Explore My Work →</a>
              <a href="#contact" className="btn-ghost">Let's Connect</a>
            </div>
            <p className="mt-6 flex items-center gap-2 font-mono text-xs tracking-wider text-sand">
              <span className="pulse-dot h-2 w-2 rounded-full bg-ember" aria-hidden="true" /> OPEN TO SOFTWARE DEVELOPMENT &amp; AI OPPORTUNITIES
            </p>
          </div>
          <div className="reveal relative">
            <div className="rounded-xl border border-cream/15 bg-black/30 p-5">
              <div className="mb-3 flex gap-1.5" aria-hidden="true">{[0, 1, 2].map((i) => <i key={i} className="h-2.5 w-2.5 rounded-full bg-cream/25" />)}</div>
              <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-sand sm:text-sm"><code>{CODE}</code></pre>
              <div className="mt-4 border-t border-cream/10 pt-3"><Terminal text="turning ideas into working products..." /></div>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {floatingCards.map((c, i) => (
                <li key={c} className="float rounded-lg bg-cream px-3 py-2 font-mono text-xs text-char" style={{ animationDelay: `${i * 0.7}s` }}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-cream/15 pt-8 md:grid-cols-4">
          {stats.map(([v, l]) => (
            <div key={l} className="reveal"><dd className="font-display text-3xl font-bold text-ember">{v}</dd><dt className="font-mono text-xs uppercase tracking-wider text-sand">{l}</dt></div>
          ))}
        </dl>
      </div>
    </section>
  );
}
