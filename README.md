# awesome-card-hover

Awesome design border on card hover

### Example

```typescript
function App() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 p-1 sm:grid-cols-2">
        {cardsData.map((card, index) => (
          <RotatingBorder key={index}>
            <Card title={card.title} description={card.description} />
          </RotatingBorder>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 p-1 sm:grid-cols-2">
        {cardsData.map((card, index) => (
          <DynamicBorder key={index}>
            <Card title={card.title} description={card.description} />
          </DynamicBorder>
        ))}
      </div>
    </>
  );
}

export default App;
```

### Components

- **dynamic-border.tsx**

```typescript
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
```

- **rotating-border.tsx**

```typescript
import { PropsWithChildren } from "react";

export function RotatingBorder({ children }: RotatingBorderProps) {
  return (
    <div className="animated-border group relative isolate rounded-xl overflow-hidden p-[1px]">
      <div className="border-animation group-hover:block"></div>
      {children}
    </div>
  );
}

type RotatingBorderProps = PropsWithChildren<{}>;
```

- **index.css**

```css
:root {
  --primary: #2af0fe;
}

/* dynamic-border */
.cover::before {
  content: "";
  position: absolute;
  inset: -2px;
  z-index: -1;
  border-radius: 13px;
  background: radial-gradient(
    250px circle at var(--x) var(--y),
    var(--primary) 0,
    transparent 100%
  );
}

/* rotating-border */
.border-animation {
  content: "";
  display: none;
  background: var(--border-bg);
  box-shadow: 0 0 40px 20px --var(--border-bg);
  width: calc(100% * 1.41421356237);
  padding-bottom: calc(100% * 1.41421356237);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  z-index: -1;
  animation: borderAnimation 2s linear infinite;

  --border-bg: conic-gradient(
    from 180deg at 50% 50%,
    var(--primary) 0deg,
    rgba(42, 138, 246, 0) 112.5deg,
    rgba(42, 138, 246, 0) 228.75deg,
    rgba(42, 138, 246, 0) 360deg
  );
}

@keyframes borderAnimation {
  0% {
    transform: translate(-50%, -50%) rotate(1turn);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0);
  }
}
```

- **card.tsx**

```typescript
export function Card({ description, title }: CardProps) {
  return (
    <a
      href="#"
      className="flex-1 flex flex-col h-full overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900"
    >
      <div className="flex flex-col flex-1 px-4 py-5 gap-x-8 gap-y-4 rounded-xl sm:p-6 bg-gray-900">
        <div>
          <div className="mb-2 pointer-events-none"></div>
          <p className="text-base font-bold text-gray-900 truncate dark:text-white">
            {title}
          </p>
          <div className="text-[15px] text-gray-400 mt-1">{description}</div>
        </div>
      </div>
    </a>
  );
}

type CardProps = {
  title: string;
  description: string;
};
```
