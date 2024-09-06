// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import defaultConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/app/**/*.tsx",
    "./src/components/**/*.tsx",
    "../../packages/shadcn-ui/src/**/*.tsx",
  ],
  presets: [defaultConfig],
};

export default config;
