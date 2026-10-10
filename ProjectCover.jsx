// Original CSS illustrations — abstract mockups, not real screenshots.
const Box = ({ className = '', children }) => <div className={`rounded-md ${className}`}>{children}</div>;

export default function ProjectCover({ type }) {
  const covers = {
    dashboard: (
      <div className="grid w-full grid-cols-3 gap-2">
        <Box className="flex flex-col items-center justify-center bg-ember/90 p-2 text-cream"><b className="font-display text-3xl">87</b><span className="font-mono text-[10px]">HEALTH</span></Box>
        <Box className="col-span-2 flex items-end gap-1 bg-cream/10 p-2">{[40, 65, 50, 80, 60, 90, 70].map((h, i) => <i key={i} className="flex-1 rounded-sm bg-sand" style={{ height: h * 0.8 }} />)}</Box>
        {['CPU', 'RAM', 'BAT'].map((m) => <Box key={m} className="bg-cream/10 p-2 font-mono text-[10px] text-sand">{m}<div className="mt-1 h-1.5 rounded bg-ember" /></Box>)}
      </div>),
    rag: (
      <div className="flex items-center gap-2 font-mono text-[10px] text-cream">
        <Box className="bg-cream/15 p-2">PDF<br />PDF</Box>→<Box className="bg-ember p-2">embed<br />FAISS</Box>→<Box className="bg-cream/15 p-2">answer<br /><span className="text-sand">[1][2]</span></Box>
      </div>),
    meeting: (
      <div className="grid w-full grid-cols-3 gap-2 font-mono text-[10px] text-sand">
        {['TO DO', 'DOING', 'DONE'].map((c, i) => <Box key={c} className="bg-cream/10 p-2">{c}{Array.from({ length: 3 - i }).map((_, j) => <div key={j} className={`mt-1.5 h-4 rounded ${i === 1 ? 'bg-ember' : 'bg-cream/25'}`} />)}</Box>)}
      </div>),
    interview: (
      <div className="flex w-full gap-3 font-mono text-[10px] text-sand">
        <Box className="w-1/3 bg-cream/10 p-2"><i className="mx-auto mb-2 block h-8 w-8 rounded-full bg-ember" /><div className="h-1.5 rounded bg-cream/30" /><div className="mt-1 h-1.5 w-2/3 rounded bg-cream/30" /></Box>
        <div className="flex-1 space-y-2">{['Q1  Explain RAG…', 'Q2  Design an API…', 'Q3  Debug this…'].map((q) => <Box key={q} className="bg-cream/10 px-2 py-1.5">{q}</Box>)}</div>
      </div>),
    quiz: (
      <div className="w-full space-y-2 font-mono text-[10px] text-sand">
        <div className="h-1.5 rounded bg-cream/20"><div className="h-full w-2/3 rounded bg-ember" /></div>
        <Box className="bg-cream/10 p-2 text-cream">Q4. Which is a vector DB?</Box>
        {['A', 'B', 'C'].map((o, i) => <Box key={o} className={`px-2 py-1 ${i === 1 ? 'bg-ember text-cream' : 'bg-cream/10'}`}>{o}) option</Box>)}
      </div>),
    infrared: (
      <div className="grid h-full w-full grid-cols-2 gap-2">
        <Box className="bg-gradient-to-br from-neutral-300 to-neutral-700" />
        <Box className="bg-gradient-to-br from-yellow-300 via-ember to-purple-900" />
      </div>),
  };
  return <div className="flex h-48 items-center justify-center overflow-hidden rounded-xl bg-char/60 p-4" aria-hidden="true">{covers[type]}</div>;
}
