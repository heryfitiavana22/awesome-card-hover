import React, { useRef, useState, useEffect, PropsWithChildren } from "react";

export function DynamicBorder({ children }: DynamicBorderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [coordinates, setCoordinates] = useState({ x: -350, y: -350 });

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const diffX = e.clientX - rect.x;
      const diffY = e.clientY - rect.y;
      setCoordinates({ x: diffX, y: diffY });
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="cover relative isolate"
      style={
        {
          "--x": `${coordinates.x}px`,
          "--y": `${coordinates.y}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

type DynamicBorderProps = PropsWithChildren<{}>;
