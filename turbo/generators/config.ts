// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation
import type { PlopTypes } from '@turbo/gen';

import generatePlopActionsArray from './utils/generateActions';
import setActionTypePackageJsonGenerator from './utils/setActionTypePackageJsonGenerator';
import setActionTypeTsConfigGenerator from './utils/setActionTypeTsConfigGenerator';

import { packageJsonDependencies } from './constants/packageJsonDependencies';
import { tsConfigPaths } from './constants/tsConfigPaths';
import { CustomGeneratorPlopTypes } from './constants/PlopTypes/CustomGeneratorPlopTypes';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  setActionTypePackageJsonGenerator(plop);
  setActionTypeTsConfigGenerator(plop);

  const templatesActions = generatePlopActionsArray();

  plop.setGenerator(CustomGeneratorPlopTypes.NextBoilerplate, {
    description: 'Adds a new app dashboard page template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the app you want to boilerplate?',
      },
      {
        type: 'list',
        name: 'template',
        message: 'What type of boilerplate you want to generate?',
        choices: ['Saas', 'Ecommerce', 'AdminDashboard'],
      },
    ],
    actions: function () {
      return [...templatesActions, packageJsonDependencies, tsConfigPaths];
    },
  });
}
