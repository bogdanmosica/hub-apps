import * as React from "react";
import type { MainTestimonialsItem } from "@hub/types";
import { HomeTestimonialsItem } from "./testimonials-item";

interface HomeFeaturesListProps {
  items?: MainTestimonialsItem[];
  children?: React.ReactNode;
}

export function HomeTestimonialsList({
  items = [],
}: HomeFeaturesListProps): JSX.Element {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
      {items.map((item) => (
        <HomeTestimonialsItem key={crypto.randomUUID()} {...item} />
      ))}
    </div>
  );
}
