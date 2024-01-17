import { useInView } from 'react-intersection-observer'
import { useEffect } from "react";
import { useActive } from "./useActive";
import { ActiveType } from '@/context/ActiveProvider';

export function useCustomInView(sectionName: ActiveType, threshold: number) {
  const { ref, inView } = useInView({ threshold });

  const { setActive, timeOfLastClick } = useActive();

  useEffect(() => {
    
    if (inView && (Date.now() -  timeOfLastClick > 1000)) setActive(sectionName);

  }, [inView, setActive, sectionName, timeOfLastClick]);

  return { ref };
}