import { useEffect, useRef } from 'react';
// Desktop-only (fine pointer), disabled for reduced-motion users. Purely decorative.
export default function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    const ok = matchMedia('(pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!ok) return;
    const el = ref.current; el.style.display = 'block';
    const move = (e) => { el.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`; };
    const over = (e) => el.classList.toggle('scale-[2.2]', !!e.target.closest('a,button,input,textarea'));
    addEventListener('mousemove', move); addEventListener('mouseover', over);
    return () => { removeEventListener('mousemove', move); removeEventListener('mouseover', over); };
  }, []);
  return <div ref={ref} aria-hidden="true" style={{ display: 'none' }} className="pointer-events-none fixed left-0 top-0 z-[90] h-5 w-5 rounded-full border border-ember transition-[scale] duration-150" />;
}
