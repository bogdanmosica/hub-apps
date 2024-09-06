import Link from "next/link";
import type { MainNavItem } from "@hub/types";
import { cn } from "@hub/utils";
import { Icons } from "./icons";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
  siteConfig: { name: string };
}

export function MobileNav({
  siteConfig,
  items,
  children,
}: MobileNavProps): JSX.Element {
  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden",
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link className="flex items-center space-x-2" href="/">
          <Icons.Logo />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60",
              )}
              href={item.disabled ? "#" : item.href}
              // eslint-disable-next-line react/no-array-index-key -- we're using index as a key here because the items are static
              key={index}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
