import Link from "next/link";
import { cn } from "@hub/utils";
import type { SiteConfig } from "@hub/types";
import { buttonVariants } from "../ui/button";

import "./hero-section.css";

interface HomeHeroSectionProps {
  siteConfig?: SiteConfig;
}

export function HomeHeroSection({
  siteConfig = {
    name: "",
    description: "",
    url: "",
    ogImage: "",
    links: {
      twitter: "",
      github: "",
    },
  },
}: HomeHeroSectionProps): JSX.Element {
  return (
    <section className="space-y-6 pb-8 pt-9 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          href={siteConfig.links.twitter}
          target="_blank"
        >
          Follow along on Twitter
        </Link>
        <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl">
          Revolutionize video creation with Swipe
          <div className="important_word text-[#c10528] mb-5 font-bold" />
        </h1>
        <div className="space-x-4 mt-4 w-full">
          <Link
            className={cn("w-2/6", buttonVariants({ variant: "default" }))}
            href="/login"
          >
            Get Started
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            href={siteConfig.links.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
