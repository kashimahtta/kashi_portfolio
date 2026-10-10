import { projects, moreProjects } from './content.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return (
    <section id="projects" className="bg-char py-24 text-cream">
      <div className="container-x">
        <p className="label">~/projects</p>
        <h2 className="reveal mt-3 font-display text-5xl font-bold md:text-7xl">Less talking. <span className="text-ember">More building.</span></h2>
        <p className="mt-4 max-w-xl text-sand">Experiments, applications, and ideas brought to life through code.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} id={`proj-${i}`} className={i % 3 === 0 ? 'lg:col-span-4' : 'lg:col-span-2'} />)}
        </div>
        <h3 className="mt-20 font-display text-3xl font-bold">And more experiments</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((p, i) => <ProjectCard key={p.title} p={p} id={`more-${i}`} />)}
        </div>
      </div>
    </section>
  );
}
