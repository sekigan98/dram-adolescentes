import clsx from "clsx";

export default function Container({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("container-padding max-w-6xl mx-auto", className)}>
      {children}
    </div>
  );
}
