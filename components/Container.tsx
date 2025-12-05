import clsx from "clsx";
import { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType; // 👈 permite cambiar el tag (div, section, main, etc.)
  [key: string]: any; // 👈 permite pasar props adicionales (id, aria-label, etc.)
}

export default function Container({
  children,
  className,
  as: Tag = "div",
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={clsx("container-padding max-w-6xl mx-auto", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
