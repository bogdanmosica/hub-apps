/* eslint-disable react/no-array-index-key -- were using index for static items */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarNavItem } from "@hub/types";
import { cn } from "@hub/utils";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

export function DocsSidebarNav({
  items,
}: DocsSidebarNavProps): JSX.Element | null {
  const pathname = usePathname();

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div className={cn("pb-8")} key={index}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
            {item.title}
          </h4>
          {item.items ? (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps): JSX.Element | null {
  return items.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            className={cn(
              "flex w-full items-center rounded-md p-2 hover:underline",
              {
                "bg-muted": pathname === item.href,
              },
            )}
            href={item.href}
            key={index}
            rel={item.external ? "noreferrer" : ""}
            target={item.external ? "_blank" : ""}
          >
            {item.title}
          </Link>
        ) : (
          <span
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60"
            key={index}
          >
            {item.title}
          </span>
        ),
      )}
    </div>
  ) : null;
}
