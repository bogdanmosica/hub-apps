import * as React from "react";
import type { MainTestimonialsItem } from "@hub/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type HomeFeatureItemProps = {
  children?: React.ReactNode;
} & MainTestimonialsItem;

export function HomeTestimonialsItem({
  authorName,
  companyName,
  description,
}: HomeFeatureItemProps): JSX.Element {
  return (
    <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
      <CardHeader>
        <CardTitle>{authorName}</CardTitle>
        <CardDescription className="italic">{companyName}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
