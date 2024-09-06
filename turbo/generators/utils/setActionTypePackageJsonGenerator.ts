import type { PlopTypes } from '@turbo/gen';
import fs from 'fs';
import path from 'path';
import { CustomActionsPlopTypes } from '../constants/PlopTypes/CustomActionsPlopTypes';

type TConfig = {
  dependencies: string[];
  devDependencies: string[];
} & PlopTypes.ActionConfig;

type TAnswers = {
  name?: string;
};

export default function setActionTypePackageJsonGenerator(
  plop: PlopTypes.NodePlopAPI
) {
  plop.setActionType(
    CustomActionsPlopTypes.AddDependencies,
    function (answers: TAnswers, config) {
      const localConfig = config as TConfig;

      // Path to the package.json file
      const packageJsonPath = path.join(
        process.cwd(),
        'apps',
        answers?.name ?? '',
        'package.json'
      );

      if (!fs.existsSync(packageJsonPath)) {
        throw new Error('package.json not found');
      }
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

      // Read package.json
      const dependenciesToAdd = localConfig.dependencies || [];
      const devDependenciesToAdd = localConfig.devDependencies || [];
      const currentDependencies = packageJson.dependencies || {};
      const currentDevDependencies = packageJson.devDependencies || {};

      const newDependencies = dependenciesToAdd.filter((dep) => {
        const [name] = dep.split('|');
        return !currentDependencies[name] && !currentDevDependencies[name];
      });

      if (newDependencies.length === 0) {
        console.log('All dependencies already exists, nothing to add.');
      } else {
        newDependencies.forEach((dep) => {
          const atIndex = dep.lastIndexOf('|');
          const name = dep.slice(0, atIndex);
          const version = dep.slice(atIndex + 1);

          packageJson.dependencies = {
            ...packageJson.dependencies,
            [name]: version,
          };
        });
        console.log(`Added dependencies: ${newDependencies.join(', ')}`);
      }

      const newDevDependencies = devDependenciesToAdd.filter((dep) => {
        const [name] = dep.split('|');
        return !currentDependencies[name] && !currentDevDependencies[name];
      });

      if (newDevDependencies.length === 0) {
        console.log('All devDependencies already exists, nothing to add.');
      } else {
        newDevDependencies.forEach((dep) => {
          const atIndex = dep.lastIndexOf('|');
          const name = dep.slice(0, atIndex);
          const version = dep.slice(atIndex + 1);

          packageJson.devDependencies = {
            ...packageJson.devDependencies,
            [name]: version,
          };
        });
        console.log(`Added devDependencies: ${newDevDependencies.join(', ')}`);
      }

      fs.writeFileSync(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2),
        'utf8'
      );

      return `--> Don't forget to run "npm install" in root folder to install new dependencies`;
    }
  );
}
