import * as React from "react";
import type { MainFeaturesItem } from "@hub/types";

type HomeFeatureItemProps = {
  children?: React.ReactNode;
} & MainFeaturesItem;

export function HomeFeatureItem({
  title,
  icon,
  description,
}: HomeFeatureItemProps): JSX.Element {
  const Icon = icon as React.ElementType;
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
        <div className="space-y-2">
          <Icon className="text-3xl" />
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
