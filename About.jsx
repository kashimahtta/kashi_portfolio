import { useEffect, useState } from 'react';
import { approach } from './content.js';

const photos = [
  { src: '/aboutme1.jpeg', alt: 'Kashi by a lakeside' },
  { src: '/aboutme2.jpeg', alt: 'Kashi smiling in a shop' },
  { src: '/aboutme3.jpeg', alt: 'Kashi taking a mirror selfie' },
];

export default function About() {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((current) => (current + 1) % photos.length);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="bg-cream py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div
          className="reveal relative aspect-[4/5] min-h-[320px] overflow-hidden rounded-2xl bg-sand shadow-lg lg:-rotate-2"
          role="group"
          aria-label="Photo carousel"
        >
          {photos.map((photo, index) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              aria-hidden={index !== activePhoto}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
                index === activePhoto ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="reveal">
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">A little about the person behind the pixels.</h2>
          <div className="mt-6 space-y-4 text-lg text-char/85">
            <p>I'm Kashi Mahtta, a third-year Computer Science and Engineering student at JSS Academy of Technical Education, Noida. I enjoy building responsive web applications, connecting frontend experiences with reliable backend systems, and exploring how Generative AI can make software more useful.</p>
            <p>My experience spans software development, frontend development, full-stack applications, and AI-powered systems. I've worked with React.js, JavaScript, Python, Node.js, Django, FastAPI, databases, LLM APIs, Retrieval-Augmented Generation, and agent-based AI workflows.</p>
            <p>I'm currently strengthening my Data Structures and Algorithms skills while learning more about AWS, Docker, Linux, cloud computing, and deployment. I believe good software combines clear logic, thoughtful design, and a genuine understanding of the problem it solves.</p>
          </div>
          <h3 className="label mt-10">My Approach</h3>
          <ol className="mt-4 grid gap-4 sm:grid-cols-3">
            {approach.map(([t, d], i) => (
              <li key={t} className="rounded-xl border border-char/15 p-4">
                <span className="font-mono text-xs text-ember">0{i + 1}</span>
                <p className="font-display text-lg font-bold">{t}</p>
                <p className="mt-1 text-sm text-char/75">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
