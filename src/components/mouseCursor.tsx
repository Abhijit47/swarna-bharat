import { useEffect, useRef } from "react";

const MouseCursor = () => {
  const cursorOuter = useRef<HTMLDivElement | null>(null);
  const cursorInner = useRef<HTMLDivElement | null>(null);
  const isHovering = useRef<boolean>(false);
  const mouseX = useRef<number>(0);
  const mouseY = useRef<number>(0);

  useEffect(() => {
    // Skip on touch devices
    if ("ontouchstart" in window) return;

    const outer = cursorOuter.current;
    const inner = cursorInner.current;

    if (!outer || !inner) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (!isHovering.current) {
        outer.style.transform = `translate(${mouseX.current}px, ${mouseY.current}px)`;
      }
      inner.style.transform = `translate(${mouseX.current}px, ${mouseY.current}px)`;
    };

    // Mouse enter handler for interactive elements
    const handleMouseEnter = (e: Event) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.classList.contains("cursor-pointer")
      ) {
        isHovering.current = true;
        outer.classList.add("cursor-hover");
        inner.classList.add("cursor-hover");
      }
    };

    // Mouse leave handler for interactive elements
    const handleMouseLeave = (e: Event) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.classList.contains("cursor-pointer")
      ) {
        isHovering.current = false;
        outer.classList.remove("cursor-hover");
        inner.classList.remove("cursor-hover");
      }
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    // Make cursors visible
    outer.style.visibility = "visible";
    inner.style.visibility = "visible";

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <div ref={cursorOuter} className="mouseCursor cursor-outer" />
      <div ref={cursorInner} className="mouseCursor cursor-inner" />
    </>
  );
};

export default MouseCursor;
