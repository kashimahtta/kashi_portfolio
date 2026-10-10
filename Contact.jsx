import { profile } from './content.js';

export default function Contact() {
  const links = [
    {
      label: `Phone · ${profile.phone}`,
      url: `tel:${profile.phone.replace(/\s/g, '')}`,
      external: false,
    },
    { label: 'Instagram', url: profile.instagram },
    { label: 'LinkedIn', url: profile.linkedin },
    { label: 'GitHub', url: profile.github },
    { label: 'WhatsApp', url: profile.whatsapp },
    { label: 'Snapchat', url: profile.snapchat },
  ].filter(({ url }) => url);

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-cream/10 bg-char py-24 text-cream"
    >
      <div className="container-x">
        <p className="label">~/contact</p>
        <h2 className="reveal mt-3 font-display text-5xl font-bold leading-none md:text-8xl">Got an idea?<br /><span className="text-ember">Let's build it.</span></h2>
        <p className="mt-6 max-w-2xl text-lg text-sand">Whether you're a recruiter, a founder, a fellow developer, or someone with an interesting problem to solve, I'm always interested in meaningful conversations and opportunities to create something useful.</p>
        <div className="mt-12">
          <h3 className="label mb-4">Connect with me</h3>
          <ul className="grid gap-3 font-mono sm:grid-cols-2 lg:grid-cols-4">
            {links.map(({ label, url, external = true }) => (
              <li key={label}>
                <a className="block rounded-lg border border-cream/20 bg-char/40 px-4 py-3 transition hover:border-ember hover:text-ember" href={url} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
                  {label} {external && <span className="text-sand">↗</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-16 font-hand text-3xl text-ember">Built with curiosity. Powered by code. Always becoming better.</p>
      </div>
    </section>
  );
}
