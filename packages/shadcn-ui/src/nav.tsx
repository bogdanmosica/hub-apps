"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideProps } from "lucide-react";
import type { SidebarNavItem } from "@hub/types";
import { cn } from "@hub/utils";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { Icons } from "./icons";

type IconMap = Record<
  string,
  ForwardRefExoticComponent<
    Omit<LucideProps, "ref" | "className"> &
      RefAttributes<SVGSVGElement> & { className?: string }
  >
>;

const iconMap: IconMap = Icons as unknown as IconMap;

interface DashboardNavProps {
  items: SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps): JSX.Element | null {
  const path = usePathname();

  if (!items.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const iconKey =
          typeof item.icon === "string" ? item.icon : "arrowRight";
        const Icon = iconMap[iconKey] as ForwardRefExoticComponent<
          Omit<LucideProps, "ref" | "className"> & { className?: string }
        >;
        return (
          item.href && (
            // eslint-disable-next-line react/no-array-index-key -- we're using index as key here because the items are static
            <Link href={item.disabled ? "/" : item.href} key={index}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
