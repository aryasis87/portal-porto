'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, animate, useReducedMotion } from 'framer-motion';

// Menganimasikan bagian angka dari nilai seperti "240+", "3 Hari", "100%".
export default function CountUp({ value, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  const m = String(value).match(/^(\D*)([\d.,]+)(.*)$/);
  const prefix = m ? m[1] : '';
  const target = m ? parseFloat(m[2].replace(/,/g, '')) : null;
  const suffix = m ? m[3] : '';

  const [display, setDisplay] = useState(target == null || reduce ? null : 0);

  useEffect(() => {
    if (!inView || target == null || reduce) return;
    const controls = animate(0, target, {
      duration: 1.3, ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, reduce]);

  if (target == null) return <span ref={ref} className={className}>{value}</span>;
  return <span ref={ref} className={className}>{prefix}{display == null ? target : display}{suffix}</span>;
}
