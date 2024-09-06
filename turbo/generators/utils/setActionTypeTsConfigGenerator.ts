import type { PlopTypes } from '@turbo/gen';
import fs from 'fs';
import path from 'path';
import { CustomActionsPlopTypes } from '../constants/PlopTypes/CustomActionsPlopTypes';

type TConfig = {
  paths: Record<string, string[]>;
  baseUrl: string;
} & PlopTypes.ActionConfig;

type TAnswers = {
  name?: string;
};

export default function setActionTypeTsConfigGenerator(
  plop: PlopTypes.NodePlopAPI
) {
  plop.setActionType(
    CustomActionsPlopTypes.AddTsConfigPaths,
    function (answers: TAnswers, config) {
      const typedConfig = config as TConfig;

      if (!typedConfig || !typedConfig.paths || !typedConfig.baseUrl) {
        throw new Error('Paths or baseUrl configuration is missing');
      }

      const tsconfigPath = path.join(
        process.cwd(),
        'apps',
        answers?.name ?? '',
        'tsconfig.json'
      );

      if (!fs.existsSync(tsconfigPath)) {
        throw new Error('tsconfig.json not found');
      }

      const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));

      // Ensure "compilerOptions" exists in tsconfig.json
      if (!tsconfig.compilerOptions) {
        tsconfig.compilerOptions = {};
      }

      // Add or update the "baseUrl" value
      tsconfig.compilerOptions.baseUrl = typedConfig.baseUrl;

      // Ensure "paths" exists in tsconfig.json
      if (!tsconfig.compilerOptions.paths) {
        tsconfig.compilerOptions.paths = {};
      }

      // Add paths if they don't exist
      Object.entries(typedConfig.paths).forEach(([alias, pathsArray]) => {
        if (!tsconfig.compilerOptions.paths[alias]) {
          tsconfig.compilerOptions.paths[alias] = pathsArray;
        } else {
          // Avoid duplicates in paths array
          tsconfig.compilerOptions.paths[alias] = Array.from(
            new Set([...tsconfig.compilerOptions.paths[alias], ...pathsArray])
          );
        }
      });

      fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2), 'utf8');

      console.log(
        `Updated tsconfig.json with paths and baseUrl: ${typedConfig.baseUrl}`
      );
      return `--> Don't forget check files and see if typescript is working correctly.`;
    }
  );
}
