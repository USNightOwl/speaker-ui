import { cn } from "@/lib/cn";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <ul className="grid grid-cols-1 w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <li key={idx} className={cn("space-y-2", idx == 4 ? "col-span-2" : "col-span-1")}>
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-6 my-1"></Skeleton>
            <Skeleton className="h-6"></Skeleton>
          </li>
        ))}
    </ul>
  );
};

export default Loading;
