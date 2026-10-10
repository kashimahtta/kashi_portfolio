import { education } from './content.js';

export default function Education() {
  return (
    <section id="education" className="bg-cream py-20">
      <div className="container-x">
        <p className="label">~/education</p>
        <h2 className="reveal mt-3 font-display text-4xl font-bold">Where it all started.</h2>
        <ul className="mt-8 divide-y divide-char/15 border-y border-char/15">
          {education.map(([school, deg, yr]) => (
            <li key={deg} className="reveal flex flex-col gap-1 py-5 md:flex-row md:items-center md:justify-between">
              <div><p className="font-display text-xl font-bold">{school}</p><p className="text-char/80">{deg}</p></div>
              <p className="font-mono text-ember">{yr}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
