import * as React from "react";
import type { MainFeaturesItem } from "@hub/types";
import { HomeFeatureItem } from "./feature-item";

interface HomeFeaturesListProps {
  items?: MainFeaturesItem[];
  children?: React.ReactNode;
}

export function HomeFeaturesList({
  items = [],
}: HomeFeaturesListProps): JSX.Element {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
      {items.map((item) => (
        <HomeFeatureItem key={crypto.randomUUID()} {...item} />
      ))}
    </div>
  );
}
