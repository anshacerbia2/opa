import { useEffect } from "react";

const useSVGPathAnimation = (svgRefs: React.RefObject<SVGPathElement[][]>) => {
  const animatePath = (menuIndex: number) => {
    if (Array.isArray(svgRefs.current)) {
      svgRefs.current[menuIndex].forEach((v) => {
        const length = v.getTotalLength();
        v.style.transition = "none";
        v.style.strokeDasharray = `${length} ${length}`;
        v.style.strokeDashoffset = `${length}`;
        v.getBoundingClientRect();
        v.style.transition = "stroke-dashoffset 3s";
        v.style.strokeDashoffset = "0";
      });
    }
  };

  useEffect(() => {
    return () => {
      // You can add any cleanup logic here if needed
    };
  }, []);

  return animatePath;
};

export default useSVGPathAnimation;
