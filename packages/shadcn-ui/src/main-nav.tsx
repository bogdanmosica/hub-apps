"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import type { MainNavItem } from "@hub/types";
import { cn } from "@hub/utils";
import type { ReactNode } from "react";
import { useState } from "react";
import { Icons } from "./icons";
import { MobileNav } from "./mobile-nav";

interface MainNavProps {
  items?: MainNavItem[];
  siteConfig?: { name: string };
  children?: ReactNode;
}

export function MainNav({
  items,
  children,
  siteConfig = { name: "" },
}: MainNavProps): JSX.Element {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link className="hidden items-center space-x-2 md:flex" href="/">
        <Icons.Logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items.map((item, index) => (
            <Link
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80",
              )}
              href={item.disabled ? "#" : item.href}
              // eslint-disable-next-line react/no-array-index-key -- we're using index as a key here because the items are static
              key={index}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => {
          setShowMobileMenu(!showMobileMenu);
        }}
        type="button"
      >
        {showMobileMenu ? <Icons.Close /> : <Icons.Logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items ? (
        <MobileNav items={items}>{children}</MobileNav>
      ) : null}
    </div>
  );
}
