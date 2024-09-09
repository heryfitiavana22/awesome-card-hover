import { ComponentProps } from "react";

export function H2({ className = "", ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={
        "text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl " +
        className
      }
      {...props}
    />
  );
}

export function H3({ className = "", ...props }: ComponentProps<"h3">) {
  return (
    <h3
      className={
        "text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl " +
        className
      }
      {...props}
    />
  );
}
