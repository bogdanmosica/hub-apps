const fs = require('fs');
const path = require('path');

// Function to copy and rename files
function copyAndRenameFiles(srcFolder, destFolder) {
  // Read all files and subdirectories in the source folder
  fs.readdir(srcFolder, (err, items) => {
      if (err) {
          return console.error(`Unable to scan directory: ${err}`);
      }

      // Iterate over all items in the directory
      items.forEach((item) => {
          const srcItemPath = path.join(srcFolder, item);
          const destItemPath = path.join(destFolder, item);

          // Check if the item is a directory
          fs.stat(srcItemPath, (err, stats) => {
              if (err) {
                  return console.error(`Unable to get stats of item: ${err}`);
              }

              if (stats.isDirectory()) {
                  // If it's a directory, create the corresponding directory in the destination
                  if (!fs.existsSync(destItemPath)) {
                      fs.mkdirSync(destItemPath, { recursive: true });
                  }
                  // Recursively call the function on the subdirectory
                  copyAndRenameFiles(srcItemPath, destItemPath);
              } else if (stats.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx'))) {
                  // If it's a .ts or .tsx file, rename it and copy to the destination
                  const extension = path.extname(item);
                  const baseName = path.basename(item, extension);
                  const newFileName = `${baseName}${extension}.hbs`;
                  const destFilePath = path.join(destFolder, newFileName);

                  // Read the content of the source file
                  fs.readFile(srcItemPath, 'utf8', (err, data) => {
                      if (err) {
                          return console.error(`Unable to read file: ${err}`);
                      }

                      // Write the content to the new file with .hbs extension
                      fs.writeFile(destFilePath, data, 'utf8', (err) => {
                          if (err) {
                              return console.error(`Unable to write file: ${err}`);
                          }
                          console.log(`File copied and renamed: ${destFilePath}`);
                      });
                  });
              }
          });
      });
  });
}

// Example usage
const sourceFolder = '../../apps/web/src';  // Replace with your source folder path
const destinationFolder = '../generators/templates';  // Replace with your destination folder path

// Ensure the destination folder exists
if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder, { recursive: true });
}

// Call the function to copy and rename files
copyAndRenameFiles(sourceFolder, destinationFolder);