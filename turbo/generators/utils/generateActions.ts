import fs from "fs";
import path from "path";

type PlopAction = {
  type: "add";
  path: string;
  force: boolean;
  templateFile: string;
};

type PlopActions = PlopAction[];

export default function generatePlopActionsArray(
  templatesFolder = __dirname + "./../templates/SaaS",
  destProjectBasePath = "apps/{{name}}/src",
): PlopActions {
  const actions: PlopActions = [];

  function traverseDirectory(folder: string) {
    const items = fs.readdirSync(folder);

    items.forEach((item) => {
      const itemPath = path.join(folder, item);
      const stats = fs.statSync(itemPath);

      if (stats.isDirectory()) {
        // Recursively traverse subdirectories
        traverseDirectory(itemPath);
      } else if (stats.isFile() && item.endsWith(".hbs")) {
        const relativePath = path.relative(templatesFolder, itemPath);
        const templateFile = path
          .join("templates/SaaS", relativePath)
          .replace(/\\/g, "/");
        const destinationPath = path
          .join(destProjectBasePath, relativePath.replace(".hbs", ""))
          .replace(/\\/g, "/");

        actions.push({
          type: "add",
          path: destinationPath,
          force: true,
          templateFile: templateFile,
        });
      }
    });
  }

  traverseDirectory(templatesFolder);

  return actions;
}
