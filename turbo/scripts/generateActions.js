const fs = require('fs');
const path = require('path');

// type PlopAction = {
//   type: 'add';
//   path;
//   skipIfExists: boolean;
//   templateFile;
// };

// type PlopActions = PlopAction[];

function generatePlopActionsArray(
  templatesFolder = '../generators/templates',
  destProjectBasePath = 'apps/{{name}}/src'
) {
  const actions = [];

  function traverseDirectory(folder) {
    const items = fs.readdirSync(folder);

    items.forEach((item) => {
      const itemPath = path.join(folder, item);
      const stats = fs.statSync(itemPath);

      if (stats.isDirectory()) {
        // Recursively traverse subdirectories
        traverseDirectory(itemPath);
      } else if (stats.isFile() && item.endsWith('.hbs')) {
        const relativePath = path.relative(templatesFolder, itemPath);
        const templateFile = path
          .join('templates', relativePath)
          .replace(/\\/g, '/');
        const destinationPath = path
          .join(destProjectBasePath, relativePath.replace('.hbs', ''))
          .replace(/\\/g, '/');

        actions.push({
          type: 'add',
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

module.exports = generatePlopActionsArray;
