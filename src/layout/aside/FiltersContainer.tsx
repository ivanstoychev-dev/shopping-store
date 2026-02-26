import { type PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

function FiltersContainer({
  children,
  title,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <div className="flex flex-col gap-3 border-b pb-5 border-b-gray-400">
      <p className="font-bold font-montserrat text-3xl">{title}</p>
      <div className={cn(`flex flex-col justify-center gap-1`, className)}>
        {children}
      </div>
    </div>
  );
}

export default FiltersContainer;
