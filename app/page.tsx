'use client';

import { useEffect, useState } from 'react';
import TV from '@/components/Home/TV';
import MobileLanding from '@/components/Home/MobileLanding';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobile;
}

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <main>
      {isMobile ? <MobileLanding /> : <TV />}
    </main>
  );
}
