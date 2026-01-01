import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";

export function useHeaderAnimation() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (current) => {
      // Show header when scrolling up, hide when scrolling down
      if (current < lastScrollY) {
        setIsHidden(false);
      } else if (current > lastScrollY && current > 50) {
        // Only hide after scrolling down more than 50px
        setIsHidden(true);
      }
      setLastScrollY(current);
    });
  }, [lastScrollY, scrollY]);

  return isHidden;
}
