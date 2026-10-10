import { useState } from 'react';
import { profile } from './content.js';

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });
  // No backend is configured, so "Send" opens the visitor's own email app with the message pre-filled.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${f.name}`);
    const body = encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };
  const input = 'mt-1 w-full rounded-lg border border-cream/25 bg-transparent px-4 py-3 text-cream placeholder:text-cream/40';
  return (
    <section id="contact" className="border-t border-cream/10 bg-char py-24 text-cream">
      <div className="container-x">
        <p className="label">~/contact</p>
        <h2 className="reveal mt-3 font-display text-5xl font-bold leading-none md:text-8xl">Got an idea?<br /><span className="text-ember">Let's build it.</span></h2>
        <p className="mt-6 max-w-2xl text-lg text-sand">Whether you're a recruiter, a founder, a fellow developer, or someone with an interesting problem to solve, I'm always interested in meaningful conversations and opportunities to create something useful.</p>
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[0.9fr_1.15fr_0.8fr]">
          <ul className="space-y-4 font-mono">
            <li><span className="text-sand">Email · </span><a className="text-ember hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span className="text-sand">GitHub · </span><a className="text-ember hover:underline" href={profile.github} target="_blank" rel="noopener noreferrer">github.com/kashimahtta ↗</a></li>
            {profile.linkedin && <li><span className="text-sand">LinkedIn · </span><a className="text-ember hover:underline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Profile ↗</a></li>}
          </ul>
          <form onSubmit={submit} className="space-y-4">
            <label className="block text-sm">Name<input required className={input} value={f.name} onChange={on('name')} autoComplete="name" /></label>
            <label className="block text-sm">Email<input required type="email" className={input} value={f.email} onChange={on('email')} autoComplete="email" /></label>
            <label className="block text-sm">Message<textarea required rows="5" className={input} value={f.message} onChange={on('message')} /></label>
            <button type="submit" className="btn-primary">Send Message →</button>
            <p className="font-mono text-xs text-sand">Heads up: this opens your email app with the message pre-filled — nothing is sent from this site.</p>
          </form>
          <img
            src="/contact.png"
            alt="Kashi Mahtta"
            className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl border border-cream/15 object-cover object-center lg:mx-0 lg:max-w-none"
          />
        </div>
        <p className="mt-16 font-hand text-3xl text-ember">Built with curiosity. Powered by code. Always becoming better.</p>
      </div>
    </section>
  );
}
