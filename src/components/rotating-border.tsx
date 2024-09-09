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
