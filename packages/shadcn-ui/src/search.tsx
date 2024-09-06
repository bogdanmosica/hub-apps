"use client";

import { cn } from "@hub/utils";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

type DocsSearchProps = React.HTMLAttributes<HTMLFormElement>;

export function DocsSearch({
  className,
  ...props
}: DocsSearchProps): JSX.Element {
  function onSubmit(event: React.SyntheticEvent): void {
    event.preventDefault();

    toast({
      title: "Not implemented",
      description: "We're still working on the search.",
    });
  }

  return (
    <form
      className={cn("relative w-full", className)}
      onSubmit={onSubmit}
      {...props}
    >
      <Input
        className="h-8 w-full sm:w-64 sm:pr-12"
        placeholder="Search documentation..."
        type="search"
      />
      <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </form>
  );
}
